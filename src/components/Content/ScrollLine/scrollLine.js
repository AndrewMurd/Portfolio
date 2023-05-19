import React from "react";
import "./scrollLine.scss";

function ScrollLine() {
  return (
    <div className="scrollLine">
      <div id="startSection" style={{ top: "0px" }} className="sectionCircle">
        <span>
          <div className="subSectionName">
            Start{" "}
            <span className="htmlClosingSection">
              <span>/</span>
              <span className="greaterThanSection">{">"}</span>
            </span>
          </div>
        </span>
      </div>
      <div
        id="startSection"
        style={{ top: "1000px" }}
        className="sectionCircle"
      >
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
    </div>
  );
}

export default ScrollLine;
