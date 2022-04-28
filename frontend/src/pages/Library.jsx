import BigCard from "@components/BigCard";
import CreatePlaylist from "@components/CreatePlaylistButton";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Searchbar from "@components/Searchbar";
/* import React, { useState } from "react"; */
import { useTranslation } from "react-i18next";

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

export default function Library(/* props */) {
  const { t } = useTranslation();
  /*   const [playlist, setplaylist] = useState(null); */

  /* const handleSubmit = (event) => {
    event.preventDefault();
    setplaylist([...playlist]);
  };  */
  /* USEEFFECT TO  GET PLAYLISTS FROM DB AND UPDATE STATE */

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
            <Searchbar />
          </Grid>
          <Grid item xs={5.7} sm={3.7} md={2} lg={1.8}>
            <CreatePlaylist />
          </Grid>
          <Grid item xs={5.7} sm={3.7} md={2} lg={1.8}>
            <BigCard />
          </Grid>
        </Grid>
      </Container>
      {/*  */}

      {/* QUERY DB FOR PLAYLISTS AND RENDER A BIG CARD FOR ALL 
    arryOfPlaylists.map(playlist=> return <BigCard cover=playlist.cover .../>)

*/}
    </div>
  );
}
