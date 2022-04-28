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
          $ref: '#/definitions/Track'
        }

        #swagger.responses[404] = {
          description: 'Track not found',
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
          $stream_url: 'http://example.com/track.mp3'
        }

        #swagger.responses[404] = {
          description: 'Track not found',
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

  track.getStream(req, res);
});

module.exports = router;
