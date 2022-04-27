const express = require("express");

const router = express.Router();

const { playlist } = require("../controllers");
const { verifyToken } = require("../middleware/auth");

router.delete("/:playlistId", verifyToken, (req, res) => {
  /*
        #swagger.path = "/playlists/{playlistId}"
        #swagger.tags = ["Playlists"]

        #swagger.parameters["playlistId"] = {
          in: 'path',
          description: 'The playlist id',
          required: true,
          type: 'number',
          schema: 123456
        } 
                
        #swagger.responses[200] = {
          description: 'success',
          schema: { 
            $id: 123,
          }
        }

        #swagger.responses[403] = {
          description: 'Not authorized',
          schema: { 
            $ref: '#/definitions/ErrorForbidden'
          }
        }
        
        #swagger.responses[403] = {
          description: 'No auth token provided',
          schema: { 
            $ref: '#/definitions/ErrorNoToken'
          }
        }

        #swagger.responses[403] = {
          description: 'Invalid user',
          schema: {
            $ref: '#/definitions/ErrorInvalidUser'
          }
        }
        
        #swagger.responses[404] = {
          description: "Playlist not found",
          schema: {
            $ref: '#/definitions/ErrorNotFound'
          }
        }
        
        #swagger.responses[500] = {
          description: 'Internal error',
          schema: { 
            $ref: '#/definitions/ErrorInternal'
          }
        } 
    */

  playlist.deletePlaylist(req, res);
});

router.post("/", verifyToken, (req, res) => {
  /*
        #swagger.path = "/playlists"
        #swagger.tags = ["Playlists"]

        #swagger.parameters["title"] = {
          in: 'body',
          description: 'The playlist title',
          required: true,
          type: 'string',
          schema: "My beautiful playlist"
        } 
                
        #swagger.responses[200] = {
          description: 'success',
          schema: { 
            $ref: '#/definitions/Playlist'
          }
        }
        
        #swagger.responses[403] = {
          description: 'Not authorized',
          schema: { 
            $ref: '#/definitions/ErrorForbidden'
          }
        }

        #swagger.responses[403] = {
          description: 'No auth token provided',
          schema: { 
            $ref: '#/definitions/ErrorNoToken'
          }
        }

        #swagger.responses[403] = {
          description: 'Invalid user',
          schema: {
            $ref: '#/definitions/ErrorInvalidUser'
          }
        }
        
        #swagger.responses[500] = {
          description: 'Internal error',
          schema: { 
            $ref: '#/definitions/ErrorInternal'
          }
        } 
    */

  playlist.createPlaylist(req, res);
});

router.get("/:playlistId", (req, res) => {
  /*
        #swagger.path = "/playlists/{playlistId}"
        #swagger.tags = ["Playlists"]

        #swagger.parameters["playlistId"] = {
          in: 'path',
          description: 'The playlist id',
          required: true,
          type: 'number',
          schema: 123456
        } 

        #swagger.responses[200] = {
          description: 'success',
          schema: { 
            $ref: '#/definitions/Playlist'
          }
        }

        #swagger.responses[404] = {
          description: "Playlist not found",
          schema: {
            $ref: '#/definitions/ErrorNotFound'
          }
        }
        
        #swagger.responses[500] = {
          description: 'Internal error',
          schema: { 
            $ref: '#/definitions/ErrorInternal'
          }
        } 
    */

  playlist.getPlaylist(req, res);
});

router.get("/:playlistId/tracks", (req, res) => {
  /*
        #swagger.path = "/playlists/{playlistId}/tracks"
        #swagger.tags = ["Playlists"]

        #swagger.parameters["playlistId"] = {
          in: 'path',
          description: 'The playlist id',
          required: true,
          type: 'number',
          schema: 123456
        } 

        #swagger.responses[200] = {
          description: 'success',
          schema: [{ 
            $ref: '#/definitions/Track'
          }]
        }

        #swagger.responses[404] = {
          description: "Playlist not found",
          schema: {
            $ref: '#/definitions/ErrorNotFound'
          }
        }
        
        #swagger.responses[500] = {
          description: 'Internal error',
          schema: { 
            $ref: '#/definitions/ErrorInternal'
          }
        } 
    */

  playlist.getPlaylistTracks(req, res);
});

module.exports = router;
