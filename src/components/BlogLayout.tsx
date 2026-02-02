import { Box, Container, Flex, Grid, Heading, position, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import TableOfContents from "./TableOfContents";

interface BlogLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  category?: string;
  date?: string;
  author?: string;
  image?: string;
}

const BlogLayout = ({
  children,
  title,
  description,
  category,
  date,
  author,
  image,
}: BlogLayoutProps) => {
  return (
    <>
      {/* Hero Section */}
      <Box
        // bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        bg={"linear-gradient(120deg, #d70000 0%, #ff4e27 40%, #FF4500 70%)"}
        pt={32}
        pb={20}
        color="white"
      >
        <Container maxW="1200px" px={4}>
          {category && (
            <Text
              fontSize="sm"
              fontWeight={600}
              textTransform="uppercase"
              mb={4}
              color="whiteAlpha.900"
            >
              {category}
            </Text>
          )}
          
          {title && (
            <Heading
              fontSize={{
                base: "3xl",
                md: "5xl",
                lg: "6xl",
              }}
              mb={6}
              lineHeight="1.2"
            >
              {title}
            </Heading>
          )}
          
          {description && (
            <Text
              fontSize={{
                base: "lg",
                md: "xl",
              }}
              mb={8}
              color="whiteAlpha.900"
              maxW="800px"
            >
              {description}
            </Text>
          )}
          
          {/* {(date || author) && (
            <Flex gap={4} fontSize="sm" color="whiteAlpha.800">
              {author && <Text>Tác giả: {author}</Text>}
              {date && <Text>• {new Date(date).toLocaleDateString("vi-VN")}</Text>}
            </Flex>
          )} */}
        </Container>
      </Box>

      {/* Featured Image // this one is for image at the top of the blog post
      {image && (
        <Container maxW="1400px" px={4} mt={-10}>
          <Box
            w="full"
            h={{
              base: "300px",
              md: "400px",
              lg: "500px",
            }}
            bg="gray.200"
            rounded="2xl"
            overflow="hidden"
            boxShadow="2xl"
            bgImage={`url(${image})`}
            bgSize="cover"
            bgPosition="center"
          />
        </Container>
      )} */}

      {/* Content Section with TOC */}
      <Container maxW="1400px" px={5} py={16} minH="100vh" >
        <Grid
          templateColumns={{ //this property is used to define the number and size of columns in a grid layout
            base: "1fr",
            lg: "220px 1fr", // On large screens, two columns: main content (contain the remaining space) and TOC (280px wide)
          }}
          gap={8}
          alignItems="flex-start"
        //   bg="yellow"
        >
            {/* Table of Contents - Desktop only */}
            <Box display={{ base: "none", lg: "block" }}>
                <TableOfContents />
            </Box>
            {/* Main Content */}
            <Box
                className="blog-content"
                sx={{
                "& h2": {
                fontSize: { base: "2xl", md: "3xl" },
                fontWeight: "bold",
                mt: 0,
                mb: 6,
                color: "gray.800",
                scrollMarginTop: "100px",
                },
                "& h3": {
                fontSize: { base: "xl", md: "2xl" },
                fontWeight: "semibold",
                mt: 8,
                mb: 4,
                color: "gray.700",
                scrollMarginTop: "100px",
                },
                "& p": {
                fontSize: { base: "md", md: "lg" },
                lineHeight: "1.8",
                mb: 4,
                color: "gray.600",
                },
                "& ul, & ol": {
                ml: 6,
                mb: 6,
                "& li": {
                    fontSize: { base: "md", md: "lg" },
                    lineHeight: "1.8",
                    mb: 2,
                    color: "gray.600",
                },
                },
                "& table": {
                w: "full",
                my: 8,
                borderCollapse: "collapse",
                "& th": {
                    bg: "gray.100",
                    p: 3,
                    textAlign: "left",
                    fontWeight: "semibold",
                    borderBottom: "2px solid",
                    borderColor: "gray.300",
                },
                "& td": {
                    p: 3,
                    borderBottom: "1px solid",
                    borderColor: "gray.200",
                },
                },
                "& strong": {
                fontWeight: "bold",
                color: "gray.800",
                },
                "& a": {
                color: "blue.600",
                textDecoration: "underline",
                _hover: {
                    color: "blue.800",
                },
                },
                "& hr": {
                my: 8,
                borderColor: "gray.300",
                },
            }}
            >
                {children}
            </Box>
        </Grid>
      </Container>
    </>
  );
};

export default BlogLayout;
