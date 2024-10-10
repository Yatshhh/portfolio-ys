import React from 'react'
import './myskills.css';
import Title from '../title/Title';

import { TbLetterC } from "react-icons/tb";
import {
  
  DiGit

} from "react-icons/di";
// import { useState } from 'react';
import {
  // SiPytorch,
  // SiFirebase,
  // SiNextdotjs,
  SiLinux,
  SiGit,
  SiPython,
  SiGnubash,
  SiDocker,
  SiKubernetes,
  SiHelm,
  SiJenkins,
  SiGitlab,
  SiJira,
  SiGithubactions,
  SiAnsible,
  SiArgo,
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
          <div className="skill-items" id="skill-item12"><SiGnubash /><p className='txt'>Bash</p></div>
          <div className="skill-items" id="skill-item12"><SiPython /><p className='txt'>Python</p></div>
          <div className="skill-items" id="skill-item12"><SiGit /><p className='txt'>Git</p></div>
          <div className="skill-items" id="skill-item7"><SiDocker /><p className='txt'>Docker</p></div>
          <div className="skill-items" id="skill-item7"><SiKubernetes /><p className='txt'>Kubernetes</p></div>
          <div className="skill-items" id="skill-item3"><SiArgo /><p className='txt'>ArgoCD</p></div>
          <div className="skill-items" id="skill-item3"><SiHelm /><p className='txt'>Helm</p></div>
          <div className="skill-items" id="skill-item7"><SiJenkins /><p className='txt'>Jenkins</p></div>
          <div className="skill-items" id="skill-item7"><SiGitlab /><p className='txt'>GitlabCI</p></div>
          <div className="skill-items" id="skill-item7"><SiGithubactions /><p className='txt'>GitHub-Actions</p></div>
          <div className="skill-items" id="skill-item4"><SiAnsible /><p className='txt'>Ansible</p></div>
          <div className="skill-items" id="skill-item5"><SiTerraform /><p className='txt'>Terraform</p></div>
          <div className="skill-items" id="skill-item5"><SiGrafana /><p className='txt'>Grafana</p></div>
          <div className="skill-items" id="skill-item6"><SiPrometheus /><p className='txt'>Prometheus</p></div>
          <div className="skill-items" id="skill-item3"><SiYaml /><p className='txt'>Yaml</p></div>
          <div className="skill-items" id="skill-item3"><SiJira /><p className='txt'>Jira</p></div>
          <div className="skill-items" id="skill-item11"><SiMicrosoftazure /><p className='txt'>Azure</p></div>
          <div className="skill-items" id="skill-item11"><SiAmazonaws /><p className='txt'>AWS</p></div>
        </div>
      </div>
    </>
  )
}

export default Myskills
