// CAN BE DELETED WHEN WHEN LIBRARY PAGE IS WORKING

// import axios from "axios";
// import React from "react";
// import { searchPlaylistsEndpoint } from "@components/API";

// function ResultCard(props) {
//   console.log("Result card is being created");
//   return (
//     <div>
//       <img src={props.cover} alt="cover of a playlist" />
//       {props.title}
//       {/* HERE COMES THE DESIGN FOR ONE INDIVIDUAL RESULT CARD;
//             PROPS IS THE SAME AS THE OBJECT FOR ONE RESULT THE JSON RESPONSE */}
//     </div>
//   );
// }

// //   console.log({ playlistSearchResults });
// //   console.log({ searchTerm });

// export default function Library() {
//   const [searchTerm, setSearchTerm] = React.useState(
//     "Ambient and Nature Sounds"
//   );

//   const [playlistSearchResults, setPlaylistSearchResults] = React.useState([]);

//   React.useEffect(() => {
//     axios.get(searchPlaylistsEndpoint + searchTerm).then((res) => {
//       setPlaylistSearchResults(res.data);
//     });
//   }, [searchPlaylistsEndpoint, searchTerm]);

//   return (
//     <div>
//       {playlistSearchResults.map((element) => (
//         <ResultCard {...element} />
//       ))}
//     </div>
//   );
// }
