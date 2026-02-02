"use client";
import { Box, Button, Flex } from "@chakra-ui/react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";

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
        bg={currentLang === "vi" ? (isScrolled ? "purple.500" : "whiteAlpha.300") : "transparent"}
        color={currentLang === "vi" ? "white" : (isScrolled ? "gray.700" : "whiteAlpha.800")}
        onClick={() => switchLanguage("vi")}
        fontWeight={currentLang === "vi" ? "bold" : "normal"}
        _hover={{
          bg: currentLang === "vi" 
            ? (isScrolled ? "purple.600" : "whiteAlpha.400") 
            : (isScrolled ? "gray.100" : "whiteAlpha.200")
        }}
      >
        VI
      </Button>
      <Box w="1px" h="20px" bg={isScrolled ? "gray.300" : "whiteAlpha.400"} />
      <Button
        size="sm"
        variant={currentLang === "en" ? "solid" : "ghost"}
        bg={currentLang === "en" ? (isScrolled ? "purple.500" : "whiteAlpha.300") : "transparent"}
        color={currentLang === "en" ? "white" : (isScrolled ? "gray.700" : "whiteAlpha.800")}
        onClick={() => switchLanguage("en")}
        fontWeight={currentLang === "en" ? "bold" : "normal"}
        _hover={{
          bg: currentLang === "en" 
            ? (isScrolled ? "purple.600" : "whiteAlpha.400") 
            : (isScrolled ? "gray.100" : "whiteAlpha.200")
        }}
      >
        EN
      </Button>
    </Flex>
  );
};

export default LanguageSwitcher;
