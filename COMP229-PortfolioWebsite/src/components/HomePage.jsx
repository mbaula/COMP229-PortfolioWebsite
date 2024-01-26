import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Button
} from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HomePage = ({portfolioColor}) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (newWindow) newWindow.opener = null;
  };

  return (
    <Container maxW="5xl" centerContent>
      <VStack spacing={2} py={{ base: 16, md: 36 }}>
        <Heading fontSize={{ base: "4xl", sm: "6xl", md: "8xl" }} 
        _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}
        >
          Hey! I'm Mark 👋
        </Heading>
        <Text fontSize={{ base: "2xl", sm: "3xl", md: "6xl" }} color={portfolioColor}>
          I'm a
          <TypeAnimation
            sequence={[
              ' Software Engineer', 2500, 
              ' Coffee Enjoyer', 2500,
              ' Web Developer', 2500, 
              ' Chicago Bulls Fan!', 2500,
              ' Data Lover ❤️', 2500, 
              ' Rock Climbing Enthusiast', 2500,
              () => {}
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={30}
          />
        </Text>
        <Text py={8} fontSize={{ base: "lg", sm: "lg", md: "xl" }} textAlign="center">
          My mission is to leverage technology to create innovative and impactful solutions.
          I aspire to continuously expand my skills in software and beyond and hopefully create meaningful contributions
          that will make at least one person's life just a bit easier.
        </Text>

        <HStack spacing={4}>
          <Icon as={FaGithub} w={6} h={6} _hover={{ color: portfolioColor }} onClick={() => openInNewTab('https://github.com/mbaula')}/>
          <Icon as={FaLinkedin} w={6} h={6} _hover={{ color: portfolioColor }} onClick={() => openInNewTab('https://www.linkedin.com/in/mark-b17/')}/>
          <Button color={portfolioColor} as={RouterLink} to="/projects">
            View My Work
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default HomePage;
