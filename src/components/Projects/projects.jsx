import React from "react";
import "./projects.css";
import Title from "../title/Title";
import Boxdata from "./Box-data/boxdata.jsx";
// import { DiRequirejs } from "react-icons/di";
// import Ai from "../images/ai.jpg";
const projects = () => {

  return (
    <>
      <div className="pcontainer" id="MyProjects">
        <Title first="Kindly Review" second="MY PROJECTS " third="!!" />
        <div className="main">
          <div className="pcontent">
            {/* --------------------------------------------------------- */}
            <Boxdata title="EVENTO" codeurl = "https://github.com/arpitsha25" demourl = "https://evento.onrender.com/"image={require('../images/ml.png')} />
            <Boxdata title="PORTFOLIO" codeurl = "https://github.com/arpitsha25/portfolio-as" demourl = "https://arpitsharma.onrender.com/" image={require('../images/ai.png')} />
            <Boxdata title="WEATHER REPORT" codeurl = "https://github.com/arpitsha25/weather_app" demourl = "https://arpitsha25.github.io/weather_app/"image={require('../images/weather.jpg')} />
            {/* <Boxdata title="MOVIE LIST" codeurl = "https://github.com/arpitsha25" image={require('../images/tech.jpg')} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;
