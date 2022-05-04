import BigCard from "@components/BigCard";
import CreatePlaylist from "@components/CreatePlaylistButton";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import LibraryNavbar from "@components/Library/LibraryNavBar";
import "@components/Library/LibraryNavBar.css";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Searchbar from "../components/Search/Searchbar";

/* Library Page
initinally Create Playlist Card and Favourites Card
New Card mounts after Playlist is created 
*/

/* Create Playlist Button
Opens Modal with Form
Choose Playlist Name
Submit Button
Playlist displays as new Card on Library Page
Automatically forwarded to Search Page to add songs
 */

// Modal Component that opens up when Create New Playlist Button is clicked

/* Favourite Songs is Playlist created by default */

/* BigCard Component
150px x 150px Cover Image
H3 subheading
     */

/* Playlist Page
Displays Songs in a List with following information:
Song Title, Artist(s), 3dots for settings */

export default function Library() {
  const { t } = useTranslation();
  const [playlist, setPlayList] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const userID = "2";

  /* USEEFFECT TO  GET PLAYLISTS FROM DB AND UPDATE STATE */

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/users/${userID}/playlists?source=internal`
      )
      .then((res) => {
        console.error("Playlist query: ", res);
        setPlayList(res.data);
        /*         console.log(res.data); */
        setDataLoaded(true);
      });
  }, []);

  return (
    <div id="library-page">
      {/* Heading */}
      {/* TO DO: Site Nav */}
      {/* TO DO: Searchbar */}
      {/* Optional: Switch to small Card View Toggle */}
      {/* Create Playlist Button */}
      <Container>
        <Grid container gap={2} sx={{ justifyContent: "space-between" }}>
          <Grid item xs={12} md={12} lg={12}>
            <h1 style={{ margin: 0, marginTop: "4vh", textAlign: "left" }}>
              {t("library-main-heading")}
            </h1>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <LibraryNavbar id="LibraryNavBar" />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Searchbar id="librarySearchBar" />
          </Grid>
          <Grid item xs={5.7} sm={3.7} md={2} lg={1.8}>
            <CreatePlaylist />
          </Grid>
          <Grid item xs={5.7} sm={3.7} md={2} lg={1.8}>
            <BigCard />
          </Grid>
          {dataLoaded
            ? playlist.map((pl) => {
                /*  console.log(
                  "CHECK: ",
                  pl.playlist.cover,
                  typeof pl.playlist.cover
                ); */
                return (
                  <Grid item xs={5.7} sm={3.7} md={2} lg={1.8}>
                    <BigCard
                      cover={
                        pl.playlist.cover === "" || pl.playlist.cover === null
                          ? "https://cdn.pixabay.com/photo/2021/11/11/14/28/disk-6786456_1280.png"
                          : pl.playlist.cover
                      }
                      title={pl.playlist.title}
                      key={pl.playlistId}
                    />
                  </Grid>
                );
              })
            : null}
        </Grid>
      </Container>

      {/* QUERY DB FOR PLAYLISTS AND RENDER A BIG CARD FOR ALL
       */}
    </div>
  );
}
