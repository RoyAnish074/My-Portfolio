import React, { useState, useEffect } from "react";
import { StyledButton } from "../styles/Button.styled";
import {
  Name,
  StyledButtonsContainer,
  StyledHome,
  Title,
  Line,
  Greeting,
  Social,
  Socials,
} 
from "../styles/Home.styled";
import "./style.css";
import projectIcon from "../../assets/icons/project-icon.svg";
import aboutIcon from "../../assets/icons/about-me.svg";
import { IconContext } from "react-icons";
import { GrLinkedinOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { FaEnvelope } from "react-icons/fa";





const Home = () => {
  const [currentTitle, setCurrentTitle] = useState("XR Developer");
  const titles = ["AR Developer", "VR Developer", "XR Developer"];
  const [currentAction, setCurrentAction] = useState("design");
  const actions = ["design", "create", "code"];

  useEffect(() => {
    const intervalId1 = setInterval(() => {
      const nextIndex = (titles.indexOf(currentTitle) + 1) % titles.length;
      setCurrentTitle(titles[nextIndex]);
    }, 3000); // Change title every 3 seconds

    const intervalId2 = setInterval(() => {
      const nextActionIndex = (actions.indexOf(currentAction) + 1) % actions.length;
      setCurrentAction(actions[nextActionIndex]);
    }, 3000); // Change action every 3 seconds

    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
    }; 
  }, [currentTitle, currentAction]);

  let today = new Date();
  let hour = today.getHours();

  return (
    <>
    <div classname="background-image-place">
    <IconContext.Provider value={{ size: "1rem" }}>
      <StyledHome id="home">
        <Name>Anish Roy</Name>
        <Title>{currentTitle}</Title>
        <p>
          I <span className="responsive">{currentAction} XR </span> games.
        </p>
        <StyledButtonsContainer>
          <StyledButton
            icon={projectIcon}
            to="projects"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>Projects</span>
          </StyledButton>
          <StyledButton
            icon={aboutIcon}
            secondary="true"
            content="B"
            to="about"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>About me</span>
          </StyledButton>
        </StyledButtonsContainer>
        <Line />
        <Greeting>
          have a great
          <span>
            {hour < 12 ? " morning" : hour < 18 ? " afternoon" : " evening"}
          </span>
          .
        </Greeting>
        <Socials>
          <Social
            href="https://www.instagram.com/royanish074"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </Social>
          <Social
            href="mailto:royanish074@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </Social>
          <Social
            href="https://github.com/RoyAnish074"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoMarkGithub />
          </Social>
          <Social
            href="https://www.linkedin.com/in/anish-roy19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedinOption />
          </Social>
        

        </Socials>
    

      </StyledHome>
    </IconContext.Provider>
    </div>
    </>
    
  );
};

export default Home;
