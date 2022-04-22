import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function GenreCard() {
  return (
    <Link to="/search-result" style={{ textDecoration: "none" }}>
      <div id="genreCardContainer">
        <Card
          sx={{
            display: "flex",
            maxWidth: 250,
            justifyContent: "space-between",
            backgroundColor: "purple",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Genre
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{
              width: 75,
              height: 75,
              margin: 2,
              transform: "rotate(30deg)",
              position: "relative",
            }}
            image="\src\assets\pexels-dids-1616470 (1).jpg"
            alt="example album cover"
          />
        </Card>
      </div>
    </Link>
  );
}
