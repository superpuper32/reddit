import React, { useState } from "react";

import { Card } from "@/shared/components/post";

export const Articles: React.FC = () => {
  const [articles, setArticles] = useState([
    { src: "https://i.redd.it/dr6524t6kctf1.jpeg", title: "Article 1", id: 1 },
    { src: "https://i.redd.it/5ss6ug30sbtf1.jpeg", title: "Article 2", id: 2 },
  ]);

  return <div className="articles">{articles.map((article) => (<Card key={article.id} article={article} />) )}</div>;
};
