import { Link } from "react-router-dom";
import housing from "../../data/housing.json";
import "../../style/stylePages/Home.css";
import HousingCards from "../../components/HousingCards";
import BannerXL from "../../assets/bannerHome/bannerHomeXL.png";
import BannerS from "../../assets/bannerHome/bannerHomeS.png";

function Home() {
  return (
    <main>
      <div id="title">
        <img
          id="title-bannerXL"
          src={BannerXL}
          alt="Bannière avec un paysage"
        />
        <img id="title-bannerS" src={BannerS} alt="Bannière avec un paysage" />
        <div id="title-bg"></div>
        <h1 id="title-home">Chez vous, partout et ailleurs</h1>
      </div>
      <div id="housing">
        {housing.map((cards) => (
          <Link
            className="housing-link"
            key={`${cards.id}`}
            to={`/housing/${cards.id}`}
          >
            <HousingCards
              key={`${cards.id}`}
              cover={cards.cover}
              title={cards.title}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Home;
