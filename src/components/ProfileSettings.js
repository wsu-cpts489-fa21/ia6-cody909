import logo from "../images/sslogo2.png";
import { useRef, useEffect } from "react";

function ProfileSettings(props) {
  const btnClickHandler = () => {
    props.toggleModalOpen();
  };

  const saveBtnRef = useRef(null);
  const cancelBtnRef = useRef(null);
  const pageContentRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(event) {
      event.preventDefault();

      const tabableInterface = [
        pageContentRef.current,
        saveBtnRef.current,
        cancelBtnRef.current,
      ];

      switch (event.key) {
        case "Tab":
          if (!tabableInterface.includes(document.activeElement)) {
            tabableInterface[0].focus();
          } else {
            const index = tabableInterface.indexOf(document.activeElement);
            index >= tabableInterface.length - 1
              ? tabableInterface[0].focus()
              : tabableInterface[index + 1].focus();
          }
          break;

        case "Enter":
          if (
            document.activeElement === saveBtnRef.current ||
            document.activeElement === cancelBtnRef.current
          ) {
            props.toggleModalOpen();
          }
          break;

        default:
          break;
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });
  return (
    <div className="mode-page">
      <div ref={pageContentRef} tabIndex="0">
        <h1 className="mode-page-header">Account & Profile</h1>
        <p className="mode-page-content">This page is under construction</p>
        <img className="mode-page-icon" src={logo} alt="SpeedScore logo"></img>
      </div>
      <div className="mode-page-content">
        <button
          ref={saveBtnRef}
          className="dialog-primary-btn"
          onClick={btnClickHandler}
        >
          Save
        </button>
        <button
          ref={cancelBtnRef}
          className="dialog-cancel-btn"
          onClick={btnClickHandler}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ProfileSettings;
