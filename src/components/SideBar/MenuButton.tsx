import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import HamburgerMenu from "../../Assets/Hamburger.svg";
import HamburgerAnimated from "../../Assets/HamburgerAnimated.svg";
import { Box } from "@mui/material";

const HoverableBox = styled(Box)`
  cursor: pointer; /* Add a cursor change on hover */
  transition: transform 0.75s ease; /* Add a smooth transition effect */
  &:hover {
    transform: translateX(1px);
  }
`;

const MyComponent: FC = () => {
  const [animate, setAnimate] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setAnimate(true);
  };

  const handleMouseLeave = () => {
    setAnimate(false);
  };

  return (
    <HoverableBox
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!animate ? <HamburgerMenu /> : <HamburgerAnimated />}
    </HoverableBox>
  );
};

export default MyComponent;
