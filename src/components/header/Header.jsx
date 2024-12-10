import React from "react";
import "./style.css";
import resume from "../../assets/CV.pdf";

const Header = () => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <h1 className='header__title'>
          <strong>
            Hello, I'm <em>Vahan</em>
          </strong>
          <br />FrontEnd Web Developer                                                                                                                                                                                                                                                                                                                                                        
        </h1>
        <div className='header__text'>
          <p>
            Highly skilled and passionate Front-End Web Developer with a keen eye for detail. 
            Proficient in JavaScript, HTML, CSS, React.js, 
            Redux/Toolkit, 
            and Object-Oriented Programming (OOP), with a focus on delivering innovative and efficient solutions.
          </p>
        </div>
        <a href={resume} download="Resume" class="btn animate__animated animate__pulse animate__infinite">
          DOWNLOAD CV
        </a>
      </div>
    </header>
  );
};

export default Header;