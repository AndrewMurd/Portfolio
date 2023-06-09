import React from "react";
import "./scrollLine.scss";
import Project from "../Project/Project";
import Projects from "../../projects.json";

function ScrollLine() {
  var projectArr = [];

  return (
    <div className="scrollLine">
      <div
        id="startSectionContainer"
        className="sectionContainer"
        style={{ top: "0px" }}
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
        style={{ top: "660px" }}
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
      </div>
    </div>
  );
}

export default ScrollLine;
