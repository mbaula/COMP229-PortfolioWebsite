import React, { useState } from 'react';
import {
  Box,
  Flex,
  Link,
  Spacer,
  Text,
  IconButton,
  useColorMode,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = ({portfolioColor}) => {
  // State to check whether the drawer is open or not (https://chakra-ui.com/docs/components/drawer)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // Hooks for handling dark/light mode
  const { colorMode, toggleColorMode } = useColorMode();
  // Colors for respective color modes
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('gray.900', 'gray.100');

  // Functions to close and open drawer
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    // Flex container for the navbar layout
    <Flex px={6} py={4} align="center" backgroundColor={bgColor} color={color} >
      {/* Displaying Icon */}
      <Box>
        <Text fontSize="xl" fontWeight="bold">
          Mark Baula
        </Text>
      </Box>
      <Spacer />
      {/* Desktop links, hidden on smaller screens, like mobile */}
      <Box display={{ base: 'none', md: 'block' }}>
        <Link _hover={{color: portfolioColor}} px={5} href="#" fontSize={{ base: "md", md: "lg" }} as={RouterLink} to="/">Home</Link>
        <Link _hover={{color: portfolioColor}} px={5} href="#" fontSize={{ base: "md", md: "lg" }} as={RouterLink} to="/about">About</Link>
        <Link _hover={{color: portfolioColor}} px={5} href="#" fontSize={{ base: "md", md: "lg" }} as={RouterLink} to="/projects">Projects</Link>
        <Link _hover={{color: portfolioColor}} px={5} href="#" fontSize={{ base: "md", md: "lg" }}>Services</Link>
        <Link _hover={{color: portfolioColor}} px={5} href="#" fontSize={{ base: "md", md: "lg" }}>Contact</Link>
      </Box>
      <IconButton
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle color mode"
      />
      {/* Hamburger icon and Drawer for mobile view, shows content for small screen, hide on bigger (desktop) */}
      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          aria-label="Open menu"
          onClick={openDrawer}
        />
        <Drawer isOpen={isDrawerOpen} placement="left" onClose={closeDrawer}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            {/* Container for the navigation links inside the Drawer */}
            <DrawerBody>
              <Flex direction="column" h="100%" justify="center">
                <Link py={2} href="#" onClick={closeDrawer} as={RouterLink} to="/">Home</Link>
                <Link py={2} href="#" onClick={closeDrawer} as={RouterLink} to="/about">About</Link>
                <Link py={2} href="#" onClick={closeDrawer} as={RouterLink} to="/projects">Projects</Link>
                <Link py={2} href="#" onClick={closeDrawer}>Services</Link>
                <Link py={2} href="#" onClick={closeDrawer}>Contact</Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Flex>
  );
};

export default Navbar;
