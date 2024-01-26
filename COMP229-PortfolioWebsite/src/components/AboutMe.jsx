import React from 'react';
import { Box, Container, Image, Text, Heading, VStack } from '@chakra-ui/react';
import myImage from '.././assets/meandeli.jpeg';

const AboutMe = () => {
  return (
    <Container maxW="4xl" centerContent>
      <VStack spacing={4} py={{ base: 10, md: 26 }}>
        <Image
          boxSize='300px'
          src={myImage}
          alt="Me and my dog Eli!"
          _hover={{ transform: "scale(1.10)", transition: "transform 0.6s" }}
        />
        <Heading as="h1" size="2xl" marginTop="3">
          Mark Baula
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Hi! I'm Mark. I'm a software engineering student at Centennial College.
          I studied Mechatronics Engineering at the University of Waterloo before transitioning into this program.
        </Text>
        <Text fontSize="xl" textAlign="center">
          I found that while I truly enjoyed learning about different facets of engineering and coming up with mechanical and electrical solutions to problems,
          writing code is what I really loved to do.
        </Text>
        <Text fontSize="xl" textAlign="center">
          I have nearly 2 years of experience working in different areas of software including Software Development, QA automation, Full-stack development, Business Intelligence and Machine Learning!

        </Text>
        <Text fontSize="md" textAlign="center" paddingTop="4">
          More about me: I enjoy being active, playing video games (love esports, particularly valorant), and spending time learning about new things. 
          I'm always looking for opportunities to collaborate on interesting projects or just chat about innovative ideas.
        </Text>
      </VStack>
    </Container>
  );
};

export default AboutMe;
