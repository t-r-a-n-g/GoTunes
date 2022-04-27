import React from "react";
import PropTypes from "prop-types";
import CardTracks from "../Cards/CardTracks";
import CardArtists from "../Cards/CardArtists";

export default function SearchResults(props) {
  const {
    searchResult,
    responseStatus,
    /* songQueue, */
    setSongQueue,
    searchFilter,
  } = props;

  return (
    <div>
      {/* RENDERING TRACK RESULTS */}
      {responseStatus === 200 && searchFilter === "Tracks"
        ? searchResult.map((element) => (
            <CardTracks
              /* To Do: how to push new track at beginning of queue? */
              onClick={() => {
                setSongQueue([
                  {
                    name: element.title,
                    singer: "",
                    cover: element.cover,
                    musicSrc: element.stream_url,
                  },
                ]);
              }}
              key={element.id}
              cover={element.cover}
              title={element.title}
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

      {responseStatus === 404 || responseStatus === 500
        ? "No results found"
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
};

SearchResults.defaultProps = {
  searchResult: "",
  responseStatus: 404,
  setSongQueue: null,
  searchFilter: null,
};
