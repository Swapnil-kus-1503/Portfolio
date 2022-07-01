import React from 'react';
import styled from 'styled-components';
// import Card from './Card';
import "./skills.css";
import {ImHtmlFive} from "react-icons/im";
import {SiCss3} from "react-icons/si";
import {FaReact} from "react-icons/fa";
import {DiJavascript1} from "react-icons/di";

export const Skills = ()=>{
    return (
      <div className='Skillmain'>
       <div className='title'><h1>Skills</h1></div> 
        <div className='SkillClass'>
          
       
        

        <div >< ImHtmlFive size="7rem"/><h3>HTML</h3></div>
        <div ><SiCss3 size="7rem"/><h3>CSS</h3></div>
        <div ><FaReact size="7rem"/><h3>ReactJs</h3></div>
        <div ><DiJavascript1 size="7rem"/><h3>Javascript</h3></div>







        </div>
        </div>
      );
    };
