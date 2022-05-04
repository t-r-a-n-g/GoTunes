import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Searchbar from "../components/Search/Searchbar";
import SearchResults from "../components/Search/SearchResults";
import SearchNavbar from "../components/Search/SearchNavbar";
import { searchAllEndpoint } from "../components/API";

export default function Search(props) {
  const { songQueue, setSongQueue, setAudioListToggle } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [responseStatus, setResponseStatus] = useState();

  // Function that updates the searchTerm everytime the input field changes
  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  /* useEffect: everytime the component rerenders (everytime searchTerm gets updated), 
    an API get request is sent with updated URL */
  /* with setTimeout API request only is sent after 0.5s of not typing to avoid requests 
    for every character the user is typing, time can be adjusted (now: 300 millisecs) */

  // setting state for API search Endpoint. State is updated by clicking on component in SearchNavbar
  // by default initial search is to search for all kinds
  const [searchEndpoint, setSearchEndpoint] = useState(searchAllEndpoint);

  // setting state for which category to search for
  const [searchFilter, setSearchFilter] = useState("All");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      axios
        .get(`${searchEndpoint}${searchTerm}?limit=30`)
        .then((response) => {
          setResponseStatus(response.status);
          /* console.log(response); */
          setSearchResult(response.data);
        })
        .catch((error) => {
          setResponseStatus(error.response.status);
        });
    }, 300);
    return function cleanUp() {
      clearTimeout(timeOut);
    };
  }, [searchTerm, searchEndpoint]);

  return (
    <div>
      <Searchbar
        searchTerm={searchTerm}
        // eslint-disable-next-line
        handleSearch={handleSearch}
      />
      <SearchNavbar
        setSearchEndpoint={setSearchEndpoint}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <SearchResults
        setAudioListToggle={setAudioListToggle}
        searchResult={searchResult}
        responseStatus={responseStatus}
        songQueue={songQueue}
        setSongQueue={setSongQueue}
        searchFilter={searchFilter}
      />
    </div>
  );
}
Search.propTypes = {
  setSongQueue: PropTypes.func,
  songQueue: PropTypes.shape(),
  setAudioListToggle: PropTypes.func,
};
Search.defaultProps = {
  setSongQueue: null,
  songQueue: null,
  setAudioListToggle: "",
};
