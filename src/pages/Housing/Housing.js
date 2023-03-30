// This component displays detailed information about a selected piece of housing by searching for and rendering its corresponding object from a JSON file.
import { useParams } from "react-router-dom";
import housing from "../../data/housing.json";
import "../../style/stylePages/Housing.css";
import Slider from "../../components/Gallery";
import Rating from "../../components/Rating.js";
import Tags from "../../components/Tags";
import Error from "../Error";


function Housing() {
  // Extract the id parameter from the URL
  const { id } = useParams();
  // Search through the housing array to find an object with an id that matches the extracted ID
  const housingDetails = housing.find((object) => object.id === id)
  // If no matching object is found, render the Error component
  if (!housingDetails) return <Error/>;
  // Destructure several properties from the housingDetails object, such as title, location, tags, host, rating, description, and equipments
  const { title, location, tags, host, rating, description, equipments } = housingDetails;
  // Define a range array with values 1-5
  const range = [1, 2, 3, 4, 5];
  // Return JSX that displays the fetched housing details, including a slider component, an introduction section with the title, location, tags, host rating, and picture, and a section with housing details - description and equipments.
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
        <details className="housing-info-details">
          <summary className="housing-info-title">
            Description <i className="fa-solid fa-chevron-down"></i>
          </summary>
          <p className="housing-info-text">{description}</p>
        </details>

        <details className="housing-info-details">
          <summary className="housing-info-title">
            Equipements <i className="fa-solid fa-chevron-down"></i>
          </summary>
          <ul className="housing-info-text">
            {equipments.map((equipment) => {
              return <li key={`${equipment}`}> {equipment}</li>;
            })}
          </ul>
        </details>
      </div>
    </main>
  );
}


export default Housing;
