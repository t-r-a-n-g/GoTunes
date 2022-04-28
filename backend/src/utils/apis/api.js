/* eslint-disable class-methods-use-this */
const db = require("../../models");
const { NotFoundError } = require("../../exceptions");

class InternalAPI {
  constructor() {
    this.userAttributes = ["id", "username", "kind", "source"];
  }

  async getPlaylist(id) {
    const { User, UserProfile, Playlist, PlaylistUser } = db;

    /* const playlist = await Playlist.findOne({ 
      where: { id },  
      include: [
        {
          model: User,
          attributes: this.userAttributes,
          include: UserProfile
        },
        {
          model: PlaylistUser,
          where: { is_creator: true }
        }
      ]
    })

    if (!playlist) throw new NotFoundError();
    console.log(playlist);
    return playlist; */
    
    // ToDo: combine to single sql query
    // ToDo: Check if current user can edit playlist / is playlist creator

    const playlist = await Playlist.findOne({ where: { id } });
    if (!playlist) throw new NotFoundError();

    const user = await PlaylistUser.findOne({ 
      where: { 
        playlistId: id, 
        is_creator: true 
      }, 

      include: {
        model: User,
        attributes: this.userAttributes,
        include: UserProfile,
      }  
    })

    return {
      can_edit: false,
      is_creator: false,
      user: user.user.get({ plain: true }),
      playlist: playlist.get({ plain: true })
    };
  }

  async getUserPlaylists(id) {
    // ToDo: return only playlists created by current user if request comes from another user, 
    //       otherwise return all playlists (with is_creator: false)
    const { User, UserProfile, Playlist, PlaylistUser } = db;

    const userPlaylists = await PlaylistUser.findAll({
      where: {
        userId: id,
        is_creator: true,
      },
      include: [
        {
          model: User,
          attributes: this.userAttributes,
          include: UserProfile
        }, 
        Playlist,
      ],
    });

    // if(!userPlaylists) throw new NotFoundError();
    //console.log(userPlaylists);
    // const playlists = user.getPlaylists();
    return userPlaylists;
  }
}

const api = new InternalAPI();
Object.freeze(api);

module.exports = api;
