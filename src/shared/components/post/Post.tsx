import React from "react";

import { Post as PostType } from "@/shared/types";

import "./Post.scss";

type PostProps = {
  post: PostType;
};

export const Post: React.FC<PostProps> = ({ post }) => {
  const { author, title, url: src, num_comments } = post.data;
  return (
    <header className="card">
      <h3 className="card__heading">{title}</h3>
      <img src={src} alt="" className="card__img" />

      <div className="card__footer">
        <p className="card__author">{author}</p>
        <p>16 hours ago</p>
        <p className="card__comments">{num_comments}</p>
      </div>
    </header>
  );
};
