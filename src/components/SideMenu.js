import React from "react";
import { useEffect, useRef } from "react";
import AppMode from './AppMode'

function useOutsideClickHandler(ref, toggleMenuOpen) {

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        toggleMenuOpen();
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);
}

function SideMenu(props) {

  useEffect(() => {
    function handleKeyDown(event) {
      console.log("Key: " + event.key);
      switch (event.key) {
        case "ArrowUp":
          if (settingsRef.current === document.activeElement) {
            logoutRef.current.focus();
          } else if (logoutRef.current === document.activeElement) {
            aboutRef.current.focus();
          } else if (aboutRef.current === document.activeElement) {
            settingsRef.current.focus();
          } else if (document.activeElement.id === "menuBtn") {
            logoutRef.current.focus();
          }
          break;
        case "ArrowDown":
          if (settingsRef.current === document.activeElement) {
            aboutRef.current.focus();
          } else if (logoutRef.current === document.activeElement) {
            settingsRef.current.focus();
          } else if (aboutRef.current === document.activeElement) {
            logoutRef.current.focus();
          } else if (document.activeElement.id === "menuBtn") {
            settingsRef.current.focus();
          }
          break;
        case "s" || "S":
          settingsRef.current.focus();
          break;
        case "l" || "L":
          logoutRef.current.focus();
          break;
        case "a" || "A":
          aboutRef.current.focus();
          break;
        case "Escape":
          props.toggleMenuOpen();
        default:
          break;
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const menuRef = useRef("null");
  const settingsRef = useRef("null");
  const aboutRef = useRef("null");
  const logoutRef = useRef("null");

  useOutsideClickHandler(menuRef, props.toggleMenuOpen);

  const logout = () => {
    props.toggleMenuOpen();
    props.setMode(AppMode.LOGIN);
  }

  return (
    <ul
      ref={menuRef}
      id="sideMenu"
      role="menu"
      className="sidemenu"
      arial-labelledby="menuBtn"
    >
      <li ref={settingsRef} role="menuitem" tabIndex="-1">
        Settings
      </li>
      <li ref={aboutRef} role="menuitem" tabIndex="-1">
        About
      </li>
      <li onClick={logout} ref={logoutRef} role="menuitem" tabIndex="-1">
        Log Out
      </li>
    </ul>
  );
}

export default SideMenu;
