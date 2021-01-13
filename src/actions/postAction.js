import axios from "axios";
import {
  GET_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  GET_ALL_POST_FROM_API,
} from "./types";

// get all post from api using middleware thunk and axios
export const getAllPostFromApi = () => async (dispatch) => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
  // console.log(result);
  dispatch({
    type: GET_ALL_POST_FROM_API,
    payload: result.data,
  });
};

// get a post
export const getPost = (id) => async (dispatch) => {
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  console.log(result.data);
  dispatch({
    type: GET_POST,
    payload: result.data,
  });
};

// create a post
export const createPost = (post) => async (dispatch) => {
  const result = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    post
  );
  dispatch({
    type: CREATE_POST,
    payload: result.data,
  });
};
// update a post
export const updatePost = (post) => async (dispatch) => {
  const result = await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${post.id}`,
    post
  );
  dispatch({
    type: UPDATE_POST,
    payload: result.data,
  });
};

// delete a post
export const deletePost = (id) => async (dispatch) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  dispatch({
    type: DELETE_POST,
    payload: id,
  });
};
