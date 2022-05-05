const express = require("express");

const router = express.Router();

const { artist } = require("../controllers");

router.get("/:artistId", (req, res) => {
  /*
        #swagger.path = "/artists/{artistId}"
        #swagger.tags = ["Artist"]

        #swagger.parameters["artistId"] = {
          in: 'path',
          description: 'The artist id',
          required: true,
          type: 'number',
          schema: 123456
        } 

        #swagger.responses[200] = {
          description: "Success",
          schema: {
            $ref: '#/definitions/Artist'
          }
        }

        #swagger.responses[404] = {
          description: 'Artist not found',
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

  artist.getArtist(req, res);
});

router.get("/:artistId/albums", (req, res) => {
  /*
        #swagger.path = "/artists/{artistId}/albums"
        #swagger.tags = ["Artist"]

        #swagger.parameters["artistId"] = {
          in: 'path',
          description: 'The artist id',
          required: true,
          type: 'number',
          schema: 123456
        } 

        #swagger.responses[200] = {
          description: "Success",
          schema: [{
            $ref: '#/definitions/Album'
          }]
        }

        #swagger.responses[404] = {
          description: 'Artist not found',
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

  artist.getAlbums(req, res);
});

// router.get("/:artistId/playlists", (req, res) => {
/*
        #swagger.path = "/artists/{artistId}/playlists"
        #swagger.tags = ["Artist"]

        #swagger.parameters["artistId"] = {
          in: 'path',
          description: 'The artist id',
          required: true,
          type: 'number',
          schema: 123456
        } 

        #swagger.responses[200] = {
          description: "Success",
          schema: [{
            $ref: '#/definitions/Playlist'
          }]
        }

        #swagger.responses[404] = {
          description: 'Artist not found',
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

// artist.getPlaylists(req, res);
// });

router.get("/:artistId/tracks", (req, res) => {
  /*
        #swagger.path = "/artist/{artistId}/tracks"
        #swagger.tags = ["Artist"]

        #swagger.parameters["artistId"] = {
          in: 'path',
          description: 'The artist id',
          required: true,
          type: 'number',
          schema: 123456
        } 

        #swagger.responses[200] = {
          description: "Success",
          schema: [{
            $ref: '#/definitions/Track'
          }]
        }

        #swagger.responses[404] = {
          description: 'Artist not found',
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

  artist.getTracks(req, res);
});

module.exports = router;
