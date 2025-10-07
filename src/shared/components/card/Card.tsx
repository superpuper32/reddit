import React from "react";

import "./Card.scss";

type Article = {
    title: string,
    src: string,
    id: number
}

type CardProps = {
    article: Article
}

export const Card = ({ article: { title, src, id } }: CardProps) => {

    console.log(src);
  return (
    <header className="card">
      <h3 className="card__heading">{title}</h3>
      <img src={src} alt="" className="card__img"/>

      <div className="card__footer">
        <p className="card__author">lindakuczwanski</p>
        <p>16 hours ago</p>
        <p className="card__comments">861</p>
      </div>
    </header>
  );
};
