import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

export default function ImageList(props) {
  const images = props.images.map(image => (
    <ImageCard key={image.id} image={image} />
  ));

  return <div id="image-list">{images}</div>;
}
