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
                <div class="cmp"><SiSuzuki/><div class="cmp1"><div>Suzuki Digital Pvt. Ltd.</div><div class="cmp2">Gurugram</div></div></div>
                <div class="title"><FaLaptopCode/> <h5>Developer</h5></div>
                <div class="info"><div class="ttt"><PiArrowCircleRightFill/></div> <div>Currently working as Frontend Developer at Suzuki Digital</div></div>
                <div class="info"><div class="ttt"><PiArrowCircleRightFill/></div> <div>Responsible for developing all devices reponsive UI </div></div>
                <div class="info"><div class="ttt"><PiArrowCircleRightFill/></div> <div>Developing using React.js, Next.js and Tailwind CSS</div></div>
                <div class="info"><div class="ttt"><PiArrowCircleRightFill/></div> <div>Effectively consuming APIs in Frontend and optimizing page load time</div></div>
                <div class="info"><div class="ttt"><PiArrowCircleRightFill/></div> <div>Developing components following coding standards and maintaing code quality</div></div>
                <div class="time">
                  <span>PRESENT</span>
                  <span>SEP 2023</span>
                </div>
              </li>

              <li>
                <span></span>
                <div class="cmp"><SiTcs/><div class="cmp1"><div>TATA Consultancy Services</div><div class="cmp2">Gurugram</div></div></div>
                <div class="title"><FaLaptopCode/><h5>Developer</h5></div>
                <div class="info"><div class="ttt"><PiArrowCircleRightFill/></div> <div>Worked as a software developer for 2 years</div></div>
                <div class="info"><div class="ttt"><PiArrowCircleRightFill/></div> <div>Developed backend Microservices using Node.js Express.js</div></div>
                <div class="info"><div class="ttt"><PiArrowCircleRightFill/></div> <div>Integrated Nosql MongoDB database and Multer for file upload</div></div>
                <div class="info"><div class="ttt"><PiArrowCircleRightFill/></div> <div>Developed user-friendly and responsive user interface in React.js</div></div>
                <div class="info"><div class="ttt"><PiArrowCircleRightFill/></div> <div>Utilized Redux for state management</div></div>
                <div class="info"><div class="ttt"><PiArrowCircleRightFill/></div> <div>Optimized page load time and reduced bugs in the system</div></div>
                <div class="time">
                  <span>SEP 2023</span>
                  <span>AUG 2021</span>
                </div>
              </li>
              {/* <li>
                <span></span>
                <div class="title"><h5><CgEditBlackPoint/> ENGINEERING</h5></div>
                <div class="info">~ From Raj Kumar Goel Institute of Technology, Ghaziabad</div>
                <div class="info">~ Graduated in Electronics and Communications</div>
                <div class="info">~ Completed with 78.0 %</div>

                <div class="time">
                  <span>JUL 2021</span>
                  <span>AUG 2017</span>
                </div>
              </li> */}
              {/* <li>
                <span></span>
                <div class="title"><h5><CgEditBlackPoint/> INTERMEDIATE</h5></div>
                <div class="info">~ From St. Fidelis sr. sec. school , Aligarh</div>
                <div class="info">~ Studied PCM with CS</div>
                <div class="info">~ Qulaified with 76.4 %</div>

                <div class="time">
                  <span>JUL 2017</span>
                  <span>AUG 2016</span>
                </div>
              </li> */}
              {/* <li>
                <span></span>
                <div class="title"><h5><CgEditBlackPoint/> HIGH SCHOOL</h5></div>
                <div class="info">~ From City convent sr. sec. school</div>
                <div class="info">~ Qulaified with 9.2 CGPA</div>

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