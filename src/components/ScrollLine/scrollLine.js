import { useEffect } from "react";
import "./scrollLine.scss";
import Project from "../Project/Project";
import About from "../AboutSection/About";
import Projects from "../../projects.json";

function ScrollLine() {
  var projectArr = [];

  useEffect(() => {
    window.scrollTo(0, localStorage.getItem('homeScrollPos'))
  }, [])

  return (
    <div className="scrollLine">
      <div
        id="startSectionContainer"
        className="sectionContainer"
      >
        <div className="sectionCircle"></div>
        <span>
          <div className="subSectionName">
            Start{" "}
            <span className="htmlClosingSection">
              <span>/</span>
              <span className="greaterThanSection">{">"}</span>
            </span>
          </div>
        </span>
        <div id="startSectionContent" className="sectionContent">
          <h1>
            Hi, my name is <span>Andrew Murdoch</span>
          </h1>
          <h1>i design and develop web apps</h1>
          <h2>Let me show you...</h2>
        </div>
      </div>
      <div
        id="workSectionContainer"
        className="sectionContainer"
      >
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
      <div
        id="aboutSectionContainer"
        className="sectionContainer"
      >
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
      <div
        id="contactSectionContainer"
        className="sectionContainer"
      >
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
  
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollLine;
