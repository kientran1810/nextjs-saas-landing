"use client";
import React, { useState, useEffect, FC } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { LuMenu, LuX, LuChevronDown } from "react-icons/lu";
import { motion } from "framer-motion";
import { StargateColors } from "#/src/utils/Colors";
import useBannerVisibility from "#/src/utils/BannerVisibility";

const NavItems = [
  { 
    name: "Sức khỏe", 
    href: "/#features",
    dropdown: [
      { name: "Bảo hiểm sức khỏe cá nhân", href: "/#health-individual" },
      { name: "Bảo hiểm sức khỏe gia đình", href: "/#health-family" }
    ]
  },
  { 
    name: "Xe cơ giới", 
    href: "/#product",
    dropdown: [
      { name: "Bảo hiểm ô tô", href: "/#auto" },
      { name: "Bảo hiểm xe máy", href: "/#motorcycle" }
    ]
  },
  { 
    name: "Du lịch", 
    href: "/#pricing",
    dropdown: [
      { name: "Du lịch trong nước", href: "/#travel-domestic" },
      { name: "Du lịch quốc tế", href: "/#travel-international" }
    ]
  },
  { 
    name: "Tai nạn", 
    href: "/#features",
    dropdown: [
      { name: "Bảo hiểm tai nạn cá nhân", href: "/#accident-personal" },
      { name: "Bảo hiểm tai nạn nhóm", href: "/#accident-group" }
    ]
  },
  { 
    name: "Nhân thọ", 
    href: "/#product",
    dropdown: [
      { name: "Bảo hiểm nhân thọ truyền thống", href: "/#life-traditional" },
      { name: "Bảo hiểm tiết kiệm", href: "/#life-savings" }
    ]
  },
  { 
    name: "Bảo hiểm khác", 
    href: "/#pricing",
    dropdown: [
      { name: "Bảo hiểm cháy nổ", href: "/#fire" },
      { name: "Bảo hiểm trách nhiệm", href: "/#liability" }
    ]
  }
];

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBanner] = useBannerVisibility("stargate-banner");
  const [activeSection, setActiveSection] = useState("");
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > (showBanner ? 45 : 0));

      const sectionIDs = NavItems.map((item) => item.name.toLowerCase());

      const currentSection = sectionIDs.find((sectionID) => {
        const sectionElement = document.getElementById(sectionID);
        if (sectionElement) {
          const { top, bottom } = sectionElement.getBoundingClientRect();
          const isSectionInView = top >= 0 && bottom <= window.innerHeight;
          return isSectionInView;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showBanner]);

  return (
    <>
      <Flex
        position={isScrolled ? "fixed" : "absolute"}
        top={isScrolled ? 0 : "auto"}
        zIndex={100}
        bg={isScrolled ? "white" : "transparent"}
        w="100%"
        justify="center"
        align="center"
        backdropFilter={isScrolled ? "none" : "blur(24px)"}
        minH={75}
        transition="all .25s ease"
        direction="column"
      >
        <Flex
          maxW={1440}
          w="100%"
          py={5}
          px={{ base: 10, xl: 5 }}
          align="center"
          justify="space-between"
        >
          <Text
            as={Link}
            href="/"
            fontSize="3xl"
            userSelect="none"
            color={isScrolled ? "black" : "white"}
            fontWeight={600}
          >
            IBaoHiem
          </Text>
          <Flex
            gap={5}
            display={{ base: "none", lg: "flex" }}
            color={isScrolled ? "black" : "white"}
          >
            {NavItems.map((item, index) => (
              <Menu key={index}>
                <MenuButton
                  px={5}
                  py={2}
                  borderRadius={12}
                  transition="all .25s ease"
                  _hover={{ bg: isScrolled ? "#00000010" : "#ffffff25" }}
                  bg={
                    activeSection === item.name.toLowerCase()
                      ? isScrolled
                        ? "#00000010"
                        : "#ffffff25"
                      : "transparent"
                  }
                >
                  <Flex align="center" gap={2}>
                    <Text>{item.name}</Text>
                    <Icon as={LuChevronDown} fontSize="sm" />
                  </Flex>
                </MenuButton>
                <MenuList bg="white" borderColor="gray.200">
                  {item.dropdown.map((dropdownItem, dropIndex) => (
                    <MenuItem
                      as={Link}
                      href={dropdownItem.href}
                      key={dropIndex}
                      color="black"
                      _hover={{ bg: "gray.100" }}
                    >
                      {dropdownItem.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            ))}
          </Flex>

          {/* <Flex gap={4} display={{ base: "none", lg: "flex" }}>
            <Button variant="link" color={isScrolled ? "black" : "white"}>
              Đăng nhập
            </Button>
            <Button
              as={motion.a}
              whileHover={{ scale: 1.1 }}
              href="#footer"
              rounded="full"
              background={isScrolled ? StargateColors.primary : "white"}
              color={isScrolled ? "white" : "black"}
              _hover={{ bg: isScrolled ? StargateColors.primary : "white" }}
            >
              Tư vấn ngay
            </Button>
          </Flex> */}

          <IconButton
            icon={isOpen ? <Icon as={LuX} /> : <Icon as={LuMenu} />}
            aria-label="Hamburger menu"
            variant="unstyled"
            onClick={onToggle}
            color={isScrolled ? "black" : "white"}
            display={{ base: "flex", lg: "none" }}
            fontSize={"lg"}
          />
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Flex
            zIndex={10000}
            w="100%"
            justify="center"
            align="center"
            display={{ base: "flex", md: "none" }}
            direction="column"
            mb={5}
            gap={5}
          >
            {NavItems.map((item, index) => (
              <Box key={index} w="full" textAlign="center">
                <Text 
                  color={isScrolled ? "black" : "white"}
                  fontWeight="600"
                  mb={2}
                >
                  {item.name}
                </Text>
                {item.dropdown.map((dropdownItem, dropIndex) => (
                  <Text
                    as={Link}
                    href={dropdownItem.href}
                    key={dropIndex}
                    color={isScrolled ? "gray.600" : "whiteAlpha.800"}
                    fontSize="sm"
                    display="block"
                    py={1}
                  >
                    {dropdownItem.name}
                  </Text>
                ))}
              </Box>
            ))}
            <Flex gap={5} mt={5}>
              <Button variant="link" color={isScrolled ? "black" : "white"}>
                Đăng nhập
              </Button>
              <Button
                as={motion.a}
                whileHover={{ scale: 1.1 }}
                href="#"
                rounded="full"
                background={isScrolled ? StargateColors.primary : "white"}
                color={isScrolled ? "white" : "black"}
              >
                <Text>Tư vấn ngay</Text>
              </Button>
            </Flex>
          </Flex>
        </Collapse>
      </Flex>
    </>
  );
};

export default Navbar;
