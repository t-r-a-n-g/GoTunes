const axios = require("axios");
const { NotFoundError } = require("../../exceptions");

class SoundCloud {
  constructor(clientId) {
    this.clientId = clientId;
  }

  static formatUserData(users) {
    const userData = Array.isArray(users) ? users : [users];
    const data = userData.map((user) => {
      return {
        id: user.id,
        username: user.username,
        userProfile: {
          avatar: user.avatar_url,
          biography: user.description || null,
        },
        kind: "user",
        source: "soundcloud",
      };
    });

    return data;
  }

  static formatArtistData(artists) {
    const artistsData = Array.isArray(artists) ? artists : [artists];
    const data = artistsData.map((artist) => {
      return {
        id: artist.id,
        name: artist.username,
        avatar: artist.avatar_url,
        description: artist.description,
        kind: "artist",
        source: "soundcloud",
      };
    });

    return Array.isArray(artists) ? data : data[0];
  }

  static formatAlbumData(albums) {
    const albumData = Array.isArray(albums) ? albums : [albums];
    const data = albumData.map((album) => {
      return {
        id: album.id,
        cover: album.artwork_url,
        description: album.description,
        duration: album.duration,
        genres: [album.genre],
        release_date: album.release_date,
        artist_id: album.user_id,
        title: album.title,
        artist: SoundCloud.formatArtistData(album.user),
        kind: "album",
        source: "soundcloud",
      };
    });

    return Array.isArray(albums) ? data : data[0];
  }

  static formatPlaylistData(playlists) {
    const playlistData = Array.isArray(playlists) ? playlists : [playlists];
    const data = playlistData.map((playlist) => {
      return {
        can_edit: false,
        is_creator: false,
        playlist: {
          id: playlist.id,
          cover: playlist.artwork_url,
          description: playlist.description,
          duration: playlist.duration,
          genres: [playlist.genre],
          user_id: playlist.user_id,
          title: playlist.title,
          kind: "playlist",
          source: "soundcloud",
        },
        user: SoundCloud.formatUserData(playlist.user),
      };
    });

    return Array.isArray(playlists) ? data : data[0];
  }

  async formatTrackData(tracks) {
    const trackData = Array.isArray(tracks) ? tracks : [tracks];
    const data = [];

    for (const track of trackData) {
      // some tracks are hidden behind a paywall, they are missing a lot of properties like duration
      if (track.duration) {
        // eslint-disable-next-line
        const streamUrl = await this.getTrackStreamUrl(track);

        if (streamUrl) {
          const title =
            track.duration !== track.full_duration
              ? `PREVIEW | ${track.title}`
              : track.title;

          data.push({
            id: track.id,
            cover: track.artwork_url,
            description: track.description,
            duration: track.duration,
            genres: [track.genre],
            artist_id: track.user_id,
            album_id: null,
            title,
            release_date: track.release_date,
            stream_url: streamUrl,
            artist: SoundCloud.formatArtistData(track.user),
            kind: "track",
            source: "soundcloud",
          });
        }
      }
    }

    if (data.length <= 0) return null;
    return Array.isArray(tracks) ? data : data[0];
  }

  async get(type, params = {}) {
    const defaultParams = {
      limit: params.limit || 20,
      offset: params.offset || 0,
      q: params.q,
      client_id: this.clientId,
    };
    const urlParameters = Object.entries(defaultParams)
      .map((e) => e.join("="))
      .join("&");

    const url = `https://api-v2.soundcloud.com${type}?${urlParameters}`;

    let data = {};
    try {
      const res = await axios({
        url,
        headers: {
          "x-requested-with": "https://soundcloud.com",
        },
      });

      data = res.data;
    } catch (err) {
      if (err.response.status === 404)
        throw new NotFoundError("Resource not found");

      throw err;
    }

    return data;
  }

  async search(item, params) {
    const url = item ? `/search/${item}` : "/search";
    const res = await this.get(url, params);

    return res;
  }

  async searchAll(q, options) {
    const res = await this.search(null, { q, ...options });
    const data = [];
    for (const item of res.collection) {
      let d = null;

      switch (item.kind) {
        case "user":
          d = SoundCloud.formatArtistData(item);
          break;

        case "playlist":
          if (item.is_album) d = SoundCloud.formatAlbumData(item);
          d = SoundCloud.formatPlaylistData(item);
          break;

        case "track":
          // eslint-disable-next-line
          d = await this.formatTrackData(item);
          break;

        default:
          d = null;
      }

      if (d) data.push(d);
    }
    return data;
  }

  async searchArtists(q, options, format = true) {
    const res = await this.search("users", { q, ...options });
    const data = format
      ? SoundCloud.formatArtistData(res.collection)
      : res.collection;

    return data;
  }

  async searchUsers(q, options) {
    const data = await this.searchArtists(q, options, false);
    return SoundCloud.formatUserData(data);
  }

  async searchAlbums(q, options) {
    const res = await this.search("albums", { q, ...options });
    const data = SoundCloud.formatAlbumData(res.collection);

    return data;
  }

  async searchPlaylists(q, options) {
    const res = await this.search("playlists", { q, ...options });
    const data = SoundCloud.formatPlaylistData(res.collection);

    return data;
  }

  async searchTracks(q, options) {
    const res = await this.search("tracks", { q, ...options });
    const data = this.formatTrackData(res.collection);

    return data;
  }

  async getUser(id) {
    return this.getArtist(id);
  }

  async getArtist(id) {
    const res = await this.get(`/users/${id}`);
    const data = SoundCloud.formatArtistData(res);

    return data;
  }

  async getArtistAlbums(id) {
    const res = await this.get(`/users/${id}/albums`);
    const data = SoundCloud.formatAlbumData(res.collection);

    return data;
  }

  async getUserPlaylists(id) {
    const res = await this.get(`/users/${id}/playlists_without_albums`);
    const data = SoundCloud.formatPlaylistData(res.collection);

    return data;
  }

  async getArtistTracks(id) {
    const res = await this.get(`/users/${id}/tracks`);
    const data = await this.formatTrackData(res.collection);

    return data;
  }

  async getAlbum(id, format = true) {
    const res = await this.get(`/playlists/${id}`);
    const data = format ? SoundCloud.formatAlbumData(res) : res;

    return data;
  }

  async getAlbumTracks(id) {
    const res = await this.getAlbum(id, false);
    const data = await this.formatTrackData(res.tracks);

    return data;
  }

  async getPlaylist(id) {
    const res = await this.getAlbum(id, false);
    const data = SoundCloud.formatPlaylistData(res);

    return data;
  }

  async getPlaylistTracks(id) {
    return this.getAlbumTracks(id);
  }

  async getTrack(id) {
    const res = await this.get(`/tracks/${id}`);
    const data = this.formatTrackData(res);

    return data;
  }

  async getTrackStreamUrl(track) {
    const transcodings = track.media?.transcodings;
    if (!transcodings || transcodings.length <= 0) {
      return null;
    }

    const tIndex = transcodings.length === 1 ? 0 : 1;
    // They return a playlist file, so we filter them out for now
    // ToDo: Take a look to this
    if (!transcodings[tIndex].url || tIndex === 0) {
      return null;
    }

    const streamUrl = `${transcodings[tIndex].url}?client_id=${this.clientId}`;
    const res = await axios({
      url: streamUrl,
      headers: {
        "x-requested-with": "https://soundcloud.com",
      },
    });

    const mp3File = res.data.url;

    // Same thing as above - filter out playlist format. Fuck soundcloud
    if (mp3File.includes(".m3u8")) return null;
    return mp3File;
  }
}

const instance = new SoundCloud(process.env.SC_CLIENT_ID);
Object.freeze(instance);

module.exports = instance;
