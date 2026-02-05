"use client";
import { Box, Button, Flex } from "@chakra-ui/react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";
import { StargateColors } from "../utils/Colors";

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

const LanguageSwitcher = ({ isScrolled = false }: LanguageSwitcherProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentLang = searchParams.get("lang") || "vi";

  const switchLanguage = (lang: string) => {
    const params = new URLSearchParams(searchParams.toString());
    console.log("Current Params:", params.toString());
    params.set("lang", lang);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Flex gap={2} align="center">
      <Button
        size="sm"
        variant={currentLang === "vi" ? "solid" : "ghost"}
        bg={currentLang === "vi" ? `${StargateColors.accent.red}` : "transparent"}
        color={currentLang === "vi" ? "white" : (isScrolled ? "gray.700" : "black")}
        onClick={() => switchLanguage("vi")}
        fontWeight={currentLang === "vi" ? "bold" : "normal"}
        _hover={{
            bg: currentLang === "vi" 
                ? `${StargateColors.accent.red}`
                : (isScrolled ? "gray.100" : `${StargateColors.accent.red}`),
            color: currentLang === "vi" 
                ? "white"
                : (isScrolled ? "black" : "white")
        }}
      >
        VI
      </Button>
      <Box w="1px" h="20px" bg={isScrolled ? "gray.300" : "whiteAlpha.400"} />
      <Button
        size="sm"
        variant={currentLang === "en" ? "solid" : "ghost"}
        bg={currentLang === "en" ? `${StargateColors.accent.red}` : "transparent"}
        color={currentLang === "en" ? "white" : (isScrolled ? "gray.700" : "black")}
        onClick={() => switchLanguage("en")}
        fontWeight={currentLang === "en" ? "bold" : "normal"}
        _hover={{
            bg: currentLang === "en" 
                ? `${StargateColors.accent.red}`
                : (isScrolled ? "gray.100" : `${StargateColors.accent.red}`),
            color: currentLang === "en" 
                ? "white"
                : (isScrolled ? "black" : "white")
        }}
      >
        EN
      </Button>
    </Flex>
  );
};

export default LanguageSwitcher;
