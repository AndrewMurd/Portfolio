import { useEffect, useState } from "react";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { setVariant, reset } from "../../redux/cursor";

function Header() {
  const dispatch = useDispatch();
  let didScroll;
  const delta = 3;
  const yOffset = -30;
  let lastScrollTop = 0;
  const [selectedSection, setSelectedSection] = useState("Start");

  const workSectionEl = document.getElementById("workSection");

  const navigateToStart = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSelectedSection('Start');
  };

  const navigateToWork = () => {
    const y = workSectionEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setSelectedSection('Work');
  };

  document.addEventListener("scroll", (event) => {
    didScroll = true;
  });

  setInterval(() => {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  const hasScrolled = () => {
    let st = document.documentElement.scrollTop;
    if (Math.abs(lastScrollTop - st) <= delta) return;
    if (st > lastScrollTop) {
      // Scroll Down
      document.getElementById("header").style.top = "-40px";
    } else {
      // Scroll Up
      document.getElementById("header").style.top = "5px";
    }
    lastScrollTop = st;
  };

  return (
    <div id="header" className="header">
      <div
        onMouseEnter={() => {
          dispatch(setVariant("hover"));
        }}
        onMouseLeave={() => {
          dispatch(reset());
        }}
        className="linkContainer"
      >
        <div
          style={
            selectedSection == "Start"
              ? { color: "#f9f9f9" }
              : { color: "rgb(179, 175, 175)" }
          }
          onClick={navigateToStart}
        >
          Start{" "}
          <span className="htmlClosing">
            <span>/</span>
            <span className="greaterThan">{">"}</span>
          </span>
        </div>
        <div
          style={
            selectedSection == "Work"
              ? { color: "#f9f9f9" }
              : { color: "rgb(179, 175, 175)" }
          }
          onClick={navigateToWork}
        >
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
