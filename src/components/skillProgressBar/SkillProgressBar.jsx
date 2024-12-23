import React from "react";
import "./style.css";
import SkillProgress from "../skillProgress/SkillProgress";

const SkillProgressBar = () => {
  return (
    <div className='skillsBlockWrapper'>
      <h2>My Skills</h2>
      <div className='skillsBlock'>
        <div className='column'>
          <SkillProgress skillName='JavaScript' percentage={60} />
          <SkillProgress skillName='HTML' percentage={60} />
          <SkillProgress skillName='CSS' percentage={60} />
          <SkillProgress skillName='OOP' percentage={60} />
          <SkillProgress skillName='React JS' percentage={60} />
          <SkillProgress skillName='Redux/ReduxToolkit' percentage={60} />
          <SkillProgress skillName='TypeScript' percentage={60} />
        </div>
        <div className='column'>
          <SkillProgress skillName='REST API' percentage={50} />
          <SkillProgress skillName='Git/GitHub' percentage={60} />
          <SkillProgress skillName='Linux' percentage={60} />
          <SkillProgress skillName='Tailwind CSS' percentage={60} />
          <SkillProgress skillName='Material UI' percentage={60} />
        </div>
      </div>
    </div>
  );
};

export default SkillProgressBar;