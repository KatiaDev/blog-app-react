import React, { useContext, useState } from "react";

export const CommentsContext = React.createContext();

export function useComments() {
  return useContext(CommentsContext);
}

export function CommentsProvider({ children }) {
  const [comments, setComments] = useState([]);

  const fetchComments = (postId) =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data));

  const value = {
    comments,
    fetchComments,
  };

  return (
    <CommentsContext.Provider value={value}>
      {children}
    </CommentsContext.Provider>
  );
}
///redux was here
