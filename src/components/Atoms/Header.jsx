import { useNavigate } from "react-router-dom";
import battalaDukanam from "../../assets/battalaDukanam.gif";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const navPageClass = "navPage";
  const navigate = useNavigate();
  const [navPage, setNavPage] = useState("");

  const [menu, setMenu] = useState("container");
  const validateSignIn = () => {
    navBarClicked("");
    navigate("/E-commerce-BD-/SignIn");
  };

  const navBarClicked = (navPage) => {
    setNavPage(navPage);
  };

  const menuClick = () => {
    setMenu(menu === "change" ? "container" : "change");
  };
  return (
    <nav className="navbar fixed-top">
      <a className="navbar-brand" href="#" onClick={() => navBarClicked("")}>
        <img className="bdLogo" src={battalaDukanam} />
      </a>
      <div className="d-grid d-md-flex navigationPages">
        <a
          className={`${navPageClass}${navPage === "ev" ? "clicked" : ""}`}
          href="#"
          onClick={() => navBarClicked("ev")}
        >
          Every thing
        </a>
        <a
          className={`${navPageClass}${navPage === "men" ? "clicked" : ""}`}
          href="#"
          onClick={() => navBarClicked("men")}
        >
          Men
        </a>
        <a
          className={`${navPageClass}${navPage === "women" ? "clicked" : ""}`}
          href="#"
          onClick={() => navBarClicked("women")}
        >
          Women
        </a>
        <a
          type="button"
          className="btn btn-secondary"
          onClick={() => validateSignIn()}
        >
          Sign In
        </a>
        <div className={menu} onClick={() => menuClick()}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
