import React from 'react';
import { Box, Image, Text, Heading, HStack } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

const ProjectItem = ({ title, description, imageUrl, externalLink, reverse }) => {
    const itemLayout = reverse ? "row-reverse" : "row";

    return (
        <HStack spacing={8} align="center" flexDirection={itemLayout} py={5}>
        <Link href={externalLink} isExternal> 
        <Box
            width="350px"
            height="350px"
            backgroundImage={`url(${imageUrl})`}
            backgroundSize="cover"
            backgroundPosition="center"
            transition="0.3s"
            _hover={{ transform: "scale(1.05)" }}
        />
        </Link>
        <Box>
            <Heading as="h3" size="lg">{title}</Heading>
            <Text fontSize="md">{description}</Text>
        </Box>
        </HStack>
    );
};

export default ProjectItem;
