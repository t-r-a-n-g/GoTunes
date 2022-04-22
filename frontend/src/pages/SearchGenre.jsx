import React from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GenreCard from "@components/GenreCard";
import SearchButton from "@components/SearchButton";

export default function SearchGenre() {
  const { t } = useTranslation();

  return (
    <div id="searchPage">
      <h1>{t("serch-page-headline")}</h1>
      <SearchButton />
      <Container>
        <Grid container gap={4} sx={{ justifyContent: "space-evenly" }}>
          <Grid item xs={5} md={3} lg={2.5}>
            <GenreCard />
          </Grid>
          <Grid item xs={5} md={3} lg={2.5}>
            <GenreCard />
          </Grid>
          <Grid item xs={5} md={3} lg={2.5}>
            <GenreCard />
          </Grid>
          <Grid item xs={5} md={3} lg={2.5}>
            <GenreCard />
          </Grid>
          <Grid item xs={5} md={3} lg={2.5}>
            <GenreCard />
          </Grid>
          <Grid item xs={5} md={3} lg={2.5}>
            <GenreCard />
          </Grid>
          <Grid item xs={5} md={3} lg={2.5}>
            <GenreCard />
          </Grid>
          <Grid item xs={5} md={3} lg={2.5}>
            <GenreCard />
          </Grid>
          <Grid item xs={5} md={3} lg={2.5}>
            <GenreCard />
          </Grid>
          <Grid item xs={5} md={3} lg={2.5}>
            <GenreCard />
          </Grid>
          <Grid item xs={5} md={3} lg={2.5}>
            <GenreCard />
          </Grid>
          <Grid item xs={5} md={3} lg={2.5}>
            <GenreCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
