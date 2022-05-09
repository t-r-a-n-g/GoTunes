const express = require("express");

const router = express.Router();
const { album } = require("../controllers");

router.get("/:albumId", (req, res) => {
  /*
        #swagger.path = "/albums/{albumId}"
        #swagger.tags = ["Albums"]

        #swagger.parameters["albumId"] = {
          in: 'path',
          description: 'The album id',
          required: true,
          type: 'number',
          schema: 123456
        } 

        #swagger.responses[200] = {
          $ref: '#/definitions/Album'
        }

        #swagger.responses[404] = {
          description: 'Album not found',
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

  album.getAlbum(req, res);
});

router.get("/:albumId/tracks", (req, res) => {
  /*
        #swagger.path = "/albums/{albumId}/tracks"
        #swagger.tags = ["Albums"]

        #swagger.parameters["albumId"] = {
          in: 'path',
          description: 'The album id',
          required: true,
          type: 'number',
          schema: 123456
        } 

        #swagger.responses[200] = [{
          $ref: '#/definitions/Track'
        }]

        #swagger.responses[404] = {
          description: 'Album not found',
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

  album.getTracks(req, res);
});

module.exports = router;
