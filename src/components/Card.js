import React from "react";
import pointer from "../images/pointer.png";

const Card = (props) => {
  return (
    <section className="card-items">
      <img src={props.item.imageUrl} alt="picturePreview" />

      <div className="card-block">
        <div className="card-header">
          <img src={pointer} alt="pointer" />
          <h3>{props.location}</h3>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>

        <h2>{props.item.title}</h2>

        <p className="date">
          <span>{props.item.startDate}</span> -{" "}
          <span>{props.item.endDate}</span>
        </p>

        <p>{props.item.description}</p>
      </div>
    </section>
  );
};

export default Card;

/*
    title: "Mount Fuji",
    location: "Japan",
    googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    startDate: "12 Jan, 2021",
    endDate: "24 Jan, 2021",
    description:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    imageUrl: "https://source.unsplash.com/WLxQvbMyfas",
*/
