"use client";
import { StargateColors } from "#/src/utils/Colors";
import { Button, Flex, Heading, Text, Grid, Icon, Link as ChakraLink, Input } from "@chakra-ui/react";
import React from "react";
import FooterTopSVG from "./FooterTopSVG";
import FooterBg from "./FooterBg";
import { LuMapPin, LuPhone, LuMail, LuFacebook, LuYoutube, LuClock } from "react-icons/lu";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <Flex
      py={32}
      position={"relative"}
      justify={"center"}
      align={"center"}
      direction={"column"}
      id="footer"
    >
      <FooterTopSVG />
      <FooterBg />
      
      {/* Contact Section */}
      <Flex 
        mt={16} 
        direction={"column"} 
        align={"center"} 
        px={4}
        maxW={1200}
        w="full"
      >
        <Heading
          fontSize={{
            base: 32,
            md: 48,
          }}
          textAlign={"center"}
          color={StargateColors.black}
          mb={10}
        >
          Đăng ký tư vấn miễn phí
        </Heading>

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={8}
          w="full"
          mb={16}
        >
          {/* Location */}
          <Flex direction="column" gap={4}>
            <Flex align="center" gap={3}>
              <Icon as={LuMapPin} color={StargateColors.black} fontSize="2xl" />
              <Text color={StargateColors.black} fontWeight="600">Địa chỉ</Text>
            </Flex>
            <Text color={StargateColors.black} fontSize="sm">
              Hà Nội: Số 19 Ngõ 59 Láng Hạ, Phường Thành Công
            </Text>
            <Text color={StargateColors.black} fontSize="sm">
              HCM: Đường Trần Quang Khải, Phường Tân Định, Quận 1
            </Text>
          </Flex>

          {/* Contact */}
          <Flex direction="column" gap={4}>
            <Flex align="center" gap={3}>
              <Icon as={LuPhone} color={StargateColors.black} fontSize="2xl" />
              <Text color={StargateColors.black} fontWeight="600">Liên hệ</Text>
            </Flex>
            <ChakraLink href="tel:0966490888" color={StargateColors.black} fontSize="sm">
              Hotline: 0966 490 888
            </ChakraLink>
            <ChakraLink href="mailto:kinhdoanh@ibaohiem.vn" color={StargateColors.black} fontSize="sm">
              Email: kinhdoanh@ibaohiem.vn
            </ChakraLink>
          </Flex>

          {/* Working Hours */}
          <Flex direction="column" gap={4}>
            <Flex align="center" gap={3}>
              <Icon as={LuClock} color={StargateColors.black} fontSize="2xl" />
              <Text color={StargateColors.black} fontWeight="600">Thời gian làm việc</Text>
            </Flex>            
            <Text color={StargateColors.black} fontSize="sm">
              Thứ 2 - Chủ nhật
            </Text>
            <Text color={StargateColors.black} fontSize="sm">
              7h00 - 23h00
            </Text>
          </Flex>
        </Grid>

        {/* Quick Links */}
        <Flex 
          direction={{ base: "column", md: "row" }} 
          gap={6} 
          mb={10}
          justify="center"
          flexWrap="wrap"
        >
          <ChakraLink as={Link} href="/about" color={StargateColors.black} fontSize="sm">
            Về chúng tôi
          </ChakraLink>
          <ChakraLink as={Link} href="/contact" color={StargateColors.black} fontSize="sm">
            Liên hệ
          </ChakraLink>
          <ChakraLink as={Link} href="/terms" color={StargateColors.black} fontSize="sm">
            Điều khoản
          </ChakraLink>
          <ChakraLink as={Link} href="/privacy" color={StargateColors.black} fontSize="sm">
            Chính sách bảo mật
          </ChakraLink>
        </Flex>

        {/* Social Media */}
        <Flex gap={6} mb={10}>
          <ChakraLink href="https://facebook.com" isExternal>
            <Icon as={LuFacebook} color={StargateColors.black} fontSize="2xl" _hover={{ color: "blue.300" }} />
          </ChakraLink>
          <ChakraLink href="https://youtube.com" isExternal>
            <Icon as={LuYoutube} color={StargateColors.black} fontSize="2xl" _hover={{ color: "red.300" }} />
          </ChakraLink>
        </Flex>
      </Flex>

      <Flex mt={10}>
        <Text color={StargateColors.black} fontSize="sm" textAlign="center">
          © {new Date().getFullYear()} IBAOHIEM - Mọi thông tin trên website đều mang tính chất tham khảo
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
