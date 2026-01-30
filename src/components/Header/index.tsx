"use client";
import { Button, Flex, Heading, Img, Text, keyframes } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import HeroBottomSVG from "./HeroBottomSVG";
import { StargateColors } from "#/src/utils/Colors";
import { LuZap } from "react-icons/lu";
import Link from "next/link";

const words = [
  "Nhanh",
  "Chính xác",
  "An Toàn",
  "Tin cậy",
  "Hài lòng",
  "Trân trọng",
];

const Header = () => {
  // this one is for the animated words
  const [currentWord, setCurrentWord] = useState<string>(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setCurrentWord(words[index]);
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
      setCurrentWord(words[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <Flex
      as={motion.div}
      initial="initial"
      animate="animate"
      minH="100svh"
      bg={
        "linear-gradient(120deg, #FF4500 0%, #FF5733 40%, #FF7F7F 70%, #FFFFFF 100%)"
      }
      bgSize={"200% 200%"}
      animation={`${bgAnimation} 20s ease-in-out alternate infinite`}
      position={"relative"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      px={{ base: 4, md: 8 }}
      py={{ base: 24, md: 32 }}
    >
      <Flex 
        direction={{ base: "column", lg: "row" }}
        align={"center"}
        justify={"space-between"}
        maxW="1440px"
        w="100%"
        gap={{ base: 8, md: 12 }}
        mt={{ base: 16, md: 20 }}
      >
      <Flex 
        direction={"column"} 
        align={{ base: "center", lg: "flex-start" }}
        justify={"flex-start"}
        flex={1}
        textAlign={{ base: "center", lg: "left" }}
      >
      <Heading
        fontSize={{
          base: 40,
          md: 56,
          lg: 72,
        }}
        color={StargateColors.white}
        lineHeight={1.2}
        mb={4}
      >
        Bảo hiểm trực tuyến
      </Heading>
      <AnimatePresence mode="wait">
        <Heading
          as={motion.h1}
          fontSize={{
            base: 40,
            md: 56,
            lg: 72,
          }}
          key={currentWord}
          color={StargateColors.white}
          lineHeight={1.2}
          initial={{ opacity: 0.2, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0.2, filter: "blur(4px)" }}
          mb={6}
        >
          {currentWord}
        </Heading>
      </AnimatePresence>
      <Text 
        color={StargateColors.white} 
        maxW={{ base: "100%", lg: 500 }}
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight={600}
        mb={4}
      >
        Vững lòng tin, vẹn tròn cam kết
      </Text>
      <Text 
        color={StargateColors.white} 
        maxW={{ base: "100%", lg: 500 }}
        fontSize={{ base: "md", md: "lg" }}
        lineHeight="1.8"
        mb={8}
      >
        Chúng tôi không chỉ cung cấp bảo hiểm giúp bảo vệ tài chính, mà còn mang đến sự an tâm trọn vẹn qua mỗi hành trình cuộc sống. Đặt niềm tin ở chúng tôi, bạn sẽ luôn được đồng hành bởi sự tận tâm và trách nhiệm
      </Text>
      <Button
        as={motion.a}
        href={"#footer"}
        whileHover={{ scale: 1.1 }}
        size={"lg"}
        gap={2}
        cursor={"pointer"}
        bg="white"
        color={StargateColors.primary}
        _hover={{ bg: "white" }}
        px={8}
        py={6}
        fontSize="lg"
        fontWeight={600}
      >
        Tư vấn ngay
      </Button>
      </Flex>
      <Flex
        flex={1}
        align="center"
        justify="center"
        display={{ base: "none", lg: "flex" }}
      >
        <Img 
          src="/images/family-banner.webp" 
          alt="Family Banner" 
          maxW="600px"
          w="100%"
          objectFit="contain"
        />
      </Flex>
      </Flex>
    </Flex>
  );
};

const bgAnimation = keyframes`
  0% {
    background-position: 0% 100%
  }

  to {
    background-position: 100% 100%
  }
`;

export default Header;
