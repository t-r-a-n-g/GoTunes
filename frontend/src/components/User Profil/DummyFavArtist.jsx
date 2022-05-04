import React from "react";
import CardArtists from "@components/Cards/CardArtists";
/* import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; */

export default function FavArtist() {
  return (
    <div>
      <CardArtists
        cover="https://selector.news/wp-content/uploads/2020/07/Denis-Kaznacheev.png"
        name="Denis Kaznacheev"
        description="Minimal / Deep Tech"
      />

      <CardArtists
        cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYNAB2PeYJAioKkMQsVGA-n_RsRKWB2m_MEDPCIWhWoJjmI5bYW_VfuqVJxus8hxengI&usqp=CAUg"
        name="Nu Zau"
        description="Minimal / Deep Tech"
      />

      <CardArtists
        cover="https://static.ra.co/images/news/2016/de-love-family-park-ricardo.jpg"
        name="Ricardo Villalobos"
        description="Minimal / Deep Tech"
      />

      <CardArtists
        cover="data:image/jpeg;base64,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"
        name="Traumer"
        description="Minimal / Deep Tech"
      />
    </div>
  );
}
