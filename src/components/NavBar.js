import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/sslogo.png";
import AppMode from "./AppMode";
import { useState } from "react";

function NavBar(props) {
  const menuBtnClickHandler = () => {
    if (props.mode === AppMode.LOGIN) return;
    props.toggleMenuOpen();
  };

  const [displaySearchBox, setDisplaySearchBox] = useState(false);

  const searchBtnClickHandler = () => {
    setDisplaySearchBox((prevState) => !prevState);
  };

  return (
    <header className="navbar">
      <a id="sLink" className="skip-link" tabIndex="0">
        Skip to content
      </a>
      {props.mode !== AppMode.LOGIN && !props.modalOpen &&(
        <button
          id="menuBtn"
          type="button"
          className="navbar-btn"
          title="Menu"
          aria-controls="sideMenu"
          aria-label="Actions"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={() => menuBtnClickHandler()}
        >
          <FontAwesomeIcon
            icon={props.menuOpen ? faTimes : faBars}
            className="navbar-btn-icon"
          />
        </button>
      )}
      <img src={logo} className="navbar-app-icon" alt="SpeedScore logo" />
      <h1 id="appName" className="navbar-title">
        SpeedScore
      </h1>
      <div className="navbar-right-items">
        {displaySearchBox && (
          <input
            id="searchBox"
            className="form-control"
            aria-label="Search Rounds"
            size="30"
            type="search"
          />
        )}
        {props.mode !== AppMode.LOGIN && !props.modalOpen && (
          <>
            <button
              id="searchBtn"
              type="button"
              className={"navbar-btn" + (props.menuOpen || props.modalOpen ? " disabled" : "")}
              aria-label="Open Rounds Search"
            >
              <FontAwesomeIcon
                onClick={searchBtnClickHandler}
                icon={faSearch}
                className="navbar-btn-icon"
              />
            </button>
            <button
              id="profileBtn"
              type="button"
              className={"navbar-btn navbar-profile-btn " + (props.menuOpen || props.modalOpen ? "disabled" : "")}
              aria-label="Account and Profile Settings"
            ></button>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;
