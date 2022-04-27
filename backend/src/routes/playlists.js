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
            $errors: {
                $auth: "err-auth-not-authorized"
            } 
          }
        }
        
        #swagger.responses[403] = {
          description: 'No auth token provided',
          schema: { 
            $errors: {
                $auth: "err-auth-no-token"
            } 
          }
        }
        
        #swagger.responses[404] = {
          description: "Playlist not found",
          schema: {
            $errors: {
              $playlist: "err-not-found"
            }
          }
        }
        
        #swagger.responses[500] = {
          description: 'Internal error',
          schema: { 
            $errors: {
                $server: "err-internal"
            } 
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
            $id: 123,
      			$cover: "http://url-to-cover.com",
      			$description: "Great Playlist!",
      			$duration: 1324123,
      			$genres: ["Drum 'n' Bass"],
      			$user_id: 1234,
      			$title: "playlist title",
      			$source: "e.g. soundcloud"
          }
        }

        #swagger.responses[403] = {
          description: 'Not authorized',
          schema: { 
            $errors: {
                $auth: "err-auth-not-authorized"
            } 
          }
        }
        
        #swagger.responses[403] = {
          description: 'No auth token provided',
          schema: { 
            $errors: {
                $auth: "err-auth-no-token"
            } 
          }
        }
        
        #swagger.responses[500] = {
          description: 'Internal error',
          schema: { 
            $errors: {
                $server: "err-internal"
            } 
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
            $id: 123,
      			$cover: "http://url-to-cover.com",
      			$description: "Great Playlist!",
      			$duration: 1324123,
      			$genres: ["Drum 'n' Bass"],
      			$user_id: 1234,
      			$title: "playlist title",
      			$source: "e.g. soundcloud"
          }
        }

        #swagger.responses[404] = {
          description: 'Playlist not found',
          schema: { 
            $errors: {
                $playlist: "err-not-found"
            } 
          }
        }
        
        #swagger.responses[500] = {
          description: 'Internal error',
          schema: { 
            $errors: {
                $server: "err-internal"
            } 
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
            $id: 123,
      			$cover: "http://url-to-cover.com",
      			$description: "Great Track!",
      			$duration: 1324123,
      			$genres: ["Drum 'n' Bass"],
      			$artist_id: 1234,
      			$album_id: 1234,
                  $release_date: "1990-08-12",
      			$title: "track title",
      			$stream_url: "http://stream-url.com/track.mp3",
                $source: "e.g. soundcloud"
          }]
        }

        #swagger.responses[404] = {
          description: 'Playlist not found',
          schema: { 
            $errors: {
                $playlist: "err-not-found"
            } 
          }
        }
        
        #swagger.responses[500] = {
          description: 'Internal error',
          schema: { 
            $errors: {
                $server: "err-internal"
            } 
          }
        } 
    */

  playlist.getPlaylistTracks(req, res);
});

module.exports = router;
