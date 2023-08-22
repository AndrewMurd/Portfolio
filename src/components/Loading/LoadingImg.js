import React, { useState } from "react";
import "./LoadingImg.scss";

function LoadingImg({ img, isInit, animationState, isLoaded }) {
  const [loadedImg, setLoadedImg] = useState(false);

  return (
    <div className="imgContainer">
      <img
        className={
          isInit && loadedImg ? (animationState ? "exitImg" : "enterImg") : "initState"
        }
        style={{ visibility: loadedImg ? "visible" : "hidden" }}
        src={img}
        onLoad={() => {
          setLoadedImg(true);
          isLoaded();
        }}
        alt=""
      ></img>
      <div style={{ display: loadedImg ? "none" : "inline-block" }} className="lds-dual-ring"></div>
    </div>
  );
}

export default LoadingImg;
