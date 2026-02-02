"use client";
import { Box, Heading, Link, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

const TableOfContents = () => {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract headings from the blog content
    const blogContent = document.querySelector(".blog-content");
    if (!blogContent) return;

    const headingElements = blogContent.querySelectorAll("h2, h3");
    const tocItems: TocItem[] = [];

    headingElements.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`;
      if (!heading.id) {
        heading.id = id;
      }

      tocItems.push({
        id,
        text: heading.textContent || "",
        level: parseInt(heading.tagName.charAt(1)),
      });
    });

    setHeadings(tocItems);

    // Set up intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -80% 0px",
      }
    );

    headingElements.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      headingElements.forEach((heading) => {
        observer.unobserve(heading);
      });
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <Box
      className="toc-container"
      p={6}
      bg="gray.50"
      rounded="xl"
      border="1px solid"
      borderColor="gray.200"
      w="full"
    //   sx={{
    //     '&::-webkit-scrollbar': {
    //       width: '4px',
    //     },
    //     '&::-webkit-scrollbar-track': {
    //       background: 'transparent',
    //     },
    //     '&::-webkit-scrollbar-thumb': {
    //       background: 'gray.300',
    //       borderRadius: '2px',
    //     },
    //   }}
    >
      <Heading size="sm" mb={4} color="gray.700">
        Mục lục
      </Heading>
      <VStack align="stretch" spacing={2}>
        {headings.map((heading) => (
          <Link
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => handleClick(e, heading.id)}
            pl={heading.level === 3 ? 4 : 0}
            py={1}
            fontSize={heading.level === 2 ? "sm" : "xs"}
            color={activeId === heading.id ? "purple.600" : "gray.600"}
            fontWeight={activeId === heading.id ? "semibold" : "normal"}
            borderLeft={activeId === heading.id ? "3px solid" : "3px solid transparent"}
            borderColor={activeId === heading.id ? "purple.500" : "transparent"}
            // pl={heading.level === 3 ? 6 : 3}
            transition="all 0.2s"
            _hover={{
              color: "purple.600",
              textDecoration: "none",
              borderColor: "purple.300",
            }}
          >
            {heading.text}
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default TableOfContents;
