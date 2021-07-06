import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: 400,
    maxHeight: "fit-content",
    margin: theme.spacing(20),
  },
}));

export default function UserView({ userId }) {
  const [user, setUser] = useState(null);
  const classes = useStyles();
  const params = useParams();
  /* const location = useLocation();
  const { state } = location;
  console.log("state: ", state);
  console.log("params: ", params);
  console.log("location: ", location);
  */

  const fetchUser = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params?.idUser}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [params?.idUser]);

  useEffect(() => {
    if (params?.idUser) {
      fetchUser();
    }
  }, [params?.idUser, fetchUser]);

  console.log("user: ", user);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {user ? (
        <Card className={classes.root}>
          <CardContent>
            <Typography>Name: {user.name}</Typography>
            <Typography>Username: {user.username}</Typography>
            <Typography>email: {user.email}</Typography>
            <Typography>phone: {user.phone}</Typography>
            <Typography>website: {user.website}</Typography>
          </CardContent>
        </Card>
      ) : (
        <div style={{ margin: 10 }}>Loading...</div>
      )}
    </div>
  );
}
