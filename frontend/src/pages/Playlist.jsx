/* eslint-disable */
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./Playlist.css";

export default function Playlist(props) {
  // NEEDS THE FOLLOWING PROPS:
  // playlistSource
  // setSongQueue

  // THE SETTER FOR PASSING A SONG TO THE PLAYER
  //  eslint-disable-next-line
  const setSongQueue = props.setSongQueue;

  // WILL BE RETRIEVED FROM API
  const [playlistData, setPlaylistData] = React.useState();
  const [playlistTracks, setPlaylistTracks] = React.useState();

  // WHEN ALL DATA HAS LOADED, THESE CHANGE TO TRUE - THE OUTPUT IS THEN RE-RENDERED WITH ALL DATA
  const [playlistDataHasLoaded, setPlaylistDataHasLoaded] =
    React.useState(false);
  const [playlistTracksHasLoaded, setPlaylistTracksHasLoaded] =
    React.useState(false);

  // FIRST, WE GET THE PLAYLIST ID from the URL
  const params = useParams();

  /************************************************************************************************/

  // GETTING ALL DATA ABOUT THE PLAYLIST  (ON FIRST RENDER ONLY)

  React.useEffect(() => {
    // GET PLAYLIST'S GENERAL INFORMATION   -> STORED INTO playlistData
    axios
      .get(
        `http://localhost:5000/api/playlists/${params.playlistId}?source=${props.playlistSource}`
      )
      .then((res) => {
        setPlaylistData(res.data);
        setPlaylistDataHasLoaded(true);
      });

    // GET TRACKS FOR THE PLAYLIST            -> STORED INTO playlistTracks
    //   later: with source? .get(`http://localhost:5000/api/playlists/${props.playlistId}/tracks?source=${props.playlistSrc}`)
    axios
      .get(`http://localhost:5000/api/playlists/${params.playlistId}/tracks`)
      .then((res) => {
        setPlaylistTracks(res.data);
        /* eslint-disable */ setPlaylistTracksHasLoaded(true);
      });
  }, []);

  /************************************************************************************************ */

  // CARD COMPONENT FOR ONE TRACK

  //  eslint-disable-next-line
  function TrackCard(props) {
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

                singer: props.artistName,
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
          {props.title} by {props.artistName}
        </div>
        <div>
          <button type="button">Options</button>
        </div>
      </div>
    );
  }

  /**************************************************************************************/

  // MAPPING CARDS FOR ALL TRACKS TO BE DISPLAYED

  function mapAllTracksToCards() {
    return playlistTracks.map((trackObject) => (
      <TrackCard
        artistName={trackObject.artist.name}
        cover={trackObject.cover}
        title={trackObject.title}
        key={trackObject.id}
        id={trackObject.id}
        stream_url={trackObject.stream_url}
      />
    ));
  }

  /*************************************************************************************/

  // RENDER METHOD OF THE WHOLE PLAYLIST COMPONENT

  if (playlistDataHasLoaded && playlistTracksHasLoaded) {
    return (
      <div>
        {/* BLACK BACKGROUND SECTION (TOP HALF) */}
        <div id="topSection">
          <div id="outerContainerForPlaylistCover">
            <div id="innerContainerForPlaylistCover">
              {/* PLAYLIST COVER */}
              <img
                id="playlistCover"
                src={playlistData.playlist.cover}
                alt="cover image of this playlist"
              />
            </div>
          </div>
          <div id="containerForPlaylistInfo">
            {/* PLAYLIST TITLE */}
            <h1 id="playlistTitle">{playlistData.playlist.title}</h1>
            {/* PLAYLIST DESCRIPTION */}
            <p id="playlistDescription">{playlistData.playlist.description}</p>
            {/* PLAYLIST CREATOR / USER */}
            <img
              id="playlistCreatorPicture"
              src={playlistData.user[0].userProfile.avatar}
              alt="picture of the playlist creator"
            />
            <p id="playlistCreatorName">{playlistData.user[0].username}</p>
            {/* PLAYLIST DURATION */}
            <p id="playlistDuration">
              {Math.round(playlistData.playlist.duration / 60)} min
              {/* Seems there is no React module on npmjs for converting seconds to hh:mm
              Good plain JS modules:
              https://www.npmjs.com/package/humanize-duration
              https://github.com/RomainLt/convert-seconds-to-human#readme */}
            </p>
          </div>
        </div>
        {/* GRAY BACKGROUND SECTION (BOTTOM HALF) */}
        <div id="bottomSection">
          BOTTOM SECTION___
          <button>Heart button</button>
          <button>Options</button>
          <button>Play</button>
          {/* CARDS FOR ALL TRACKS    (I MOVED THE MAPPING FUNCTION UP IN THE CODE (JUST FOR BETTER READABILITY)) */}
          {mapAllTracksToCards()}
        </div>
      </div>
    );
  }
  return "loading...";
}

/**************************************************************************** */

// PROPS VALIDATION

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

/*************************************************************************** */

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
