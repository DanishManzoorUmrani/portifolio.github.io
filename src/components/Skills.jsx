import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiMicrosoftword, SiMicrosoftpowerpoint, SiMicrosoftexcel } from 'react-icons/si';
// import { Code } from '@mui/icons-material'; // Import from MUI

const Skills = () => {
  return (
    <section className="skills fade-in">
      <h2>Skills</h2>
      <p>It took me 1 year to learn these skills:</p>
      <div className="skills-icons">
        <FaHtml5 className="icon html" title="HTML5" />
        <FaCss3Alt className="icon css" title="CSS3" />
        <FaJsSquare className="icon js" title="JavaScript" />
        <FaReact className="icon react" title="ReactJS" />
        <FaNode className="icon node" title="NodeJS" />
        <FaBootstrap className="icon bootstrap" title="Bootstrap" />
        <SiMongodb className="icon mongodb" title="MongoDB" />
        <SiExpress className="icon express" title="ExpressJS" />
        <SiTailwindcss className="icon tailwind" title="Tailwind CSS" />
        <FaGitAlt className="icon git" title="GitHub" />
        <SiMicrosoftword className="icon word" title="MS Word" />
        <SiMicrosoftexcel className="icon excel" title="MS Excel" />
        <SiMicrosoftpowerpoint className="icon powerpoint" title="MS PowerPoint" />
        {/* <Code className="icon mui-code" title="Material UI Code" />  */}
      </div>
    </section>
  );
};

export default Skills;
