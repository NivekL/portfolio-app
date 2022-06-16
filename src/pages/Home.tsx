import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  const [anim, setAnim] = useState(false);

  const randomNumber = (sides: number) =>
    Math.floor(Math.random() * sides) + 100;

  const move = {
    hidden: { opacity: 0, x: -100, y: -100, rotate: 0 },
    show: {
      opacity: 1,
      x: randomNumber(300),
      y: randomNumber(50),
      rotate: 180,
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <PageWrapper>
        <NavContainer>
          {anim ? (
            <Box initial="hidden" animate="show" variants={move} />
          ) : (
            <Box animate="hidden" variants={move} />
          )}
          {anim ? (
            <Box2 initial="hidden" animate="show" variants={move} />
          ) : (
            <Box2 animate="hidden" variants={move} />
          )}
          <motion.div
            onHoverStart={() => setAnim(true)}
            onHoverEnd={() => setAnim(false)}
          >
            <PageTitle to="/about">About</PageTitle>
          </motion.div>
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

const PageWrapper = styled.div`
  position: relative;
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: #46bcde;
  position: absolute;
  z-index: 0;
  top: 0;
`;
const Box2 = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: #52d273;
  position: absolute;
  z-index: 0;
`;

const NavContainer = styled.div`
  padding: 100px 81px;
  position: relative;
  overflow: hidden;
  &.middle {
    border-top: 1px solid #f6f4f1;
    border-bottom: 1px solid #f6f4f1;
  }
`;

const PageTitle = styled(Link)`
  font-family: "Abril Fatface", cursive;
  font-size: 120px;
  color: #f6f4f1;
  z-index: 999;
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
