import offerIcon from "../assets/svg/localOfferIcon.svg";
import exploreIcon from "../assets/svg/exploreIcon.svg";
import personOutlineIcon from "../assets/svg/personOutlineIcon.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <img src={exploreIcon} alt="Explore" width="36" height="36" />
            <p>Explore</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <img src={offerIcon} alt="Offer" width="36" height="36" />
            <p>Offer</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <img src={personOutlineIcon} alt="Profile" width="36" height="36" />
            <p>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
