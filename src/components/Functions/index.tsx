"use client";
import { StargateColors } from "#/src/utils/Colors";
import { Flex, Grid, GridItem, Heading, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { LuAward, LuShieldCheck, LuTrendingUp, LuHeart } from "react-icons/lu";

const Functions = () => {
  return (
    <Flex
      id="functions"
      direction={"column"}
      justify={"center"}
      align={"center"}
      my={24}
      px={4}
      maxW={1200}
      mx={"auto"}
    >
      <Heading
        fontSize={{
          base: 32,
          md: 48,
        }}
        textAlign={"center"}
        mb={4}
      >
        Tại sao bạn nên chọn chúng tôi?
      </Heading>
      <Text color={StargateColors.grey} textAlign="center" mb={10} maxW={700}>
        Chúng tôi cam kết bảo vệ bạn bằng giải pháp bảo hiểm minh bạch, tận tâm, mang đến sự an tâm và hài lòng trong mọi hành trình cuộc sống
      </Text>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={8}
        w={"100%"}
      >
        <FeatureCard
          icon={LuAward}
          title="Chuyên viên nhiều năm kinh nghiệm"
          description="Đội ngũ chuyên viên dày dạn kinh nghiệm, tư vấn chính xác và chuyên nghiệp, giúp bạn chọn gói bảo hiểm phù hợp nhất."
        />
        <FeatureCard
          icon={LuShieldCheck}
          title="Có đại diện đòi bồi thường"
          description="Hỗ trợ bạn từ A-Z khi xảy ra sự cố, đảm bảo quyền lợi được giải quyết nhanh chóng, đúng quy trình và công bằng."
        />
        <FeatureCard
          icon={LuTrendingUp}
          title="Tối đa quyền lợi trong tầm tài chính"
          description="Thiết kế gói bảo hiểm linh hoạt, đáp ứng mọi nhu cầu bảo vệ mà vẫn tối ưu hóa chi phí, phù hợp với ngân sách của bạn."
        />
        <FeatureCard
          icon={LuHeart}
          title="Tận tâm & minh bạch"
          description="Cam kết phục vụ tận tâm, cung cấp thông tin rõ ràng, minh bạch, luôn đặt lợi ích của bạn lên hàng đầu."
        />
      </Grid>
    </Flex>
  );
};

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <Flex
    p={8}
    bg="white"
    rounded="2xl"
    shadow="md"
    _hover={{
      shadow: "xl",
      transform: "translateY(-4px)",
    }}
    transition="all 0.3s ease"
    direction="column"
    align="flex-start"
  >
    <Icon
      as={icon}
      fontSize={48}
      color={StargateColors.primary}
      mb={4}
      strokeWidth={1.5}
    />
    <Heading fontSize="xl" mb={3}>
      {title}
    </Heading>
    <Text color={StargateColors.grey} fontSize="sm">
      {description}
    </Text>
  </Flex>
);

export default Functions;
