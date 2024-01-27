import React from 'react';
import { Box, Image, Text, Heading, HStack, Link, Badge, useBreakpointValue, VStack } from '@chakra-ui/react';

/*
Projectitem.jsx
Mark Baula
301369567
Jan 26 2024
*/

const ProjectItem = ({ title, description, imageUrl, externalLink, reverse, badges, textColor }) => {
    const StackComponent = useBreakpointValue({ base: VStack, md: HStack });
    const itemLayout = useBreakpointValue({ base: 'column', md: reverse ? 'row-reverse' : 'row' });

    return (
        <StackComponent spacing={8} align="center" flexDirection={itemLayout} py={5}>
            <Link href={externalLink} isExternal>
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
                <Heading as="h3" size={{ base: 'md', md: 'lg' }} py={2} _hover={{color: '#E94560', transition: "0.5s"}}>{title}</Heading>
                <HStack spacing={2} wrap="wrap">
                    {badges.map((badge) => (
                        <Badge key={badge.text} colorScheme={badge.colorScheme}>
                            {badge.text}
                        </Badge>
                    ))}
                </HStack>
                <Text py={6} fontSize={{ base: 's', md: 'lg' }} width="100%" wordBreak="break-word">
                    {description}
                </Text>
            </Box>

        </StackComponent>
    );
};

export default ProjectItem;
