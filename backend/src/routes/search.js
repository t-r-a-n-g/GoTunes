const express = require("express");

const router = express.Router();

const { search } = require("../controllers");

router.get("/all/:q", (req, res) => {
  /*
        #swagger.path = "/search/all/{q}"
        #swagger.tags = ["Search"]

        #swagger.parameters["q"] = {
          in: 'path',
          description: 'The search query',
          required: true,
          type: 'string',
          schema: 'drum and bass'
        } 

        #swagger.parameters["limit"] = {
          in: 'query',
          description: 'Max search results to retrieve',
          required: false,
          type: 'integer',
          schema: 20
        } 

        #swagger.parameters["offset"] = {
          in: 'query',
          description: 'Skip the first X results',
          required: false,
          type: 'integer',
          schema: 0
        } 

        #swagger.responses[200] = {
          description: 'success',
          schema: []
        }

        #swagger.responses[500] = {
          description: 'Internal error',
          schema: { 
            $ref: '#/definitions/ErrorInternal'
          }
        } 
    */

  search.all(req, res);
});

router.get("/artists/:q", (req, res) => {
  /*
        #swagger.path = "/search/artists/{q}"
        #swagger.tags = ["Search"]

        #swagger.parameters["q"] = {
          in: 'path',
          description: 'The search query',
          required: true,
          type: 'string',
          schema: 'drum and bass'
        } 

        #swagger.parameters["limit"] = {
          in: 'query',
          description: 'Max search results to retrieve',
          required: false,
          type: 'integer',
          schema: 20
        } 

        #swagger.parameters["offset"] = {
          in: 'query',
          description: 'Skip the first X results',
          required: false,
          type: 'integer',
          schema: 0
        } 

        #swagger.responses[200] = {
          description: 'success',
          schema: [{ 
            $ref: '#/definitions/Artist'
          }]
        }

        #swagger.responses[500] = {
          description: 'Internal error',
          schema: { 
            $ref: '#/definitions/ErrorInternal'
          }
        } 
    */

  search.artists(req, res);
});

router.get("/albums/:q", (req, res) => {
  /*
        #swagger.path = "/search/albums/{q}"
        #swagger.tags = ["Search"]

        #swagger.parameters["q"] = {
          in: 'path',
          description: 'The search query',
          required: true,
          type: 'string',
          schema: 'drum and bass'
        } 

        #swagger.parameters["limit"] = {
          in: 'query',
          description: 'Max search results to retrieve',
          required: false,
          type: 'integer',
          schema: 20
        } 

        #swagger.parameters["offset"] = {
          in: 'query',
          description: 'Skip the first X results',
          required: false,
          type: 'integer',
          schema: 0
        } 

        #swagger.responses[200] = {
          description: 'success',
          schema: [{ 
            $ref: '#/definitions/Album'
          }]
        }

        #swagger.responses[500] = {
          description: 'Internal error',
          schema: { 
            $ref: '#/definitions/ErrorInternal'
          }
        } 
    */

  search.albums(req, res);
});

router.get("/playlists/:q", (req, res) => {
  /*
        #swagger.path = "/search/playlists/{q}"
        #swagger.tags = ["Search"]

        #swagger.parameters["q"] = {
          in: 'path',
          description: 'The search query',
          required: true,
          type: 'string',
          schema: 'drum and bass'
        } 

        #swagger.parameters["limit"] = {
          in: 'query',
          description: 'Max search results to retrieve',
          required: false,
          type: 'integer',
          schema: 20
        } 

        #swagger.parameters["offset"] = {
          in: 'query',
          description: 'Skip the first X results',
          required: false,
          type: 'integer',
          schema: 0
        } 

        #swagger.responses[200] = {
          description: 'success',
          schema: [{
            $ref: '#/definitions/UserPlaylist'
          }]
        }

        #swagger.responses[500] = {
          description: 'Internal error',
          schema: { 
            $ref: "#/definitions/ErrorInternal"
          }
        } 
    */

  search.playlists(req, res);
});

router.get("/tracks/:q", (req, res) => {
  /*
        #swagger.path = "/search/tracks/{q}"
        #swagger.tags = ["Search"]

        #swagger.parameters["q"] = {
          in: 'path',
          description: 'The search query',
          required: true,
          type: 'string',
          schema: 'drum and bass'
        } 

        #swagger.parameters["limit"] = {
          in: 'query',
          description: 'Max search results to retrieve',
          required: false,
          type: 'integer',
          schema: 20
        } 

        #swagger.parameters["offset"] = {
          in: 'query',
          description: 'Skip the first X results',
          required: false,
          type: 'integer',
          schema: 0
        } 

        #swagger.responses[200] = {
          description: 'success',
          schema: [{ 
            $ref: '#/definitions/Track'
          }]
        }

        #swagger.responses[500] = {
          description: 'Internal error',
          schema: { 
            $ref: '#/definitions/ErrorInternal'
          }
        } 
    */

  search.tracks(req, res);
});

router.get("/users/:q", (req, res) => {
  /*
        #swagger.path = "/search/users/{q}"
        #swagger.tags = ["Search"]
        #swagger.summary = "soundcloud | internal"

        #swagger.parameters["q"] = {
          in: 'path',
          description: 'The search query',
          required: true,
          type: 'string',
          schema: 'drum and bass'
        } 

        #swagger.parameters["limit"] = {
          in: 'query',
          description: 'Max search results to retrieve',
          required: false,
          type: 'integer',
          schema: 20
        } 

        #swagger.parameters["offset"] = {
          in: 'query',
          description: 'Skip the first X results',
          required: false,
          type: 'integer',
          schema: 0
        } 
        
        #swagger.parameters["src"] = {
          in: 'query',
          description: 'Where to get the data from',
          required: false,
          type: 'string',
          schema: "soundcloud"
        }

        #swagger.responses[200] = {
          description: 'success',
          schema: [{ 
            $ref: '#/definitions/User'
          }]
        }

        #swagger.responses[500] = {
          description: 'Internal error',
          schema: { 
            $ref: '#/definitions/ErrorInternal'
          }
        } 
  */
  search.users(req, res);
});

module.exports = router;
