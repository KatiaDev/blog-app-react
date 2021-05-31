import { SET_COMMENTS, SET_LOADING } from "../actions/comments";

const initialState = {
  comments: [],
  isLoading: false,
};

export function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COMMENTS:
      return { ...state, comments: action.payload };
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
