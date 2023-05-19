import React from "react";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { setVariant, reset } from "../../redux/cursor";

function Header() {
  const dispatch = useDispatch();

  const navigateToStart = () => {
    console.log(123);
  };

  return (
    <div className="header">
      <div
        onMouseEnter={() => {
          dispatch(setVariant("hover"));
        }}
        onMouseLeave={() => {
          dispatch(reset());
        }}
        className="linkContainer"
      >
        <div onClick={navigateToStart}>
          Start{" "}
          <span className="htmlClosing">
            <span>/</span>
            <span className="greaterThan">{">"}</span>
          </span>
        </div>
        <div>
          Work{" "}
          <span className="htmlClosing">
            <span>/</span>
            <span className="greaterThan">{">"}</span>
          </span>
        </div>
        <div>
          About{" "}
          <span className="htmlClosing">
            <span>/</span>
            <span className="greaterThan">{">"}</span>
          </span>
        </div>
        <div>
          Contact{" "}
          <span className="htmlClosing">
            <span>/</span>
            <span className="greaterThan">{">"}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
