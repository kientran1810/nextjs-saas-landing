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
import { LuMenu, LuX, LuChevronDown, LuHeart, LuCar, LuPlane, LuAlertCircle, LuShield, LuHome } from "react-icons/lu";
import { motion } from "framer-motion";
import { StargateColors } from "#/src/utils/Colors";
import useBannerVisibility from "#/src/utils/BannerVisibility";
import LanguageSwitcher from "../LanguageSwitcher";

const NavItems = [
  { 
    name: "Sức khỏe", 
    href: "/#features",
    icon: LuHeart,
    dropdown: [
      { name: "Bảo Việt An Gia", href: "/san-pham/bao-viet-an-gia", description: "Bảo vệ toàn diện cho gia đình" },
      { name: "Bảo Việt InterCare", href: "/san-pham/bao-viet-intercare", description: "Chăm sóc sức khỏe quốc tế" },
      { name: "Bảo hiểm sức khỏe gia đình", href: "/#health-family", description: "An tâm cho cả nhà" }
    ]
  },
  { 
    name: "Xe cơ giới", 
    href: "/#product",
    icon: LuCar,
    dropdown: [
      { name: "Bảo hiểm ô tô", href: "/#auto", description: "Bảo vệ xe hơi của bạn" },
      { name: "Bảo hiểm xe máy", href: "/#motorcycle", description: "An toàn mỗi hành trình" }
    ]
  },
  { 
    name: "Du lịch", 
    href: "/#pricing",
    icon: LuPlane,
    dropdown: [
      { name: "Du lịch trong nước", href: "/#travel-domestic", description: "Khám phá Việt Nam" },
      { name: "Du lịch quốc tế", href: "/#travel-international", description: "Chu du thế giới" }
    ]
  },
  { 
    name: "Tai nạn", 
    href: "/#features",
    icon: LuAlertCircle,
    dropdown: [
      { name: "Bảo hiểm tai nạn cá nhân", href: "/#accident-personal", description: "Bảo vệ bản thân" },
      { name: "Bảo hiểm tai nạn nhóm", href: "/#accident-group", description: "Cho tập thể, doanh nghiệp" }
    ]
  },
  { 
    name: "Nhân thọ", 
    href: "/#product",
    icon: LuShield,
    dropdown: [
      { name: "Bảo hiểm nhân thọ truyền thống", href: "/#life-traditional", description: "Bảo vệ tương lai" },
      { name: "Bảo hiểm tiết kiệm", href: "/#life-savings", description: "Tích lũy tài chính" }
    ]
  },
  { 
    name: "Bảo hiểm khác", 
    href: "/#pricing",
    icon: LuHome,
    dropdown: [
      { name: "Bảo hiểm cháy nổ", href: "/#fire", description: "Bảo vệ tài sản" },
      { name: "Bảo hiểm trách nhiệm", href: "/#liability", description: "Trách nhiệm pháp lý" }
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
        bg={isScrolled ? "white" : `#ffe1e1`}
        w="100%"
        justify="center"
        align="center"
        minH={75}
        transition="all .25s ease"
        direction="column"
        boxShadow={isScrolled ? "md" : "none"}
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
            color={isScrolled ? "black" : "black"}
            fontWeight={600}
          >
            IBaoHiem
          </Text>
          <Flex
            gap={5}
            display={{ base: "none", lg: "flex" }}
            color={isScrolled ? "black" : "black"}
          >
            {NavItems.map((item, index) => (
              <Menu key={index}>
                {({ isOpen: isMenuOpen }) => (
                  <>
                    <MenuButton
                      px={5}
                      py={2}
                      borderRadius={12}
                      transition="all .25s ease"
                      _hover={{ 
                        bg: isScrolled ? "#00000010" : "#ffffff25",
                        transform: "translateY(-2px)"
                      }}
                      bg={
                        activeSection === item.name.toLowerCase()
                          ? isScrolled
                            ? "#00000010"
                            : "#ffffff25"
                          // : "transparent"
                          : "red.alpha.300"
                      }
                    >
                      <Flex align="center" gap={2}>
                        <Icon as={item.icon} fontSize="lg" />
                        <Text>{item.name}</Text>
                        <Icon 
                          as={LuChevronDown} 
                          fontSize="sm" 
                          transform={isMenuOpen ? "rotate(180deg)" : "rotate(0deg)"}
                          transition="transform 0.2s ease"
                        />
                      </Flex>
                    </MenuButton>
                    <MenuList 
                      bg="white" 
                      borderColor="gray.200"
                      boxShadow="xl"
                      borderRadius="lg"
                      overflow="hidden"
                      minW="280px"
                      p={2}
                    >
                      {item.dropdown.map((dropdownItem, dropIndex) => (
                        <MenuItem
                          as={Link}
                          href={dropdownItem.href}
                          key={dropIndex}
                          color="black"
                          borderRadius="md"
                          py={3}
                          px={4}
                          mb={1}
                          transition="all 0.2s ease"
                          _hover={{ 
                            bg: `linear-gradient(135deg, #ff4e27 0%, ${StargateColors.accent.red} 100%)`,
                            color: "white",
                            transform: "translateX(8px)",
                            boxShadow: "md"
                          }}
                        >
                          <Box>
                            <Text fontWeight="600" mb={0.5}>{dropdownItem.name}</Text>
                            <Text fontSize="xs" opacity={0.8}>{dropdownItem.description}</Text>
                          </Box>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </>
                )}
              </Menu>
            ))}
          </Flex>

          {/* Language Switcher - Desktop */}
          <Box display={{ base: "none", lg: "block" }}>
            <LanguageSwitcher isScrolled={isScrolled} />
          </Box>

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
            
            {/* Language Switcher - Mobile */}
            <Box mt={3}>
              <LanguageSwitcher isScrolled={isScrolled} />
            </Box>
            
            {/* <Flex gap={5} mt={5}>
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
            </Flex> */}
          </Flex>
        </Collapse>
      </Flex>
    </>
  );
};

export default Navbar;
