import React from 'react';
import { SimpleGrid, Box, Image, Text, Heading, Center } from '@chakra-ui/react';

/*
ServicesGrid.jsx
Mark Baula
301369567
Jan 26 2024
*/

const ServicesGrid = ({ services }) => {
  return (
    <Center marginY={20} p={4}>
      {/* A grid system to store the services depending on screen size */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={10}
        width="100%"
        mx="auto"
      >
        {services.map((service, index) => (
          <Box key={index} textAlign="center">
            <Image src={service.imageUrl} alt={service.title} width={{ base: '300px', md: '500px' }} height={{ base: '300px', md: '350px' }} mx="auto" />
            <Heading as="h3" size="md" mt={4}>{service.title}</Heading>
            <Text mt={2}>{service.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Center>
  );
};

export default ServicesGrid;
