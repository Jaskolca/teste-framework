import React from "react";
import "./styles.css";

interface IPostProps {
  title: string;
  body: string;
}

const Post: React.FC<IPostProps> = ({ title, body }) => {
  return (
    <div className="postCard">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Post;
