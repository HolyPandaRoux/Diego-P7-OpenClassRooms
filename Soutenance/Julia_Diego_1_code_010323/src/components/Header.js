import { Link, useLocation } from "react-router-dom";
import "../style/styleComponents/Header.css";
import Logo from "../assets/logo/logo.png";

function Header() {
  const pathname = useLocation().pathname;
  return (
    <header>
      <Link to="/">
        <img id="header-logo" src={Logo} alt="Logo Kasa" />
      </Link>

      <nav>
        <Link
          className={`${pathname === "/" ? "nav-link-active" : "nav-link"}`}
          aria-label="Lien pour revenir à l'Accueil'"
          to="/"
        >
          Accueil
        </Link>

        <Link
          className={`${
            pathname === "/about" ? "nav-link-active" : "nav-link"
          }`}
          aria-label="Lien pour en savoir plus sur nous"
          to="/about"
        >
          A Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
