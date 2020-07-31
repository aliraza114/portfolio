import React from "react";
import "./SmallProjects.css";
import { projects } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{projects.title}</h1>
        <p className="subTitle project-subtitle">{projects.subtitle}</p>
        <div className="startup-projects-main">
          <div className="startup-project-text">
            {projects.projects.map(project => {
              return (
                <div className="saaya-health-div" onClick={() => openProjectInNewWindow(project.link)}>
                  <img alt="Ali Working" src={project.image}></img>
                </div>
              );
            })}
          </div>
          <div className="starup-project-image"></div>
        </div>
      </div>
    </div>
    </Fade>
  );
}
