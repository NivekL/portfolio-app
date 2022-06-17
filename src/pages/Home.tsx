import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  return (
    <PageWrapper>
      <TransitionBox
        initial={{ height: "100vh", bottom: 0 }}
        animate={{ height: 0 }}
        exit={{ height: "100vh", top: 0 }}
        transition={{ duration: 0.5 }}
      />
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
  );
}

export default Home;

const PageWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const TransitionBox = styled(motion.div)`
  background-color: #f39c18;
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
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
