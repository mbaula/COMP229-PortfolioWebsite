import React from 'react';
import { Box, Container, Image, Text, Heading, VStack, Button } from '@chakra-ui/react';
import myImage from '.././assets/meandeli.jpeg';
import { Link as RouterLink } from 'react-router-dom';

/*
AboutMe.jsx
Mark Baula
301369567
Jan 26 2024
*/


const AboutMe = ({portfolioColor}) => {
  return (
    <Container maxW="4xl" centerContent>
      {/* VStack to stack children vertically*/}
      <VStack spacing={4} py={{ base: 10, md: 26 }}>
        <Image
          boxSize={{ base: '250px', md: '300px' }}
          src={myImage}
          alt="Me and my dog Eli!"
          _hover={{ transform: "scale(1.10)", transition: "transform 0.6s" }}
        />
        <Heading as="h1" size="xl" marginTop="3">
          Mark Baula
        </Heading>
        <Text fontSize={{ base: "md", md: "xl" }} textAlign="center">
          Hi! I'm Mark. I'm a software engineering student at Centennial College.
          I studied Mechatronics Engineering at the University of Waterloo before transitioning into this program.
        </Text>
        <Text fontSize={{ base: "md", md: "xl" }} textAlign="center">
          I found that while I truly enjoyed learning about different facets of engineering and coming up with mechanical and electrical solutions to problems,
          writing code is what I really loved to do!
        </Text>
        <Text fontSize={{ base: "md", md: "xl" }} textAlign="center">
          I have nearly 2 years of experience working in different areas of software including Software Development, QA automation, 
          Full-stack development, Business Intelligence and Machine Learning!
        </Text>
        {/* Button component as a link to the resume opening the resume in a new tab */}
        <Button
          color={portfolioColor}
          as="a"
          href="https://github.com/mbaula/COMP229-PortfolioWebsite/blob/38b6ab444ef4e4dcbb63eb13b4b5eae719be0d53/MarkBaulaResume_Winter_2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View My Resume
        </Button>
      </VStack>
    </Container>
  );
};

export default AboutMe;
