import React from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GenreCard from "../components/Cards/GenreCard";
import SearchButton from "../components/Search/SearchButton";

export default function SearchGenre() {
  const { t } = useTranslation();

  return (
    <div id="searchPage">
      <Container>
        <Grid container gap={2} sx={{ justifyContent: "space-between" }}>
          <Grid item xs={12} md={12} lg={12}>
            <h2 style={{ margin: 0, marginTop: "4vh", textAlign: "left" }}>
              {t("search")}
            </h2>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <SearchButton />
          </Grid>
          <Grid item xs={5.7} sm={3.7} md={2} lg={1.8}>
            <GenreCard />
          </Grid>
          <Grid item xs={5.7} sm={3.7} md={2} lg={1.8}>
            <GenreCard />
          </Grid>
          <Grid item xs={5.7} sm={3.7} md={2} lg={1.8}>
            <GenreCard />
          </Grid>
          <Grid item xs={5.7} sm={3.7} md={2} lg={1.8}>
            <GenreCard />
          </Grid>
          <Grid item xs={5.7} sm={3.7} md={2} lg={1.8}>
            <GenreCard />
          </Grid>
          <Grid item xs={5.7} sm={3.7} md={2} lg={1.8}>
            <GenreCard />
          </Grid>
          <Grid item xs={5.7} sm={3.7} md={2} lg={1.8}>
            <GenreCard />
          </Grid>
          <Grid item xs={5.7} sm={3.7} md={2} lg={1.8}>
            <GenreCard />
          </Grid>
          <Grid item xs={5.7} sm={3.7} md={2} lg={1.8}>
            <GenreCard />
          </Grid>
          <Grid item xs={5.7} sm={3.7} md={2} lg={1.8}>
            <GenreCard />
          </Grid>
          <Grid item xs={5.7} sm={3.7} md={2} lg={1.8}>
            <GenreCard />
          </Grid>
          <Grid item xs={5.7} sm={3.7} md={2} lg={1.8}>
            <GenreCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
