const source = "soundcloud|internal";

module.exports = {
  User: {
    $id: 123,
    $username: "ExampleUser",
    $avatar: "http://example.com/avatar.jpg",
    $biography: "This is the biography of ExampleUser. He didn't archive anything meaningful in life until this point, where he became an essential part of the GoTunes API documentation. Fuck Yeah!",
    $kind: "user",
  },

  Me: {
    $id: 123,
    email: "YourEmail@example.com",
    language: "de_DE",
    soundcloud_username: "example_sc-user",
    profile: {
      $ref: "#/definitions/User"
    }
  },

  Artist: {
    $id: 123,
    $name: "Example Artist",
    $avatar: "http://example.com/avatar.jpg",
    $description: "This is an example artist",
    $kind: "artist",
    $source: source,
  },

  Album: {
    $id: 123,
    $cover: "http://example.com/cover.jpg",
    $description: "This is an example album",
    $duration: 12345678,
    $genres: ["Drum 'n' Bass"],
    $release_date: "1990-08-12",
    $artist_id: 1234,
    $title: "Example Album",
    $artist: {
      $ref: "#/definitions/Artist",
    },
    $kind: "album",
    $source: source,
  },

  Playlist: {
    $id: 123,
    $cover: "http://example.com/cover.jpg",
    $description: "This is an example playlist",
    $duration: 12345678,
    $genres: ["Drum 'n' Bass"],
    $user_id: 1234,
    $title: "Exmaple Playlist",
    $user: {
      $ref: "#/definitions/Artist",
    },
    $kind: "playlist",
    $source: source,
  },

  Track: {
    $id: 123,
    $cover: "http://example.com/cover.jpg",
    $description: "This is an example track",
    $duration: 12345678,
    $genres: ["Drum 'n' Bass"],
    $artist_id: 1234,
    $album_id: 1234,
    $release_date: "1990-08-12",
    $title: "Example Track",
    $stream_url: "http://example.com/track.mp3",
    $kind: "track",
    $source: source,
  },

  ErrorInternal: {
    $errors: {
      $server: "err-internal",
    },
  },

  ErrorNoToken: {
    $errors: {
      $auth: "err-auth-no-token",
    },
  },

  ErrorInvalidUser: {
    $errors: {
      $auth: "err-auth-invalid-user",
    },
  },

  ErrorForbidden: {
    $errors: {
      $auth: "err-auth-forbidden",
    },
  },

  ErrorNotFound: {
    $errors: {
      $resource: "err-not-found",
    },
  },
};
