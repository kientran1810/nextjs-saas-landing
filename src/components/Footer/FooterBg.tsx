import { StargateColors } from "#/src/utils/Colors";
import { Box, keyframes } from "@chakra-ui/react";
import React from "react";

const FooterBg = () => {
  return (
    <Box
      position={"absolute"}
      inset={0}
      zIndex={-2}
      bg={`#ffc1c1 70%`}
      bgSize={"100% 100%"}
    />
  );
};

export default FooterBg;
