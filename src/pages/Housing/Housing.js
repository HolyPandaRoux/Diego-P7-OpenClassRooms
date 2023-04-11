import { useParams } from "react-router-dom";
import housing from "../../data/housing.json";
import "../../style/stylePages/Housing.css";
import Slider from "../../components/Gallery";
import Rating from "../../components/Rating.js";
import Tags from "../../components/Tags";
import Error from "../Error/Error";
import Collapse from "../../components/Collapse";

function Housing() {
  const { id } = useParams();
  const housingDetails = housing.find((object) => object.id === id)
  if (!housingDetails) return <Error/>;
  const { title, location, tags, host, rating, description, equipments } = housingDetails;
  const range = [1, 2, 3, 4, 5];
  return (
    <main>
      <Slider />
      <div id="intro">
        <div>
          <h1 id="intro-title">{title}</h1>
          <h2 id="intro-location">{location}</h2>
          <Tags tags={tags} />
        </div>
        <div id="host">
          <Rating rating={rating} range={range} />
          <div id="host-info">
            <p id="host-info-name">{host.name}</p>
            <img id="host-info-picture" src={host.picture} alt="{host.name}" />
          </div>
        </div>
      </div>

      <div id="housing-info">
        <Collapse title="Description">
          <p className="housing-info-text">{description}</p>
        </Collapse>
        <Collapse title="Equipements">
          <ul className="housing-info-text">
            {equipments.map((equipment) => {
              return <li key={`${equipment}`}> {equipment}</li>;
            })}
          </ul>
        </Collapse>
      </div>
    </main>
  );
}

export default Housing;
