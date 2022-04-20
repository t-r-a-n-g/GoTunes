const express = require("express");

const router = express.Router();

const { artist } = require("../controllers");

router.get("/:artistId", (req, res) => {
  /*
        #swagger.path = "/artist/{artistId}"
        #swagger.tags = ["Artist"]

        #swagger.parameters["artistId"] = {
          in: 'path',
          description: 'The artist id',
          required: true,
          type: 'number',
          schema: 123456
        } 

        #swagger.responses[200] = {
          description: 'success',
          schema: { 
            $id: 0,
        	$name: 'artist name',
        	$avatar: 'artist avatar url',
        	$description: 'artist description',
        	$source: 'e.g. soundcloud',
          }
        }

        #swagger.responses[404] = {
          description: 'Artist not found',
          schema: { 
            $errors: {
                $artist: "err-not-found"
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

  artist.getArtist(req, res);
});

router.get("/:artistId/albums", (req, res) => {
  /*
        #swagger.path = "/artist/{artistId}/albums"
        #swagger.tags = ["Artist"]

        #swagger.parameters["artistId"] = {
          in: 'path',
          description: 'The artist id',
          required: true,
          type: 'number',
          schema: 123456
        } 

        #swagger.responses[200] = {
          description: 'success',
          schema: { 
            $id: 123,
  			$cover: "http://url-to-cover.com",
  			$description: "Great Album!",
  			$duration: 1324123,
  			$genres: ["Drum 'n' Bass"],
  			$release_date: "1990-08-12",
  			$artist_id: 1234,
  			$title: "album title",
  			$source: "e.g. soundcloud"
          }
        }
        
        #swagger.responses[404] = {
          description: 'Artist not found',
          schema: { 
            $errors: {
                $artist: "err-not-found"
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

  artist.getAlbums(req, res);
});

router.get("/:artistId/playlists", (req, res) => {
  /*
        #swagger.path = "/artist/{artistId}/playlists"
        #swagger.tags = ["Artist"]

        #swagger.parameters["artistId"] = {
          in: 'path',
          description: 'The artist id',
          required: true,
          type: 'number',
          schema: 123456
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
        
        #swagger.responses[404] = {
          description: 'Artist not found',
          schema: { 
            $errors: {
                $artist: "err-not-found"
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

  artist.getPlaylists(req, res);
});

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
        
        #swagger.responses[404] = {
          description: 'Artist not found',
          schema: { 
            $errors: {
                $artist: "err-not-found"
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

  artist.getTracks(req, res);
});

module.exports = router;
