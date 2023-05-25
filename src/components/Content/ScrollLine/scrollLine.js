import React from "react";
import "./scrollLine.scss";
import MyGolfrHome from "../../../assets/MyGolfrHome.png";
import AmazonCloneHome from '../../../assets/AmazonCloneHome.png'
import Project from "../../Project/Project";

function ScrollLine() {
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
            <Project title={"MyGolfr"} img={MyGolfrHome} num={"01"}></Project>
            <Project title={"Amazon Clone"} img={AmazonCloneHome} num={"02"}></Project>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollLine;
