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
  SiLinux,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiAnsible,
  SiTerraform,
  SiGrafana,
  SiPrometheus,
  SiYaml,
  SiMicrosoftazure,
  SiAzure,
  SiAmazonaws
} from "react-icons/si";


const Myskills = () => {
  // const [isShown, setIsShown] = useState(false);
  return (
    <>
      <div className="scontainer" id='Myskills'>
        <Title first="Here's my" second="SKILLS" third="!!" />


        <div className="skillset ">
          

        <div className="skill-items" id="skill-item12"><SiLinux /><p className='txt'>Linux</p></div>
          <div className="skill-items" id="skill-item12"><SiGit /><p className='txt'>Git</p></div>
          <div className="skill-items" id="skill-item7"><SiDocker /><p className='txt'>Docker</p></div>
          <div className="skill-items" id="skill-item7"><SiKubernetes /><p className='txt'>Kubernetes</p></div>
          <div className="skill-items" id="skill-item7"><SiJenkins /><p className='txt'>Jenkins</p></div>
          <div className="skill-items" id="skill-item4"><SiAnsible /><p className='txt'>Ansible</p></div>

          <div className="skill-items" id="skill-item5"><SiTerraform /><p className='txt'>Terraform</p></div>
          <div className="skill-items" id="skill-item5"><SiGrafana /><p className='txt'>Grafana</p></div>
          <div className="skill-items" id="skill-item6"><SiPrometheus /><p className='txt'>Prometheus</p></div>
          
          <div className="skill-items" id="skill-item3"><SiYaml /><p className='txt'>Yaml</p></div>
         
            
    
          <div className="skill-items" id="skill-item11"><SiMicrosoftazure /><p className='txt'>Azure</p></div>
          
          <div className="skill-items" id="skill-item11"><SiAmazonaws /><p className='txt'>Amazon AWS</p></div>

          
          




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
