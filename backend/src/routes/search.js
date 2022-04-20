const express = require("express");

const router = express.Router();

const { search } = require("../controllers");

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
          schema: 50
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
            $id: 0,
        	$name: 'artist name',
        	$avatar: 'artist avatar url',
        	$description: 'artist description',
        	$source: 'e.g. soundcloud',
          }]
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
          schema: 50
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
            $id: 123,
      			$cover: "http://url-to-cover.com",
      			$description: "Great Album!",
      			$duration: 1324123,
      			$genres: ["Drum 'n' Bass"],
      			$release_date: "1990-08-12",
      			$artist_id: 1234,
      			$title: "album title",
      			$source: "e.g. soundcloud"
          }]
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
          schema: 50
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
            $id: 123,
      			$cover: "http://url-to-cover.com",
      			$description: "Great Playlist!",
      			$duration: 1324123,
      			$genres: ["Drum 'n' Bass"],
      			$user_id: 1234,
      			$title: "playlist title",
      			$source: "e.g. soundcloud"
          }]
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
          schema: 50
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
          }]
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

  search.tracks(req, res);
});

module.exports = router;
