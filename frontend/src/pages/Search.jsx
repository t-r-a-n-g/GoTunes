import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Searchbar from "../components/Searchbar";
import SearchResults from "../components/SearchResults";
import SearchNavbar from "../components/SearchNavbar";
import { searchTracksEndpoint } from "../components/API";

export default function Search(props) {
  const { setSongQueue } = props;
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
        setSongQueue={setSongQueue}
      />
    </div>
  );
}
Search.propTypes = {
  setSongQueue: PropTypes.shape(),
};
Search.defaultProps = {
  setSongQueue: null,
};

// Playlist for testing. can be deleted when music is passed from search results to songQueue
/* const audioList1 = [
    {
      name: "Despacito",
      singer: "Luis Fonsi",
      cover:
        "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
      musicSrc:
        "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3",
      // support async fetch music src. eg.
      // musicSrc: async () => {
      //   return await fetch('/api')
      // },
    },
    {
      name: "Dorost Nemishadm",
      singer: "Sirvan Khosravi",
      cover:
        "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
      musicSrc:
        "https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3",
    },
  ]; */
