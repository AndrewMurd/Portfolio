import React from "react";
import "./ProjectPage.scss";
import { useDispatch } from "react-redux";
import { setVariant, reset } from "../../redux/cursor";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Projects from "../../projects.json";

function ProjectPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const title = params.id;

  return (
    <div>
      <div className="leftSideView">
        {Projects[title].images.map((imgSrc, index) => {
          console.log(imgSrc)
          return <img key={index} src={imgSrc} alt=""></img>;
        })}
      </div>
      <div className="rightSideView">
        <div className="metaDataProjectPage">
          <div
            className="backBtn"
            onMouseEnter={() => {
              dispatch(setVariant("hover"));
            }}
            onMouseLeave={() => {
              dispatch(reset());
            }}
            onClick={() => {
              navigate("/");
            }}
          ></div>
          <div className="projectStack">
            {Projects[title].stack.map((stackItem, index, arr) => {
              if (arr.length - 1 === index) {
                return <div key={index}>#{stackItem}</div>;
              } else {
                return <div key={index}>#{stackItem},</div>;
              }
            })}
          </div>
          <h1 className="projectTitle">{title}</h1>
          <p className="projectDesc">{Projects[title].desc}</p>
          <div
            className="visitBtn"
            onMouseEnter={() => {
              dispatch(setVariant("hover"));
            }}
            onMouseLeave={() => {
              dispatch(reset());
            }}
          >
            Visit
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
