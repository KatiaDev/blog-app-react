export const SET_COMMENTS = "SET_COMMENTS";
export const SET_LOADING = "SET_LOADING";

export function setComments(list) {
  return {
    type: SET_COMMENTS,
    payload: list,
  };
}

export function setLoadingComments(loading) {
  return {
    type: SET_LOADING,
    loading,
  };
}
