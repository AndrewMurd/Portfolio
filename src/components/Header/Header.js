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

  const navigateToStart = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToWork = () => {
    const workSectionTop =
      workSectionEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: workSectionTop, behavior: "smooth" });
  };

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      if (workSectionEl) {
        const workSectionTop =
          workSectionEl.getBoundingClientRect().top + scrollY + yOffset;
        if (scrollY < workSectionTop) {
          setSelectedSection("Start");
        } else if (scrollY >= workSectionTop) {
          setSelectedSection("Work");
        }
      }

      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      }
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
