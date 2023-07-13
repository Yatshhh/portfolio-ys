import React from 'react'
import './myskills.css';
import Title from '../title/Title';
// import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import { TbLetterC } from "react-icons/tb";
import {
  // DiJavascript1,
  // DiReact,
  // DiNodejs,
  // DiMongodb,
  // DiPython,
  DiGit

} from "react-icons/di";
// import { useState } from 'react';
import {
  // SiPytorch,
  // SiFirebase,
  // SiNextdotjs,
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiRedis,
  SiLinux,
  SiVisualstudiocode,
  SiMongodb,
  SiFlask,
  SiPostman,
  SiExpress,
  SiNodedotjs,
  SiRedux
} from "react-icons/si";


const Myskills = () => {
  // const [isShown, setIsShown] = useState(false);
  return (
    <>
      <div className="scontainer" id='Myskills'>
        <Title first="Here's my" second="SKILLS" third="!!" />


        <div className="skillset ">
          

        <div className="skill-items" id="skill-item12"><SiMongodb /><p className='txt'>MongoDB</p></div>

          <div className="skill-items" id="skill-item12"><SiExpress /><p className='txt'>Express.js</p></div>
          <div className="skill-items" id="skill-item7"><SiReact /><p className='txt'>React JS</p></div>
          <div className="skill-items" id="skill-item7"><SiNodedotjs /><p className='txt'>Node.js</p></div>
          <div className="skill-items" id="skill-item5"><SiRedux /><p className='txt'>Redux</p></div>
          <div className="skill-items" id="skill-item5"><SiHtml5 /><p className='txt'>HTML</p></div>
          <div className="skill-items" id="skill-item6"><SiCss3 /><p className='txt'>CSS</p></div>
          <div className="skill-items" id="skill-item4"><SiJavascript /><p className='txt'>Javascript</p></div>
          <div className="skill-items" id="skill-item11"><SiPostman /><p className='txt'>Postman</p></div>

          <div className="skill-items " id="skill-item1"><TbLetterC /><p className='txt'>C</p></div>
          <div className="skill-items" id="skill-item2"><SiCplusplus /><p className='txt'>C++</p></div>
          <div className="skill-items" id="skill-item3"><SiPython /><p className='txt'>Python</p></div>
          <div className="skill-items" id="skill-item11"><SiFlask /><p className='txt'>Flask</p></div>
          <div className="skill-items" id="skill-item8"><DiGit /><p className='txt'>Git</p></div>

          
          

          <div className="skill-items" id="skill-item9"><SiRedis /><p className='txt'>Redis</p></div>
          
          <div className="skill-items" id="skill-item10"><SiLinux /><p className='txt'>Linux</p></div>
          <div className="skill-items" id="skill-item11"><SiVisualstudiocode /><p className='txt'>VS Code</p></div>
          
          




          {/* <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
              <CgCPlusPlus />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiNextdotjs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiFirebase />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiPytorch />
            </Col>
          </Row> */}
        </div>
      </div>
    </>
  )
}

export default Myskills