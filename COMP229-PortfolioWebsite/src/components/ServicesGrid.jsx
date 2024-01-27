import React from 'react';
import { SimpleGrid, Box, Image, Text, Heading, Center } from '@chakra-ui/react';

const ServicesGrid = ({ services }) => {
  return (
    <Center marginY={20} p={4}>
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