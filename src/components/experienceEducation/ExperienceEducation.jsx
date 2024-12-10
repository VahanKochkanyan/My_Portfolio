import React, { useContext } from "react";
import { ThemeContext } from "../../themeContext/ThemeContext";
import "./style.css";

const ExperienceEducation = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="experience-education-container">
      <div className="section">
        <h2 style={{ color: theme ? "#eee" : "#333" }}>Education</h2>
        <div style={{ color: theme ? "#ccc" : "#667" }} className="education">
          <h3 style={{ color: theme ? "#ccc" : "#667" }}>
            Yerevan State College of Informatics
          </h3>
          <p>2017 - 2021</p>
          <p>Technician-Mechatronics Degree</p>
          <p>
            This is where I took my first steps in the world of technology, 
            laying the foundation for my career in software development and engineering.
          </p>
        </div>
        <div className="education">
          <h3>PicsArt Academy - General Programming</h3>
          <p>2023 - 2024</p>
          <p>
            Participated in the General Programming  at PicsArt Academy, 
            specifically as part of the JavaScript Renaissance group.
            Gained in-depth knowledge and skills in JavaScript, HTML, CSS, 
            React.js, Redux, and Redux Toolkit, focusing on modern web development practices.
            Successfully completed the program and earned a certificate of achievement.
          </p>
        </div>
      </div>

      <div className="section">
        <h2>Experience</h2>
        <div className="experience">
          <h3>Code Republic Lab, PicsArt Academy</h3> 
          <p>
            <p>NOV 2023 - JAN 2024</p>
          </p>
          <p>
            As a student in the JavaScript Lab, my primary focus is on mastering JavaScript 
            by engaging in hands-on exercises and interactive sessions. I actively participate 
            in practical activities to deepen my understanding of JavaScript concepts, improve 
            problem-solving skills, and gain valuable real-world programming experience․
          </p>
          <p>
            Had the opportunity to learn and apply advanced programming concepts
            and problem-solving skills.
          </p>
        </div>
        <div className="experience">
          <h3>FrontEnd Intern Developer, PicsArt Academy</h3>
          <p>JAN 2024 - APRIL 2024</p>
          <p>
            I have worked on the MOVIATO project, where I applied my skills in JavaScript, 
            React.js, Redux, and other web development technologies. Within the scope of this project, 
            I developed user-friendly and functional interface while ensuring the system's efficiency. 
            This experience also allowed me to refine my coding practices and effectively collaborate in a team environment․
          </p>
        </div> 
        <div className="experience">
          <h3>Sales Manager, FNET Telecom</h3>
          <p>
            <p>JUN 2024 - SEP 2024</p>
          </p>
          <p>
            Successfully managed the sales process by effectively 
            presenting the company's services.
            Possess strong communication skills, 
            enabling the establishment of long-term relationships with clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceEducation;