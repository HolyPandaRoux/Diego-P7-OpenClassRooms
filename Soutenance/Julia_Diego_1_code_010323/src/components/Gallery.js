import React from "react";
import { useParams } from "react-router-dom";
import housing from "../data/housing.json";
import "../style/styleComponents/Gallery.css";
import Slider from "./Slider";

function Gallery() {
  const { id } = useParams();
  const housingPictures = housing.find((object) => object.id === id);
  const { pictures } = housingPictures;

  return (
    <div>
      <Slider pictures={pictures} />
    </div>
  );
}

export default Gallery;
