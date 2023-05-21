import React from "react";
import "./scrollLine.scss";

function ScrollLine() {
  return (
    <div className="scrollLine">
      <div id="startSection" className="sectionContainer" style={{ top: "0px" }}>
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
        <div className="sectionContent">
          <h1>
            Hi, my name is <span>Andrew Murdoch</span>
          </h1>
          <h1>i design and develop web apps</h1>
          <h2>Let me show you...</h2>
        </div>
      </div>
      <div id="workSection" className="sectionContainer" style={{ top: "660px" }}>
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
          <div className="sectionContent"></div>
        </div>
      </div>
    </div>
  );
}

export default ScrollLine;
