import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  return (
    <AnimatePresence>
      <PageWrapper>
        <NavContainer>
          <PageTitle to="/about">About</PageTitle>
        </NavContainer>
        <NavContainer className="middle">
          <PageTitle className="right" to="/experience">
            Experience
          </PageTitle>
        </NavContainer>
        <NavContainer>
          <PageTitle to="/skills">Skills</PageTitle>
        </NavContainer>
      </PageWrapper>
    </AnimatePresence>
  );
}

export default Home;

const PageWrapper = styled(motion.div)``;

const PageTitle = styled(Link)`
  font-family: "Abril Fatface", cursive;
  font-size: 120px;
  color: #f6f4f1;
  text-decoration: none;

  display: block;
  overflow: hidden;
  background: linear-gradient(to right, #f39c18, #f39c18 50%, #f6f4f1 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 600ms ease-in-out;
  text-decoration: none; // text decorations are clipped in WebKit browsers
  &:hover {
    background-position: 0 100%;
  }

  &.right {
    text-align: right;
  }
`;

const NavContainer = styled.div`
  padding: 100px 81px;
  &.middle {
    border-top: 1px solid #f6f4f1;
    border-bottom: 1px solid #f6f4f1;
  }
`;
