import React from 'react'
import './journey.css'
import Title from '../title/Title'
// import {IoSchool} from'react-icons/io';

import { CgEditBlackPoint } from 'react-icons/cg';
import { SiInfosys } from "react-icons/si";

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
                <div class="cmp"><SiInfosys/><div class="cmp1"><div>INFOSYS Pvt. Ltd.</div><div class="cmp2">NOIDA</div></div></div>
                <div class="title"><FaLaptopCode/> <h5>DevOps Engineer</h5></div>
                <div class="info"><div class="ttt"><PiArrowCircleRightFill/></div> <div>Currently working as DevOps Engineer at Infosys</div></div>
                <div class="info"><div class="ttt"><PiArrowCircleRightFill/></div> <div>Responsible for Deployments and Manage Cluster Orchestration</div></div>
                <div class="info"><div class="ttt"><PiArrowCircleRightFill/></div> <div>Integrating Azure Container Registry for Artifact management</div></div>
                <div class="info"><div class="ttt"><PiArrowCircleRightFill/></div> <div>Creating a dashboard using Grafana and Prometheus for monitoring</div></div>
                <div class="time">
                  <span>PRESENT</span>
                  <span>JUNE 2022</span>
                </div>
              </li>     
              {/* <li>
                <span></span>
                <div class="title"><h5><CgEditBlackPoint/> ENGINEERING</h5></div>
                <div class="info">~ From Raj Kumar Goel Institute of Technology, Ghaziabad</div>                
                <div class="info">~ Completed with 78.0 %</div>
                <div class="info">~ Graduated in Civil Engineering</div>
                <div class="info">~ Completed with 78.0 %</div>

                <div class="time">
                  <span>JUL 2021</span>
                  <span>AUG 2017</span>
                </div>
              </li> */}
              {/* <li>
                <span></span>
                <div class="title"><h5><CgEditBlackPoint/> INTERMEDIATE</h5></div>
                <div class="info">~ From City Convent sr. sec. school , Aligarh</div>
                <div class="info">~ Studied PCM with CS</div>
                
                <div class="time">
                  <span>JUL 2017</span>
                  <span>AUG 2016</span>
                </div>
              </li> */}
              {/* <li>
                <span></span>
                <div class="title"><h5><CgEditBlackPoint/> HIGH SCHOOL</h5></div>
                <div class="info">~ From City Convent sr. sec. school</div>
                <div class="info">~ Qulaified with 8.6 CGPA</div>

                <div class="time">
                  <span>JUL 2014</span>
                  <span>AUG 2013</span>
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
