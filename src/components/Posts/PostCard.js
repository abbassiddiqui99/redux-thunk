import React from "react";
import { deletePost } from "../../actions/postAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import EllipsisText from "react-ellipsis-text";

const PostCard = ({ postItem }) => {
  const dispatch = useDispatch();
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card custom-card shadow-lg mt-5">
        <img
          src={`https://source.unsplash.com/collection/${postItem.id}/1600x900`}
          alt={postItem.title}
          className="card-img-top"
        />
        <Link
          // Post is going to update form here
          to={`/updatePost/${postItem.id}`}
          className="btn btn-danger btn-edit"
        >
          <span className="material-icons mt-1">edit</span>
        </Link>
        <button
          className="btn btn-danger btn-delete"
          // delete event going to happens here
          onClick={() => dispatch(deletePost(postItem.id))}
        >
          <span className="material-icons delete-icon-custom">
            delete_outline
          </span>
        </button>
        <div className="card-body">
          <h6 className="text-secondary">{postItem.title}</h6>
          <EllipsisText text={postItem.body} length={100} />
        </div>
        <div className="card-footer">
          <Link
            // Post is going to view page here
            to={`/post/${postItem.id}`}
            className="btn btn-primary read-more-icon-custom"
          >
            <span className="mb-1"> read more</span>
            <span className="material-icons">keyboard_arrow_right</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
