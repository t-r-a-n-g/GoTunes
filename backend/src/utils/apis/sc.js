const axios = require("axios");
const { NotFoundError } = require("../../exceptions");

class SoundCloud {
  constructor(clientId) {
    this.clientId = clientId;
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
        id: playlist.id,
        cover: playlist.artwork_url,
        description: playlist.description,
        duration: playlist.duration,
        genres: [playlist.genre],
        user_id: playlist.user_id,
        title: playlist.title,
        kind: "playlist",
        source: "soundcloud",
      };
    });

    return Array.isArray(playlists) ? data : data[0];
  }

  async formatTrackData(tracks) {
    const trackData = Array.isArray(tracks) ? tracks : [tracks];

    const data = await Promise.all(
      trackData.map(async (track) => {
        const streamUrl = await this.getTrackStreamUrl(track);
        return {
          id: track.id,
          cover: track.artwork_url,
          description: track.description,
          duration: track.duration,
          genres: [track.genre],
          artist_id: track.user_id,
          album_id: null,
          title: track.title,
          release_date: track.release_date,
          stream_url: streamUrl,
          kind: "track",
          source: "soundcloud",
        };
      })
    );

    return Array.isArray(tracks) ? data : data[0];
  }

  async get(type, params) {
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
    const data = Promise.all(
      res.collection.map(async (item) => {
        switch (item.kind) {
          case "user":
            return SoundCloud.formatArtistData(item);

          case "playlist":
            if (item.is_album) return SoundCloud.formatAlbumData(item);
            return SoundCloud.formatPlaylistData(item);

          case "track":
            return this.formatTrackData(item);

          default:
            return {};
        }
      })
    );

    return data;
  }

  async searchArtists(q, options) {
    const res = await this.search("users", { q, ...options });
    const data = SoundCloud.formatArtistData(res.collection);

    return data;
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

  async getArtistPlaylists(id) {
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
    return this.getAlbum(id);
  }

  async getPlaylistTracks(id) {
    return this.getAlbumTracks(id);
  }

  async getTrack(id) {
    const res = await this.get(`/tracks/${id}`);
    return res;
  }

  async getTrackStreamUrl(track) {
    const streamUrl = `${track.media?.transcodings[1]?.url}?client_id=${this.clientId}`;

    const res = await axios({
      url: streamUrl,
      headers: {
        "x-requested-with": "https://soundcloud.com",
      },
    });

    const mp3File = res.data.url;
    return mp3File;
  }
}

const instance = new SoundCloud(process.env.SC_CLIENT_ID);
Object.freeze(instance);

module.exports = instance;
