import React from 'react';
import { Box, Image, Text, Heading, HStack, Link, Badge, useBreakpointValue, VStack } from '@chakra-ui/react';

/*
Projectitem.jsx
Mark Baula
301369567
Jan 26 2024
*/

const ProjectItem = ({ title, description, imageUrl, externalLink, reverse, badges, textColor }) => {
    // a variable to track whether to use vstack or hstack depending on the screen size
    const StackComponent = useBreakpointValue({ base: VStack, md: HStack });
    // determines the layout of text and image. column if on smaller screen but if not, it'll depend on reverse parameter
    const itemLayout = useBreakpointValue({ base: 'column', md: reverse ? 'row-reverse' : 'row' });

    return (
        <StackComponent spacing={8} align="center" flexDirection={itemLayout} py={5}>
            <Link href={externalLink} isExternal>
            {/* Box to contain the image, responsive as well and has an associated external link */}
            <Box
                maxWidth="100%" 
                width={{ base: '300px', md: '500px' }}
                height={{ base: '300px', md: '350px' }}
                backgroundImage={`url(${imageUrl})`}
                backgroundSize="cover"
                backgroundPosition="center"
                transition="0.3s"
                _hover={{ transform: "scale(1.05)" }}
            />
            </Link>
            <Box maxWidth="100%" w="100%">
                {/* Heading or title of the given project */}
                <Heading as="h3" size={{ base: 'md', md: 'lg' }} py={2} _hover={{color: '#E94560', transition: "0.5s"}}>{title}</Heading>
                <HStack spacing={2} wrap="wrap">
                    {/* Badges for the technology used for that projet, badge is a chakra ui built in component */}
                    {badges.map((badge) => (
                        <Badge key={badge.text} colorScheme={badge.colorScheme}>
                            {badge.text}
                        </Badge>
                    ))}
                </HStack>
                {/* Description text. Using wordBreak to ensure no horizontal scrolling on mobile */}
                <Text py={6} fontSize={{ base: 's', md: 'lg' }} width="100%" wordBreak="break-word">
                    {description}
                </Text>
            </Box>

        </StackComponent>
    );
};

export default ProjectItem;
