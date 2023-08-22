import { useEffect, useState, useRef } from "react";
import "./scrollLine.scss";
import { setVariant, reset } from "../../redux/cursor";
import { useDispatch } from "react-redux";
import { scrollTo } from "../../utils/functions";

import Project from "../Project/Project";
import About from "../AboutSection/About";
import Contact from "../ContactSection/Contact";
import Projects from "../../projects.json";

function ScrollLine() {
  const dispatch = useDispatch();
  var projectArr = [];
  const startSectionRef = useRef();
  const yOffset = -30;
  const initOffset = 100;
  const [line1AnimState, setLine1AnimState] = useState(false);
  const [line2AnimState, setLine2AnimState] = useState(false);
  const [line3AnimState, setLine3AnimState] = useState(false);

  const handleScroll = () => {
    if (!startSectionRef.current) return;
    const rect = startSectionRef.current.getBoundingClientRect();
    if (
      rect.top - window.innerHeight + initOffset <= 0 &&
      rect.top >= -initOffset
    ) {
      setTimeout(() => {
        setLine1AnimState(true);
        setTimeout(() => {
          setLine2AnimState(true);
          setTimeout(() => {
            setLine3AnimState(true);
          }, 430);
        }, 430);
      }, 400);
    }
  };

  useEffect(() => {
    window.scrollTo(0, localStorage.getItem("homeScrollPos"));
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const workSectionEl = document.getElementById("workSectionContainer");

  const navigateToWork = () => {
    const sectionTop =
      workSectionEl.getBoundingClientRect().top + window.scrollY + yOffset;
    scrollTo(sectionTop + 2);
  };

  return (
    <div>
      <div
        onMouseEnter={() => {
          dispatch(setVariant("hover"));
        }}
        onMouseLeave={() => {
          dispatch(reset());
        }}
        onClick={navigateToWork}
        className="scrollIndicator"
      >
        <svg>
          <path
            fill="rgb(170, 170, 170)"
            d="M9,30c-5,0-9-4.2-9-9.4V9.4C0,4.2,4,0,9,0s9,4.2,9,9.4v11.3C18,25.8,14,30,9,30z M16.2,9.4
	c0-4.2-3.2-7.5-7.2-7.5S1.8,5.3,1.8,9.4v11.3c0,4.1,3.2,7.5,7.2,7.5s7.2-3.4,7.2-7.5V9.4z M9.2,12.8c-0.5,0-0.9-0.4-0.9-0.9V7.1
	c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9v4.7C10.1,12.3,9.7,12.8,9.2,12.8z"
            class="st0"
          ></path>
        </svg>
        <h3>SCROLL</h3>
      </div>
      <div className="scrollLine">
        <div
          ref={startSectionRef}
          id="startSectionContainer"
          className="sectionContainer"
        >

          <div className="sectionCircle"></div>
          <span>
            <div className="subSectionName enterText">
              Start{" "}
              <span className="htmlClosingSection">
                <span>/</span>
                <span className="greaterThanSection">{">"}</span>
              </span>
            </div>
          </span>
          <div id="startSectionContent" className="sectionContent">
            <div className="block">
              <div className="textContainer">
                <div
                  className={line1AnimState ? "coverAnimation" : ""}
                  style={{ background: "rgb(73, 0, 0)" }}
                ></div>
                <h1 className={line1AnimState ? "enterText" : ""}>
                  Hi, my name is <span>Andrew Murdoch</span>
                </h1>
              </div>
            </div>
            <div className="block">
              <div className="textContainer">
                <div
                  className={line2AnimState ? "coverAnimation1" : ""}
                  style={{ background: "rgb(73, 0, 0)" }}
                ></div>
                <h1 className={line2AnimState ? "enterText" : ""}>
                  i design and develop software
                </h1>
              </div>
            </div>
            <div className="block">
              <div className="textContainer">
                <div
                  className={line3AnimState ? "coverAnimation2" : ""}
                  style={{ background: "#f1f1f1" }}
                ></div>
                <h2 className={line3AnimState ? "enterText1" : ""}>
                  Let me show you...
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div id="workSectionContainer" className="sectionContainer">
          <div className="sectionCircle">
            <span>
              <div className="subSectionName">
                Work{" "}
                <span className="htmlClosingSection">
                  <span>/</span>
                  <span className="greaterThanSection">{">"}</span>
                </span>
              </div>
            </span>
          </div>
          <div className="sectionContent flex">
            {Object.entries(Projects).forEach((value) => {
              projectArr.push(value);
            })}
            {projectArr.map((value, index) => {
              return (
                <Project
                  key={index}
                  title={value[0]}
                  img={value[1].posterImg}
                  num={`0${index}`}
                ></Project>
              );
            })}
          </div>
        </div>
        <div id="aboutSectionContainer" className="sectionContainer">
          <div className="sectionCircle">
            <span>
              <div className="subSectionName">
                About{" "}
                <span className="htmlClosingSection">
                  <span>/</span>
                  <span className="greaterThanSection">{">"}</span>
                </span>
              </div>
            </span>
            <div className="sectionContent">
              <About></About>
            </div>
          </div>
        </div>
        <div id="contactSectionContainer" className="sectionContainer">
          <div className="sectionCircle">
            <span>
              <div className="subSectionName">
                Contact{" "}
                <span className="htmlClosingSection">
                  <span>/</span>
                  <span className="greaterThanSection">{">"}</span>
                </span>
              </div>
            </span>
            <div className="sectionContent">
              <Contact></Contact>
            </div>
          </div>
        </div>
        <small className="property">
          © Made with
          <svg width={17} height={17} viewBox="0 0 20 20">
            <path
              fill="#988e9f"
              d="M5.719 14.75c-0.236 0-0.474-0.083-0.664-0.252l-5.060-4.498 5.341-4.748c0.412-0.365 1.044-0.33 1.411 0.083s0.33 1.045-0.083 1.412l-3.659 3.253 3.378 3.002c0.413 0.367 0.45 0.999 0.083 1.412-0.197 0.223-0.472 0.336-0.747 0.336zM14.664 14.748l5.341-4.748-5.060-4.498c-0.413-0.367-1.045-0.33-1.411 0.083s-0.33 1.045 0.083 1.412l3.378 3.003-3.659 3.252c-0.413 0.367-0.45 0.999-0.083 1.412 0.197 0.223 0.472 0.336 0.747 0.336 0.236 0 0.474-0.083 0.664-0.252zM9.986 16.165l2-12c0.091-0.545-0.277-1.060-0.822-1.151-0.547-0.092-1.061 0.277-1.15 0.822l-2 12c-0.091 0.545 0.277 1.060 0.822 1.151 0.056 0.009 0.11 0.013 0.165 0.013 0.48 0 0.904-0.347 0.985-0.835z"
            ></path>
          </svg>
          by Andrew Murdoch. Circa 2023.
        </small>
      </div>
    </div>
  );
}

export default ScrollLine;
