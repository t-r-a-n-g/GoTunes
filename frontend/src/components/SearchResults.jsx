import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

export default function SearchResults(props) {
  const { searchResult, responseStatus } = props;
  return (
    <div>
      {responseStatus === 200
        ? searchResult.map((element) => (
            <Card
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
