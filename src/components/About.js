import React from "react";
import Links from "./Links";
function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.info}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.link.github} linkedin ={props.link.linkedin}/>
    </div>
  );
}

export default About;
