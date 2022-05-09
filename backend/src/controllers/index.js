const album = require("./album.controller");
const artist = require("./artist.controller");
const search = require("./search.controller");
const track = require("./track.controller");
const playlist = require("./playlist.controller");
const auth = require("./auth.controller");
const user = require("./user.controller");

module.exports = { album, artist, search, track, playlist, auth, user };
