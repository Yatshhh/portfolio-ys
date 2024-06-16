import React from "react";
import "./projects.css";
import Title from "../title/Title";
import Boxdata from "./Box-data/boxdata.jsx";

const projects = () => {

  return (
    <>
      <div className="pcontainer" id="MyProjects">
        <Title first="Kindly Review" second="MY PROJECTS " third="!!" />
        <div className="main">
          <div className="pcontent">
            {/* --------------------------------------------------------- */}
            <Boxdata title="EVENTO" codeurl = "https://github.com/Yatshhh/Evento" demourl = "https://evento.onrender.com/"image={require('../images/ml.png')} />
            <Boxdata title="PORTFOLIO" codeurl = "https://github.com/Yatshhh/portfolio-yss" demourl = "https://yatendrasharma.onrender.com/" image={require('../images/ai.png')} />
            <Boxdata title="WEATHER REPORT" codeurl = "https://github.com/Yatshhh/weather_app" demourl = "https://github.com/Yatshhh.io/weather_app/"image={require('../images/weather.jpg')} />
            {/* <Boxdata title="MOVIE LIST" codeurl = "https://github.com/arpitsha25" image={require('../images/tech.jpg')} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;
