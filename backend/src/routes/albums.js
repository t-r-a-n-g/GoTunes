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

        #swagger.responses[500] = {
          description: 'Internal error',
          schema: { 
            $errors: {
                $server: "err-internal"
            } 
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

  album.getTracks(req, res);
});

module.exports = router;
