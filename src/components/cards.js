import React from "react";
import Card from "./Card";

import image1 from "../imgs/noun_1.jpg";
import image2 from '../imgs/noun_2.jpg'
import image3 from '../imgs/noun_3.jpg'

const cards = [
  {
    id: 1,
    title: "Fazt Web",
    image: image1,
    url: "https://imgur.com/a/DEr9ZEH",
  },
  {
    id: 2,
    title: "Fazt Blog",
    image: image2,
    url: "https://imgur.com/zw3iucj",
  },
  {
    id: 3,
    title: "Fazt Youtube",
    image: image3,
    url: "https://imgur.com/zw3iucj",
  },
];

function Cards() {
  return (
    <div className="container d-flex d-flex flex-column mb-3 h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;