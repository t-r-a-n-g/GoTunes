/* eslint-disable */
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export default function Playlist(props) {
  // needs these props:
  // playlistSource
  // setSongQueue
  //  eslint-disable-next-line
  const setSongQueue = props.setSongQueue;

  const [playlistData, setPlaylistData] = React.useState();
  const [playlistDataHasLoaded, setPlaylistDataHasLoaded] =
    React.useState(false);
  const [playlistTracks, setPlaylistTracks] = React.useState();
  const [playlistTracksHasLoaded, setPlaylistTracksHasLoaded] =
    React.useState(false);

  // We need the playlist ID from the URL
  const params = useParams();
  // Getting all data about the playlist
  React.useEffect(() => {
    axios
      //  eslint-disable-next-line
      .get(
        `http://localhost:5000/api/playlists/${params.playlistId}?source=${props.playlistSource}`
      )
      .then((res) => {
        setPlaylistData(res.data);
        setPlaylistDataHasLoaded(true);
      });

    //   Getting all tracks of the playlist
    //   later: with source? .get(`http://localhost:5000/api/playlists/${props.playlistId}/tracks?source=${props.playlistSrc}`)
    axios
      .get(`http://localhost:5000/api/playlists/${params.playlistId}/tracks`)
      .then((res) => {
        setPlaylistTracks(res.data);
        /* eslint-disable */ setPlaylistTracksHasLoaded(true);
      });
  }, []);
  // A wide card component for a track
  //  eslint-disable-next-line
  function TrackCard(props) {
    let artistName = "ARTIST NAME";
    //  eslint-disable-next-line
    axios
      .get(`http://localhost:5000/api/artist/${props.artist_id}`)
      .then((res) => {
        artistName = res.data.name;
      });
    //  eslint-disable-next-line
    return (
      <div>
        {/*  eslint-disable-next-line */}
        <div
          id="trackCardMainSection"
          onClick={() =>
            setSongQueue([
              {
                //  eslint-disable-next-line

                name: props.title,
                //  eslint-disable-next-line

                singer: artistName,
                //  eslint-disable-next-line

                cover: props.cover,
                //  eslint-disable-next-line

                musicSrc: props.stream_url,
              },
            ])
          }
        >
          TRACK CARD
          {/*  eslint-disable-next-line */}
          <img src={props.cover} alt="cover for this song" />
          {/*  eslint-disable-next-line */}
          {props.title}
          ARTIST NAMES WILL APPEAR HEAR
        </div>
        <div>
          <button type="button">Options</button>
        </div>
      </div>
    );
  }

  // Making cards for all tracks
  function mapAllTracksToCards() {
    return playlistTracks.map((trackObject) => (
      <TrackCard
        artist_id={trackObject.artist_id}
        cover={trackObject.cover}
        title={trackObject.title}
        key={trackObject.id}
        id={trackObject.id}
        stream_url={trackObject.stream_url}
      />
    ));
  }

  if (playlistDataHasLoaded && playlistTracksHasLoaded) {
    return (
      <div>
        <div id="topSection">
          <img
            src={playlistData.playlist.cover}
            alt="cover image of this playlist"
          />
          <p>PLAYLIST: {playlistData.playlist.title}</p>
          <p>DESCRIPTION: {playlistData.playlist.description}</p>
          <img
            src={playlistData.user[0].userProfile.avatar}
            alt="picture of the playlist creator"
          />
          <p>CREATED BY: {playlistData.user[0].username}</p>
        </div>
        <div id="bottomSection">
          BOTTOM SECTION___
          <button>Heart button</button>
          <button>Options</button>
          <button>Play</button>
          {mapAllTracksToCards()}
        </div>
      </div>
    );
  }
  return "loading...";
}

Playlist.propTypes = {
  playlistSource: PropTypes.string,
  setSongQueue: PropTypes.func,
  title: PropTypes.string,
  cover: PropTypes.string,
  stream_url: PropTypes.string,
};
Playlist.defaultProps = {
  playlistSource: null,
  setSongQueue: null,
};

// FOR DEVELOPMENT: EXAMPLE DATA
//   playlistData = {
//     can_edit: false,
//     is_creator: false,
//     playlist: {
//       id: 594129,
//       cover: null,
//       description: "But I Am The Falcon",
//       duration: 824892,
//       genres: [""],
//       user_id: 3240564,
//       title: "Herbst9 The Gods Are Small Birds...",
//       kind: "playlist",
//       source: "soundcloud",
//     },
//     user: [
//       {
//         id: 3240564,
//         username: "HERBST9",
//         userProfile: {
//           avatar: "https://i1.sndcdn.com/avatars-000002731685-g84kvw-large.jpg",
//           biography: null,
//         },
//         kind: "user",
//         source: "soundcloud",
//       },
//     ],
//   };

//   playlistTracks = [
//     {
//       id: 10789038,
//       cover: "https://i1.sndcdn.com/artworks-000004967758-oxzbwd-large.jpg",
//       description: "from: The Gods Are Small Birds, But I Am The Falcon!",
//       duration: 358352,
//       genres: ["Dark Ambient"],
//       artist_id: 3240564,
//       album_id: null,
//       title: "Herbst9 The laments begin",
//       release_date: null,
//       stream_url:
//         "https://cf-media.sndcdn.com/q70r7Qid5x8H.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vcTcwcjdRaWQ1eDhILjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjUxMTUwODE5fX19XX0_&Signature=ZtNEGa1QhwaWuTw17tVqnAdqT~gZ5ba9rFhbxwCqhSSr4P-KDWvW2jyur7QcVSIy4toq3SqWLZLsz4LXaPNQ3LVF3D~zcr5v61sSnbgfvAWxPVdtjXIehGdEieVdIS1MroUCXPy2K9Py3YhqEEkGJ8wKqaVSJhn1AcnGSQMEBcuqGA8U--HeNf1BN6H0foL6y1Qfa0TQ-3lWBFyv0BKudzqSQgN-p5AZn6Lb7nRmPRf2KJD9jkbEa0db7-FB6nttoP9hQYMLuQquvuKz8JleYjEahjt7zjtkwZh~Zlg6c3eSeVlPrXGy4ttiAZ1KGGofE-cZOgcsWxP-VuHhAd5lcQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
//       artist: {
//         id: 3240564,
//         name: "HERBST9",
//         avatar: "https://i1.sndcdn.com/avatars-000002731685-g84kvw-large.jpg",
//         kind: "artist",
//         source: "soundcloud",
//       },
//       kind: "track",
//       source: "soundcloud",
//     },
//   ];
