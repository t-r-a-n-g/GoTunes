const express = require("express");

const router = express.Router();

const { user } = require("../controllers");
const { verifyToken } = require("../middleware/auth");

router.patch("/me", verifyToken, (req, res) => {
  /*
    #swagger.path = "/users"
    #swagger.tags = ["Users"]
    
    #swagger.parameters["username"] = {
      in: "body",
      description: "The new username",
      required: false
      type: "string",
      schema: "ExampleUser"
    }

    #swagger.parameters["avatar"] = {
      in: "body", 
      description: "Url to the new avatar",
      required: false,
      type: "string",
      schema: "http://example.com/picture.jpg"
    }

    #swagger.parameters["biography"] = {
      in: "body",
      description: "The biography text",
      required: false,
      type: "string",
      schema: "This is the biography of ExampleUser. He didn't archive anything meaningful in life until this point, where he became an essential part of the GoTunes API documentation. Fuck Yeah!"
    }

    #swagger.responses[200] = {
      description: 'success',
      schema: { 
        $ref: '#/definitions/Me'
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

  user.updateUser(req, res);
});

router.get("/me", verifyToken, (req, res) => {
  /*
    #swagger.path = "/users/me"
    #swagger.tags = ["Users"]

    #swagger.responses[200] = {
      description: 'success',
      schema: { 
        $ref: '#/definitions/Me'
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

  res.json(req.user);
});

router.get("/:userId", (req, res) => {
  /*
    #swagger.path = "/users/{userId}"
    #swagger.tags = ["Users"]
    #swagger.summary = "soundcloud | internal"

    #swagger.parameters["userId"] = {
      in: 'path',
      description: 'The user id',
      required: true,
      type: 'number',
      schema: 123456
    } 
            
    #swagger.parameters["source"] = {
      in: "query",
      description: "Where to get the data from",
      required: false,
      type: "string",
      schema: "soundcloud"
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
