import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import styled from "styled-components";
import {useEffect, useRef} from "react";

// - SPACING SYSTEM (px)
// 2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
// - FONT SIZE SYSTEM (px)
// 10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98
//
// - Font-weights:
// Default: 400
// Medium: 500
// Semi-bold: 600
// Bold: 700
//
// - Line-height:
// Default: 1
// small: 1.05
// medium: 1.2
// Paragraph-default: 1.6
// large: 1.8
//
// - Letter-spacing:
// -0.5px
// 0.75px



const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: red;
`;

export default function AppLayout () {


  return (
    <StyledAppLayout>
      <Header/>
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  )
}