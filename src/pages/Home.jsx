import React from 'react';
import {Link} from 'react-router-dom';
import {FaUser, FaBook, FaCog, FaSignOutAlt, FaStar} from 'react-icons/fa';
import styled from 'styled-components';
import Hero from "../components/Hero.jsx";
import Steps from "../components/Steps.jsx";
import Requirement from "../components/Requirement.jsx";
import {FaQ} from "react-icons/fa6";
import AskQuestion from "./AskQuestion.jsx";
import Footer from "../components/Footer.jsx";

const Container = styled.div``;

export default function Home() {

  return (
    <Container>
      <Hero/>
      <Steps/>
      <Requirement/>
      <AskQuestion src={'landingpage'}/>
      <Footer/>
    </Container>
  );
}

