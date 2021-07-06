import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
    width: 300,
    maxHeight: 200,
  },
  singleAlbum: {
    padding: theme.spacing(2),
    width: 300,
    maxHeight: "fit-content",
    margin: theme.spacing(20),
  },

  albumTitle: {
    fontFamily: "Flamenco",
    fontSize: "1.4em",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  postedBy: {
    fontSize: "1em",
  },
  showDetailsBtn: {
    textTransform: "capitalize",
    backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #f0c273 74%)",
    boxShadow: "0px 4px 32px rgba(252, 56, 56, 0.4)",
    borderRadius: 100,
    paddingLeft: 24,
    paddingRight: 24,
    color: "#ffffff",
  },
}));

export default function AlbumView({ id, title, userId, newData }) {
  const [newAlbum, setNewAlbum] = useState(null);
  const classes = useStyles();
  const location = useLocation();
  const params = useParams();
  const { state } = location;

  const fetchNewAlbum = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${params?.idAlbum}`)
      .then((response) => response.json())
      .then((data) => setNewAlbum(data));
  }, [params?.idAlbum]);

  useEffect(() => {
    if (params?.idAlbum) {
      fetchNewAlbum();
    }
  }, [params?.idAlbum, fetchNewAlbum]);
  /*
  console.log("newData 'Album': ", newData);
  console.log("params: ", params);
  console.log("location: ", location);
  console.log("state: ", state);*/

  return (
    <div>
      {!newData ? (
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.albumTitle}>{title}</Typography>
          </CardContent>
          <CardActions>
            <Link
              to={{
                pathname: `/albums/${id}`,
                state: { title, userId },
              }}
              style={{ textDecoration: "none" }}
            >
              <Button size="small" className={classes.showDetailsBtn}>
                Show Details
              </Button>
            </Link>
          </CardActions>
        </Card>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card className={classes.singleAlbum}>
            <CardContent>
              <Typography className={classes.albumTitle}>
                Title: {state?.title || newAlbum?.title}
              </Typography>
              <Typography component="span" className={classes.postedBy}>
                Posted By:{" "}
              </Typography>
              <Link
                to={{
                  pathname: `/users/${state?.userId || newAlbum?.userId}`,
                }}
              >
                User{state?.userId || newAlbum?.userId}
              </Link>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </div>
      )}
    </div>
  );
}
