import React from "react";
import "./style.css";
import SkillProgress from "../skillProgress/SkillProgress";

const SkillProgressBar = () => {
  return (
    <div className='skillsBlockWrapper'>
      <h2>My Skills</h2>
      <div className='skillsBlock'>
        <div className='column'>
          <SkillProgress skillName='JavaScript' percentage={70} />
          <SkillProgress skillName='HTML' percentage={65} />
          <SkillProgress skillName='CSS' percentage={65} />
          <SkillProgress skillName='OOP' percentage={70} />
          <SkillProgress skillName='React JS' percentage={65} />
          <SkillProgress skillName='Redux/ReduxToolkit' percentage={65} />
          <SkillProgress skillName='TypeScript' percentage={60} />
        </div>
        <div className='column'>
          <SkillProgress skillName='REST API' percentage={50} />
          <SkillProgress skillName='Git/GitHub' percentage={65} />
          <SkillProgress skillName='Linux' percentage={65} />
          <SkillProgress skillName='Tailwind CSS' percentage={65} />
          <SkillProgress skillName='Material UI' percentage={65} />
        </div>
      </div>
    </div>
  );
};

export default SkillProgressBar;