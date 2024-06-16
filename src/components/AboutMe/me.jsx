import React from 'react'
import './me.css';
// import img1 from '../images/img1.png';
import img2 from '../images/yatendra.jpeg';
import { FaQuoteLeft } from 'react-icons/fa';
// import { FaQuoteRight } from 'react-icons/fa';
import Title from '../title/Title';

const me = () => {
  return (
    <>
      <div className="mecontainer" id='Aboutme'>
        <Title first="Get to know" second="ABOUT" third="me" />
        <div className="cont">
          <div className="meleft">
            <div className="image">
              <img src={img2} alt="" />
            </div>
          </div>

          <div className="meright">
            <div className="merightcontent">
              <h1>
              <FaQuoteLeft /></h1>
              <h5>Namaste,<br /> I am <span>Yatendra Sharma</span> from Aligarh, UP, INDIA.
                who thrive on orchestrating seamless collaboration between development and
                operations teams to optimize and elevate the entire software development  
                lifecycle. My mission is to break down silos, streamline processes, and
                drive continuous improvement to deliver high-quality software at scale.                 
                Currently I am working in Infosys LTd  as a <span>DevOps Engineer.</span>          
              </h5>
              {/* <h1>right</h1> */}
              {/* <div className="mebtn">

                <button><a href="#Myskills"><h5>My Skills</h5></a></button>
              </div> */}

            </div>

          </div>
        </div>
      </div>


    </>
  )
}

export default me
