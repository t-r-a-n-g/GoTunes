import React from "react";
import { useState } from "react";

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

export default function Library(props) {
  const [playlist, setplaylist] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setplaylist([...playlist]);
  };
  /* USEEFFECT TO  GET PLAYLISTS FROM DB AND UPDATE STATE*/

  return (
    <div>
      {/* Heading */}
      {/* Site Nave */}
      {/* Searchbar */}
      {/* Optional: Switch to small Card View Toggle */}
      {/* Create Playlist Button */}
      {/*  */}

      {/* QUERY DB FOR PLAYLISTS AND RENDER A BIG CARD FOR ALL 
    arryOfPlaylists.map(playlist=> return <BigCard cover=playlist.cover .../>)

*/}
    </div>
  );
}
