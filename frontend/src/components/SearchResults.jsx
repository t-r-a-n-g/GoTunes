import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

export default function SearchResults(props) {
  const { searchResult, responseStatus, setSongQueue } = props;

  return (
    <div>
      {responseStatus === 200
        ? searchResult.map((element) => (
            <Card
              onClick={() =>
                setSongQueue([
                  {
                    name: element.title,
                    singer: "",
                    cover: element.cover,
                    musicSrc: element.stream_url,
                  },
                ])
              }
              key={element.id}
              cover={element.cover}
              title={element.title}
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
};

SearchResults.defaultProps = {
  searchResult: "",
  responseStatus: 404,
};
