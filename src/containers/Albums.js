import React, { useEffect } from "react";
import { useAlbums } from "../contexts/AlbumsContext";
import { useSearch } from "../contexts/SearchContext";
import AlbumView from "../components/AlbumView";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
  },
}));

export default function Albums() {
  const { fetchAlbums } = useAlbums();
  const { filteredData } = useSearch();

  const classes = useStyles();

  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);

  return (
    <Container className={classes.root}>
      <Grid container>
        {filteredData.map(({ id, title, userId }) => (
          <Grid container item lg={3} md={4} sm={6} xs={12} key={id}>
            <AlbumView id={id} title={title} userId={userId} newData={false} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
