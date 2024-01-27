import React from 'react';
import ServicesGrid from './ServicesGrid';
import webdev from '.././assets/webdev.webp'
import tutor from '.././assets/tutor.png'
import data from '.././assets/data.jpeg'
import { Box, Heading } from '@chakra-ui/react';

const services = [
  {
    title: "Web Development",
    description: "Offering fullstack web development that is responsive and modern, utilizing MERN stack.",
    imageUrl: webdev,
  },
  {
    title: "Software Tutoring",
    description: "Personalized tutoring sessions in various software languages including Python, Java, C# and JavaScript.",
    imageUrl: tutor,
  },
  {
    title: "Data Analysis & Visualization",
    description: "Proficient in turning complex data into actionable insights, leveraging numbers to make more informed decisions",
    imageUrl: data,
  },
];

const YourComponent = ({portfolioColor}) => {
    return (
        <Box py={10} textAlign="center">
            <Heading as="h2" size="2xl" _hover={{ color: portfolioColor, transition: "0.5s" }}>
            Services
            </Heading>
            <ServicesGrid services={services} />
        </Box>
    );
};

export default YourComponent;
