import { useEffect, useState } from "react";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { setVariant, reset } from "../../redux/cursor";

function Header() {
  const dispatch = useDispatch();
  const yOffset = -30;
  const [selectedSection, setSelectedSection] = useState("Start");
  const [scrollDirection, setScrollDirection] = useState(null);

  const workSectionEl = document.getElementById("workSectionContainer");
  const aboutSectionEl = document.getElementById("aboutSectionContainer");

  const navigateToStart = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToWork = () => {
    const sectionTop =
      workSectionEl.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: sectionTop, behavior: "smooth" });
  };

  const navigateToAbout = () => {
    const sectionTop =
      aboutSectionEl.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: sectionTop, behavior: "smooth" });
  };

  const navigateToContact = () => {};

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (workSectionEl && aboutSectionEl) {
        if (
          scrollY <
          workSectionEl.getBoundingClientRect().top + scrollY + yOffset
        ) {
          setSelectedSection("Start");
        } else if (
          scrollY >=
          workSectionEl.getBoundingClientRect().top + scrollY + yOffset
        ) {
          setSelectedSection("Work");
        } else if (
          scrollY >=
          aboutSectionEl.getBoundingClientRect().top + scrollY + yOffset
        ) {
          setSelectedSection("About");
        }
      }

      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection) setScrollDirection(direction);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return (
    <div
      id="header"
      className="header"
      style={{ top: scrollDirection == "down" ? "-40px" : "0px" }}
    >
      <div className="headerShade"></div>
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
        <div
          style={
            selectedSection == "About"
              ? { color: "#f9f9f9" }
              : { color: "rgb(179, 175, 175)" }
          }
          onClick={navigateToAbout}
        >
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
