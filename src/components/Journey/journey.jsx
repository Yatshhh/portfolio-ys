import React from 'react'
import './journey.css'
import Title from '../title/Title'
// import {IoSchool} from'react-icons/io';

import { CgEditBlackPoint } from 'react-icons/cg';
import { SiTata } from "react-icons/si";
import { SiSuzuki} from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa6";
import { SiTcs } from "react-icons/si";
import { PiArrowCircleRightFill } from "react-icons/pi";
const journey = () => {
  return (
    <>
      <div className="jcontainer" id='Myjourney'>
        <Title first="work" second="EXPERIENCE" third="Till now !" />

        <div class="box">
          <div className="box-child">
            <ul id="first-list">
            <li>
                <span></span>
                <div class="cmp"><SiSuzuki/><div class="cmp1"><div>INFOSYS Pvt. Ltd.</div><div class="cmp2">NOIDA</div></div></div>
                <div class="title"><FaLaptopCode/> <h5>Developer</h5></div>
                <div class="info"><div class="ttt"><PiArrowCircleRightFill/></div> <div>Currently working as DevOps Engineer at Infosys</div></div>
                <div class="info"><div class="ttt"><PiArrowCircleRightFill/></div> <div>Responsible for Deployments and Manage Cluster Orchestration</div></div>
                <div class="info"><div class="ttt"><PiArrowCircleRightFill/></div> <div>Integrating Azure Container Registry for Artifact management</div></div>
                <div class="info"><div class="ttt"><PiArrowCircleRightFill/></div> <div>Creating a dashboard using Grafana and Prometheus for monitoring</div></div>
                <div class="time">
                  <span>PRESENT</span>
                  <span>JUNE 2024</span>
                </div>
              </li>     
              {/* <li>
                <span></span>
                <div class="title"><h5><CgEditBlackPoint/> ENGINEERING</h5></div>
                <div class="info">~ From Raj Kumar Goel Institute of Technology, Ghaziabad</div>                
                <div class="info">~ Completed with 78.0 %</div>

                <div class="time">
                  <span>JUL 2021</span>
                  <span>AUG 2017</span>
                </div>
              </li> */}             
            
             
            </ul>
          </div>

        </div>
      </div>

    </>
  )
}

export default journey
