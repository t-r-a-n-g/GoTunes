import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import axios from "axios";

export default function ArtistOverview() {
  const params = useParams();
  const [artistInfo, setArtistInfo] = useState();
  const [responseStatus, setResponseStatus] = useState();
  /*   const [artistInfoLoaded, setArtistInfoLoaded] = useState(false); */

  // requesting artist information when site renders the first time
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/artists/${params.artistId}`)
      .then((response) => {
        setResponseStatus(response.status);
        setArtistInfo(response.data);
        /* setArtistInfoLoaded(true); */
      });
    /*  .then(console.log(artistInfo)); */
  }, []);

  // artist track information

  // artist album information

  // artist playlist information
  return (
    <div>
      {responseStatus === 200 ? (
        <div id="user-container">
          <Avatar id="user-avatar" src={artistInfo?.avatar ?? "Loading"} />
          <br />
          <h1 id="user-userName">{artistInfo?.name ?? "Loading"}</h1>
        </div>
      ) : (
        "not found"
      )}
    </div>
  );
}
