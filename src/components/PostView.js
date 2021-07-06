import React, { useEffect, useState, useCallback } from "react";
import { useParams, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { CommentsProvider } from "../contexts/CommentsContext";
import { useNavigation } from "../containers/Home";
import { makeStyles } from "@material-ui/core";
import { Box, Button, Typography, Container } from "@material-ui/core";
import CommentsView from "./CommentsView";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  rootDiv: {
    boxShadow: "0 16px 40px -12.125px rgba(0,0,0,0.3)",
    padding: theme.spacing(5),
  },
  postTitle: {
    color: "white",
    fontFamily: "Flamenco",
    fontSize: "1.6em",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  postContent: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    fontFamily: "Flamenco",
    fontSize: "1.3em",
    fontWeight: "bold",
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
  toggleBtn: {
    textTransform: "capitalize",
  },
}));

const PostView = ({ id, title, body, userId, newData }) => {
  const [showComments, setShowComments] = useState(false);
  const [newPost, setNewPost] = useState(null);
  const { userPermissions } = useNavigation();
  const classes = useStyles();
  let location = useLocation();
  let params = useParams();
  const { state } = location;

  const fetchNewPost = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params?.idPost}`)
      .then((response) => response.json())
      .then((data) => setNewPost(data));
  }, [params?.idPost]);

  const handleClick = () => {
    setShowComments(!showComments);
  };
  useEffect(() => {
    if (params?.idPost) {
      fetchNewPost();
    }
  }, [params?.idPost, fetchNewPost]);

  const restrict = userPermissions.find(
    (permission) => permission === "READ_POST"
  );

  return (
    <>
      {!newData ? (
        <Box className={classes.rootDiv}>
          <Typography className={classes.postTitle}>{title}</Typography>
          <Typography className={classes.postContent}>{body}</Typography>

          {restrict && (
            <Link
              to={{ pathname: `/posts/${id}`, state: { title, body, id } }}
              style={{ textDecoration: "none" }}
            >
              <Button className={classes.showDetailsBtn} size="small">
                Show details
              </Button>
            </Link>
          )}
        </Box>
      ) : (
        <Container>
          <Box className={classes.rootDiv}>
            <Typography className={classes.postTitle}>
              {state?.title || newPost?.title}
            </Typography>
            <Typography className={classes.postContent}>
              {state?.body || newPost?.body}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.toggleBtn}
              onClick={handleClick}
            >
              Toggle comments
            </Button>
            <CommentsProvider>
              {showComments && (
                <CommentsView postId={state?.id || newPost?.id} />
              )}
            </CommentsProvider>
          </Box>
        </Container>
      )}
    </>
  );
};

PostView.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  userId: PropTypes.number,
};

export default PostView;
