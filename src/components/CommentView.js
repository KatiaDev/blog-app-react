import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    margin: theme.spacing(5),
    marginLeft: theme.spacing(20),
    padding: theme.spacing(2),
    width: "60%",
    borderRadius: "10px",
    /*[theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(5),
    },*/
  },
  commentTitle: {
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
    fontFamily: "Flamenco",
  },
  commentBody: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    textAlign: "justify",
    fontFamily: "Flamenco",
    fontWeight: "bold",
  },
  email: {
    color: "blue",
    fontSize: "0.9em",
  },
}));
export default function CommentView({ id, name, email, body }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.commentTitle}>
        <em>Name: </em> {name}
      </Typography>
      <Typography className={classes.commentBody}>{body}</Typography>
      <Typography className={classes.email}>
        <em>email: </em>
        {email}
      </Typography>
    </Box>
  );
}

CommentView.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string,
};
