import { combineReducers } from "redux";
import { postsReducer } from "./posts";
import { errorReducer } from "./error";
import { commentsReducer } from "./comments";

const app = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  error: errorReducer,
});

export default app;
