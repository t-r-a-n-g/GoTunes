import React, { useEffect, useState } from "react";
import axios from "axios";
import Searchbar from "../components/Searchbar";
import SearchResults from "../components/SearchResults";
import SearchNavbar from "../components/SearchNavbar";
import { searchTracksEndpoint } from "../components/API";

export default function Search() {
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
    for every character the user is typing, time can be adjusted (now: 500 millisecs) */

  useEffect(() => {
    const timeOut = setTimeout(() => {
      axios
        .get(`${searchTracksEndpoint}${searchTerm}?limit=20`)
        .then((response) => {
          setResponseStatus(response.status);
          /* console.log(response); */
          setSearchResult(response.data);
        })
        .catch((error) => setResponseStatus(error.response.status));
    }, 500);
    return function cleanUp() {
      clearTimeout(timeOut);
    };
  }, [searchTerm]);

  /* console.log(searchTerm); */

  return (
    <div>
      {/* eslint-disable-next-line */}
      <Searchbar searchTerm={searchTerm} handleSearch={handleSearch} />
      <SearchNavbar />
      <SearchResults
        searchResult={searchResult}
        responseStatus={responseStatus}
      />
    </div>
  );
}
