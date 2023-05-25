import React, { useRef } from "react";
import "./Projects.scss";
import { setVariant, reset } from "../../redux/cursor";
import { useDispatch } from "react-redux";

function Project({ title, img, num }) {
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const shadeRef = useRef(null);
  let timeout;
  const maxRotation = 20;
  const scale = 1.05;
  const transitionSpeed = 300;

  const handleMouseEnter = (e) => {
    setTransition();
  };

  const handleMouseLeave = (e) => {
    setTransition();
    defaultStates();
  };

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + containerRef.current.offsetWidth / 2;
    const centerY = rect.top + containerRef.current.offsetHeight / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX =
      (maxRotation * mouseY) / (containerRef.current.offsetHeight / 2);
    const rotateY =
      (maxRotation * mouseX) / (containerRef.current.offsetWidth / 2);

    containerRef.current.style.setProperty("--rX", rotateX.toFixed(2));
    containerRef.current.style.setProperty("--rY", -rotateY.toFixed(2));
    containerRef.current.style.setProperty("--scale", scale);
    shadeRef.current.style.setProperty("box-shadow", "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px");
  };

  const defaultStates = () => {
    containerRef.current.style.setProperty("--rY", 0);
    containerRef.current.style.setProperty("--rX", 0);
    containerRef.current.style.setProperty("--scale", 1);
    shadeRef.current.style.setProperty("box-shadow", "");
  };

  const setTransition = () => {
    clearTimeout(timeout);
    containerRef.current.style.setProperty(
      "transition",
      `all ${transitionSpeed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`
    );
    timeout = setTimeout(() => {
      containerRef.current.style.setProperty("transition", ``);
    }, transitionSpeed);
  };

  return (
    <div
      className="projectContainer"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div
        className="project"
        onMouseEnter={() => {
          dispatch(setVariant("hover"));
        }}
        onMouseLeave={() => {
          dispatch(reset());
        }}
      >
        <div ref={shadeRef} className="shade"></div>
        <div className="metaData">
          <h1>{title}</h1>
          <div className="divider"></div>
          <div className="belowDivider">{num}</div>
        </div>
        <img src={img} alt=""></img>
      </div>
    </div>
  );
}

export default Project;
