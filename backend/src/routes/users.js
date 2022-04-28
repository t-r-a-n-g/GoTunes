const express = require("express");

const router = express.Router();

const { user } = require("../controllers");
// const { verifyToken } = require("../middleware/auth");

router.get("/:userId", (req, res) => {
  /*
    #swagger.path = "/users/{userId}"
    #swagger.tags = ["Users"]
    #swagger.summary = "internal"

    #swagger.parameters["userId"] = {
      in: 'path',
      description: 'The user id',
      required: true,
      type: 'number',
      schema: 123456
    } 
            
    #swagger.responses[200] = {
      description: 'success',
      schema: { 
        $ref: '#/definitions/User'
      }
    }

    #swagger.responses[404] = {
      description: "User not found",
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

  user.getUser(req, res);
});

router.get("/:userId/playlists", (req, res) => {
  /*
    #swagger.path = "/users/{userId}/playlists"
    #swagger.tags = ["Users"]
    #swagger.summary = "internal | soundcloud"

    #swagger.parameters["userId"] = {
      in: 'path',
      description: 'The user id',
      required: true,
      type: 'number',
      schema: 123456
    } 
            
    #swagger.responses[200] = {
      description: 'success',
      schema: [{ 
        $ref: '#/definitions/Playlist'
      }]
    }

    #swagger.responses[404] = {
      description: "User not found",
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

  user.getPlaylists(req, res);
});

module.exports = router;
