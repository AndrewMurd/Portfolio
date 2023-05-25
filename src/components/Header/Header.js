import { useEffect, useState } from "react";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { setVariant, reset } from "../../redux/cursor";

function Header() {
  const dispatch = useDispatch();
  const yOffset = -30;
  let lastScrollTop = 0;
  const delta = 50;
  const [selectedSection, setSelectedSection] = useState("Start");

  const workSectionEl = document.getElementById("workSectionContainer");

  const navigateToStart = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToWork = () => {
    const workSectionTop =
      workSectionEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: workSectionTop, behavior: "smooth" });
  };

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (workSectionEl) {
      const workSectionTop =
        workSectionEl.getBoundingClientRect().top + currentScroll + yOffset;
      if (currentScroll < workSectionTop) {
        setSelectedSection("Start");
      } else if (currentScroll >= workSectionTop) {
        setSelectedSection("Work");
      }
    }

    if (currentScroll <= 0) {
      document.getElementById("header").style.top = "5px";
      return;
    }

    if (Math.abs(currentScroll - lastScrollTop) > delta) return;

    if (currentScroll > lastScrollTop) {
      // down
      document.getElementById("header").style.top = "-40px";
    } else if (currentScroll < lastScrollTop) {
      // up
      document.getElementById("header").style.top = "5px";
    }
    lastScrollTop = currentScroll;
  });

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
