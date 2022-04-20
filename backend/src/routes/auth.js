const express = require("express");
// const { verifyToken } = require("../middleware/auth");

const router = express.Router();

const { auth } = require("../controllers");

router.post("/login", (req, res) => {
  /* 
    #swagger.path = '/auth/login'
    #swagger.tags = ['Auth']

    #swagger.parameters['email'] = {
      in: 'body',
      description: 'The users email address',
      required: true,
      type: 'string',
      schema: 'user@example.com'
    } 

    #swagger.parameters['password'] = {
      in: 'body',
      description: 'The users password',
      required: true,
      type: 'string',
      schema: 'password1234'
    } 

    #swagger.responses[200] = {
      description: 'successfully logged in',
      schema: { 
        $success: true, 
        $token: 'user token' 
      }
    }

    #swagger.responses[400] = {
      description: 'Validation error',
      schema: { 
        $success: false, 
        $errors: {} 
      }
    } 

    #swagger.responses[403] = {
      description: 'Invalid login data',
      schema: { 
        $success: false, 
        $errors: {
          email: "err-email-password-match",
          password: "err-email-password-match"
        } 
      }
    } 

    #swagger.responses[500] = {
      description: 'Internal error',
      schema: { 
        $success: false, 
        $errors: {
          $server: "err-internal"
        } 
      }
    } 
  */

  auth.login(req, res);
});

router.post("/register", (req, res) => {
  /*
    #swagger.path = '/auth/register'
    #swagger.tags = ['Auth']

    #swagger.parameters['username'] = {
      in: 'body',
      description: 'The users nickname',
      required: true,
      type: 'string',
      schema: 'User1'
    } 

    #swagger.parameters['email'] = {
      in: 'body',
      description: 'The users email address',
      required: true,
      type: 'string',
      schema: 'user@example.com'
    } 

    #swagger.parameters['password'] = {
      in: 'body',
      description: 'The users password',
      required: true,
      type: 'string',
      schema: 'password1234'
    } 

    #swagger.responses[200] = {
      description: 'successfully logged in',
      schema: { 
        $success: true, 
        $token: 'user token' 
      }
    } 

    #swagger.responses[400] = {
      description: 'Validation error',
      schema: { 
        $success: false, 
        $errors: {} 
      }
    } 

    #swagger.responses[409] = {
      description: 'Duplication error - Email or username already taken by another user',
      schema: { 
        $success: false, 
        $errors: {
          field: "err-field-already-exists"
        } 
      }
    } 

    #swagger.responses[500] = {
      description: 'Internal error',
      schema: { 
        $success: false, 
        $errors: {
          $server: "err-internal"
        } 
      }
    } 
*/
  auth.register(req, res);
});
// router.get("/me", verifyToken, (req, res) => {
//   res.json({ id: req.userId });
// });

module.exports = router;
