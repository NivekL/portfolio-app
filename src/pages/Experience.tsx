import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Experience() {
  return (
    <div>
      <TransitionBox
        initial={{ height: "100vh", bottom: 0 }}
        animate={{ height: 0 }}
        exit={{ height: "100vh", top: 0 }}
        transition={{ duration: 0.8 }}
      />
      <h1>About</h1>
      <Link to="/">Back</Link>
    </div>
  );
}

export default Experience;

const TransitionBox = styled(motion.div)`
  height: 100vh;
  width: 100%;
  background-color: #f39c18;
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
`;
