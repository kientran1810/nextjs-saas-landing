"use client";
import { StargateColors } from "#/src/utils/Colors";
import { Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import {
  LuHeart,
  LuCar,
  LuPlane,
  LuAlertTriangle,
  LuShield,
  LuFlame,
  LuBuilding2,
  LuUsers,
  LuStar,
} from "react-icons/lu";

const Features = () => {
  return (
    <Flex
      id="features"
      direction={"column"}
      justify={"center"}
      align={"center"}
      my={24}
      px={2}
      maxW={1200}
      mx={"auto"}
    >
      <Heading
        fontSize={{
          base: 32,
          md: 48,
        }}
        textAlign={"center"}
      >
        Sản phẩm bảo hiểm
      </Heading>
      <Text color={StargateColors.grey} textAlign="center" mt={4} maxW={600}>
        Các sản phẩm bảo hiểm tiêu biểu
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={10}
        my={10}
      >
        {Cards.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title}>
            {card.text}
          </Card>
        ))}
      </Grid>
    </Flex>
  );
};

interface CardProps {
  icon: IconType;
  title: string;
  children: ReactNode;
}

const Card = ({ icon, title, children }: CardProps) => (
  <Flex maxW={350} role="group" cursor="pointer">
    <Icon
      as={icon}
      fontSize={48}
      mr={5}
      p={2}
      bg={StargateColors.lightGrey}
      rounded={"md"}
      strokeWidth={1.5}
      transition={"all 0.25s ease"}
      _groupHover={{
        bg: StargateColors.black,
        color: StargateColors.white,
        shadow: "dark-lg",
        transform: "scale(1.1)",
      }}
    />
    <Flex direction={"column"} gap={1}>
      <Heading fontSize={"xl"}>{title}</Heading>
      <Text fontSize={"small"} color={StargateColors.grey}>
        {children}
      </Text>
    </Flex>
  </Flex>
);

const Cards = [
  {
    icon: LuHeart,
    title: "Bảo hiểm sức khỏe",
    text: "Bảo hiểm sức khỏe toàn diện, bảo vệ bạn và gia đình trước rủi ro bệnh tật, tai nạn. An tâm chăm sóc sức khỏe!",
  },
  {
    icon: LuCar,
    title: "Bảo hiểm ô tô",
    text: "Bảo vệ toàn diện xe cơ giới trước rủi ro va chạm, hư hỏng, mất cắp. An tâm trên mọi hành trình!",
  },
  {
    icon: LuPlane,
    title: "Bảo hiểm du lịch",
    text: "Đồng hành mọi chuyến đi với bảo hiểm du lịch, bảo vệ bạn trước rủi ro sức khỏe, hành lý, và sự cố bất ngờ.",
  },
  {
    icon: LuAlertTriangle,
    title: "Bảo hiểm tai nạn",
    text: "An tâm trước mọi rủi ro với bảo hiểm tai nạn, hỗ trợ tài chính kịp thời cho chi phí điều trị.",
  },
  {
    icon: LuShield,
    title: "Bảo hiểm nhân thọ",
    text: "Bảo vệ tài chính dài hạn, chăm sóc sức khỏe và tích lũy cho tương lai với bảo hiểm nhân thọ.",
  },
  {
    icon: LuFlame,
    title: "Bảo hiểm cháy nổ",
    text: "Bảo vệ tài sản trước rủi ro cháy nổ với bảo hiểm toàn diện, giúp bạn giảm thiểu tổn thất.",
  },
  {
    icon: LuUsers,
    title: "Bảo hiểm sức khỏe tổ chức",
    text: "Bảo vệ sức khỏe nhân viên, chi trả chi phí y tế, khám chữa bệnh, đảm bảo an tâm làm việc.",
  },
  {
    icon: LuStar,
    title: "Bảo hiểm sức khỏe tổ chức",
    text: "Bảo vệ sức khỏe nhân viên, chi trả chi phí y tế, khám chữa bệnh, đảm bảo an tâm làm việc.",
  },
  {
    icon: LuBuilding2,
    title: "Bảo hiểm xây dựng",
    text: "Đảm bảo an toàn công trình, bồi thường thiệt hại vật chất, tai nạn lao động trong quá trình thi công.",
  },
];

export default Features;
