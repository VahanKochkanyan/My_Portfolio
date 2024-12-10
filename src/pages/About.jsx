import ExperienceEducation from "../components/experienceEducation/ExperienceEducation";
import SkillProgressBar from "../components/skillProgressBar/SkillProgressBar";
import "./stylesPages.css";

const About = () => {
  return (
    <div>
      <h2 className=" title-1">About Me</h2>
      <div className="aboutMe">
        <div className="personalDetails">
          <p>
            <strong>First Name:</strong> Vahan
          </p>
          <p>
            <strong>Last Name:</strong> Kochkanyan
          </p>
          <p>
            <strong>Age:</strong> 22 Years
          </p>
          <p>
            <strong>Nationality:</strong> Armenian
          </p>
          <p>
            <strong>Freelance:</strong> Available
          </p>
          <p>
            <strong>Address:</strong> Yerevan, Armenia
          </p>
          <p>
            <strong>Phone 1: </strong> +374 33 958-957
          </p>
          <p>
            <strong>Email:</strong> vahnell13@gmail.com
          </p>
        </div>
        <div className="professionalSnapshot">
          <strong>Professional Snapshot</strong>
          <p>
            With 1 years of dedicated work experience and a commitment to
            continuous learning and growth, I am eager to contribute my skills
            and expertise to diverse projects.
          </p>
        </div>
        <div className="certifications">
          <strong>Certifications</strong>
          <p>1</p>
        </div>
        <div className="languageProficiency">
          <strong>Language Proficiency</strong>
          <p>Armenian (C2): Fluent</p>
          <p>English (A1): Basic Proficiency</p>
          <p>Russian (B2): Intermediate Proficiency</p>
        </div>
      </div>
      <SkillProgressBar />;
      <ExperienceEducation />
    </div>
  );
};

export default About;
