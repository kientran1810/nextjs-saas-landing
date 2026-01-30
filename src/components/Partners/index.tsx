"use client";
import React from "react";
import { Box, Flex, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";
import { StargateColors } from "#/src/utils/Colors";

const partners = [
  {
    name: "Bảo Việt Phi Nhân Thọ",
    logo: "https://www.baoviet.com.vn/sites/default/files/2023-10/logo-con-1.png",
  },
  {
    name: "Bảo hiểm Hùng Vương",
    // logo: "/images/partners/bao-viet-nhan-tho.png",
    logo: "https://bhv.com.vn/cdn/image/logo/logo_bhv.png",
    
  },
  {
    name: "PVI Insurance",
    logo: "https://www.pvi.com.vn/images/pvi-logo.png",
  },
  {
    name: "Bảo Minh",
    logo: "https://www.baominh.com.vn/uploads/source/header/logo-new.png",
  },
  {
    name: "TechcomBank",
    logo: "https://techcombank.com/content/dam/techcombank/public-site/seo/techcombank_logo_svg_86201e50d1.svg",
  },
];

const Partners = () => {
  return (
    <Flex
        id="partners"
        direction="column"
        align="center"
        justify="center"
        py={{ base: 16, md: 24 }}
        px={{ base: 4, md: 8 }}
        bg="white"
    >
      <Flex
        direction="column"
        align="center"
        maxW="1200px"
        w="100%"
        gap={12}
        p={{ base: 8, md: 12 }}
        // bg="white"
        bg={StargateColors.primaryRedBg}
        borderRadius="3xl"
        border="3px solid"
        borderColor="red.100"
        boxShadow="xl"
        position="relative"
        // _before={{
        //   content: '""',
        //   position: "absolute",
        //   top: 0,
        //   left: 0,
        //   right: 0,
        //   height: "6px",
        //   bg: `linear-gradient(90deg, ${StargateColors.primary} 0%, ${StargateColors.secondary} 100%)`,
        //   borderTopRadius: "3xl",
        // }}
      >
        {/* Section Header */}
        <Flex 
          direction="column" 
          align="center" 
          textAlign="center" 
          gap={6}
          px={{ base: 4, md: 6 }}
        >
          <Heading
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight={700}
            color={StargateColors.black}
            mb={2}
          >
            Đối tác của chúng tôi
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color={StargateColors.neutralGray}
            maxW="800px"
            lineHeight="1.8"
            px={{ base: 2, md: 4 }}
          >
            IBAOHIEM luôn nghiên cứu và phân tích nhu cầu của bạn để tìm được
            sản phẩm cũng như công ty bảo hiểm phù hợp nhất với bạn. Hứa hẹn sẽ
            mang đến cho bạn những sản phẩm & chất lượng phục vụ tốt nhất
          </Text>
        </Flex>

        {/* Partners Grid */}
        <SimpleGrid
          columns={{ base: 2, md: 3, lg: 5 }}
          spacing={{ base: 6, md: 8 }}
          w="100%"
          mt={8}
          p={{ base: 6, md: 8 }}
        //   bg="gray.50"
        //   borderRadius="2xl"
        //   border="2px solid"
        //   borderColor="gray.100"
        >
          {partners.map((partner, index) => (
            <Flex
              key={index}
              align="center"
              justify="center"
              p={8}
              bg="white"
              borderRadius="xl"
              border="2px solid"
              borderColor="gray.200"
              boxShadow="sm"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: "xl",
                borderColor: StargateColors.tertiaryBlue,
                // bg: "red.50",
              }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                maxH="60px"
                maxW="150px"
                objectFit="contain"
                fallback={
                  <Box
                    bg="gray.100"
                    h="60px"
                    w="150px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text fontSize="xs" color="gray.500" textAlign="center">
                      {partner.name}
                    </Text>
                  </Box>
                }
              />
            </Flex>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Partners;
