import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostFromApi } from "../../actions/postAction";

const Posts = () => {
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPostFromApi());
  }, []);

  return (
    <div className="row">
      {posts.map((postItem) => (
        <PostCard postItem={postItem} key={postItem.id} />
      ))}
    </div>
  );
};

export default Posts;
