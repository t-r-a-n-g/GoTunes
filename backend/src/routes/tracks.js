const express = require("express");

const router = express.Router();

const { track } = require("../controllers");

router.get("/:trackId", (req, res) => {
  /*
        #swagger.path = "/tracks/{trackId}"
        #swagger.tags = ["Tracks"]

        #swagger.parameters["trackId"] = {
          in: 'path',
          description: 'The track id',
          required: true,
          type: 'number',
          schema: 123456
        } 

        #swagger.responses[200] = {
          description: 'success',
          schema: { 
            $id: 123,
  			$cover: "http://url-to-cover.com",
  			$description: "Great Track!",
  			$duration: 1324123,
  			$genres: ["Drum 'n' Bass"],
  			$artist_id: 1234,
  			$album_id: 1234,
              $release_date: "1990-08-12",
  			$title: "album title",
  			$source: "e.g. soundcloud"
          }
        }

        #swagger.responses[404] = {
          description: 'Track not found',
          schema: { 
            $errors: {
                $album: "err-not-found"
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

  track.getTrack(req, res);
});

router.get("/:trackId/stream", (req, res) => {
  /*
        #swagger.path = "/tracks/{trackId}/stream"
        #swagger.tags = ["Tracks"]

        #swagger.parameters["trackId"] = {
          in: 'path',
          description: 'The track id',
          required: true,
          type: 'number',
          schema: 123456
        } 

        #swagger.responses[200] = {
          description: 'success',
          schema: { 
            $url: "http://stream-url.com/track.mp3"
          }
        }

        #swagger.responses[404] = {
          description: 'Track not found',
          schema: { 
            $errors: {
                $album: "err-not-found"
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

  track.getStream(req, res);
});

module.exports = router;
