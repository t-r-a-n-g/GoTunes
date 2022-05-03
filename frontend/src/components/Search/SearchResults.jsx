import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import CardTracks from "../Cards/CardTracks";
import CardArtists from "../Cards/CardArtists";
import CardPlaylists from "../Cards/CardPlaylists";

// TO DO: think about changing cards to make them more distincive? Add description "Track", "Album" etc.?
export default function SearchResults(props) {
  const { t } = useTranslation();
  const {
    searchResult,
    responseStatus,
    /* songQueue, */
    setSongQueue,
    searchFilter,
    setAudioListToggle,
  } = props;

  return (
    <div>
      {/* eslint-disable */}
      {/* ignoring eslint because of no-nested-ternary rule here until we have a better solution */}
      {/* RENDERING ALL RESULTS */}
      {responseStatus === 200 && searchFilter === "All"
        ? searchResult.map((element) => {
            return element.kind === "track" ? (
              <CardTracks
                onClick={() => {
                  setSongQueue([
                    {
                      name: element.title,
                      singer: element.artist.name,
                      cover: element.cover,
                      musicSrc: element.stream_url,
                    },
                  ]);
                }}
                setAudioListToggle={setAudioListToggle}
                key={element.id}
                cover={element.cover}
                title={element.title}
                artist={`${t("track")} |  ${
                  element.artist?.name ?? t("waiting-for-loading")
                }`}
              />
            ) : element.kind === "artist" ? (
              <CardArtists
                /* To Do: define onClick method */

                key={element.id}
                cover={element.avatar}
                name={element.name}
                description={t("artist")}
              />
            ) : element.kind === "album" ? (
              <CardTracks
                /* To Do: define onClick method */

                key={element.id}
                cover={element.cover}
                title={element.title}
                artist={`${t("album")} |  ${
                  element.artist?.name ?? t("waiting-for-loading")
                }`}
              />
            ) : element.kind === "playlist" ? (
              <CardPlaylists
                /* To Do: define onClick method */

                key={element.id}
                cover={element.cover}
                title={element.title}
                description={t("playlist")}
              />
            ) : (
              ""
            );
          })
        : ""}
      {/* eslint-enable */}
      {/* RENDERING TRACK RESULTS */}
      {responseStatus === 200 && searchFilter === "Tracks"
        ? searchResult.map((element) => (
            <CardTracks
              /* To Do: how to push new track at beginning of queue? */
              onClick={() => {
                setSongQueue([
                  {
                    name: element.title,
                    singer: element.artist.name,
                    cover: element.cover,
                    musicSrc: element.stream_url,
                  },
                ]);
              }}
              key={element.id}
              cover={element.cover}
              title={element.title}
              artist={element.artist?.name ?? t("waiting-for-loading")}
            />
          ))
        : ""}
      {/* RENDERING ARTISTS RESULTS */}
      {responseStatus === 200 && searchFilter === "Artists"
        ? searchResult.map((element) => (
            <CardArtists
              /* To Do: define onClick method */

              key={element.id}
              cover={element.avatar}
              name={element.name}
            />
          ))
        : ""}
      {/* RENDERING ALBUMS RESULTS (maybe create an own Card but now it's the same like CardsTracks */}
      {responseStatus === 200 && searchFilter === "Albums"
        ? searchResult.map((element) => (
            <CardTracks
              /* To Do: define onClick method */

              key={element.id}
              cover={element.cover}
              title={element.title}
              artist={element.artist?.name ?? t("waiting-for-loading")}
            />
          ))
        : ""}
      {/* RENDERING PLAYLISTS RESULTS */}
      {responseStatus === 200 && searchFilter === "Playlists"
        ? searchResult.map((element) => (
            <CardPlaylists
              /* To Do: define onClick method */

              key={element.id}
              cover={element.cover}
              title={element.title}
            />
          ))
        : ""}

      {responseStatus === 404 || responseStatus === 500
        ? t("search-no-results")
        : ""}
    </div>
  );
}

SearchResults.propTypes = {
  // eslint-disable-next-line
  searchResult: PropTypes.array,
  responseStatus: PropTypes.number,
  setSongQueue: PropTypes.shape(),
  searchFilter: PropTypes.string,
  setAudioListToggle: PropTypes.string,
};

SearchResults.defaultProps = {
  searchResult: "",
  responseStatus: 404,
  setSongQueue: null,
  searchFilter: null,
  setAudioListToggle: "",
};
