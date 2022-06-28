import _ from "lodash";
import jsonPlaceHolders from "../apis/jsonPlaceHolders";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  //console.log("about to fetched post");
  await dispatch(fetchPosts());
  //.log("fetched post", getState().posts);

  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceHolders.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceHolders.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

//1 process
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceHolders.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
