import React, { useRef, useState, useEffect } from "react";
import "./Projects.scss";
import { setVariant, reset } from "../../redux/cursor";
import { setScroll } from "../../redux/scroll";
import { startCoverAnimation, resetAnimState } from "../../redux/animation";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import LoadingImg from "../Loading/LoadingImg";

function Project({ title, img, num }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const shadeRef = useRef(null);
  let timeout;
  const maxRotation = 20;
  const scale = 1.05;
  const transitionSpeed = 300;
  const initOffset = 100;
  const [animationState, setAnimationState] = useState(false);
  const [loadedImg, setLoadedImg] = useState(false);
  const [isInit, setIsInit] = useState(false);

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
    shadeRef.current.style.setProperty(
      "box-shadow",
      "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
    );
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
      containerRef.current?.style.setProperty("transition", ``);
    }, transitionSpeed);
  };

  const handleMouseClick = () => {
    dispatch(setScroll(window.scrollY));
    setAnimationState(true);
    setTimeout(() => {
      dispatch(startCoverAnimation());
      setTimeout(() => {
        dispatch(resetAnimState());
        navigate(`/projects/${title}`);
        dispatch(reset());
      }, 600);
    }, 700);
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (
      rect.top - window.innerHeight + initOffset <= 0 &&
      rect.top >= -initOffset
    ) {
      setIsInit(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="projectContainer"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={handleMouseClick}
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
        <div className={animationState ? "coverAnimationImg" : ""}></div>
        <div
          ref={shadeRef}
          className={
            isInit && loadedImg
              ? animationState
                ? "shade exitImg"
                : " shade enterImg"
              : "shade initState"
          }
        ></div>
        <div className="metaDataContainer">
          <div className={animationState ? "coverAnimationMetaData" : ""}></div>
          <div
            className={animationState ? "exitMetaData metaData" : "metaData"}
          >
            <h1>{title}</h1>
            <div className="divider"></div>
            <div className="belowDivider">{num}</div>
          </div>
        </div>
        <LoadingImg img={img} isInit={isInit} animationState={animationState} isLoaded={() => {
          setLoadedImg(true)
        }}></LoadingImg>
      </div>
    </div>
  );
}

export default Project;
