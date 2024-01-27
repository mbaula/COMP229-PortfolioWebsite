import React, { useState } from 'react';
import {
  Box, Heading, FormControl, FormLabel, Input, Textarea, Button, VStack, Link, Icon, useToast, HStack
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

/*
ContactMe.jsx
Mark Baula
301369567
Jan 26 2024
*/

const ContactPage = ({ portfolioColor }) => {
  // useToast hook to show notifications modal
  const toast = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  // function to open url in new tab
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  // function to handle input changes and update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // for now it simply just logs the form data, in the future will need to change this to be functional

    // show toast modal after submission
    toast({
        title: "Message Sent",
        description: "Your message has been successfully sent.",
        status: "success",
        duration: 5000,
        isClosable: true,
    });

    // clear form data
    setFormData({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });
  };

  return (
    <Box p={8}>
      <VStack spacing={4} align="stretch">
        <Heading as="h2" size="xl">Contact Me</Heading>

        <Box as="form" onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Contact Number</FormLabel>
              <Input name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} type="tel" placeholder="Contact Number" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="Email Address" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your Message" />
            </FormControl>

            {/* Submit button which will call the handle submit function once clicked */}
            <Button type="submit" color={portfolioColor}>Send Message</Button>
            <HStack justify="center" spacing={4}>
                <Icon as={FaGithub} w={6} h={6} cursor="pointer" _hover={{ color: portfolioColor }} onClick={() => openInNewTab('https://github.com/mbaula')}/>
                <Icon as={FaLinkedin} w={6} h={6} cursor="pointer" _hover={{ color: portfolioColor }} onClick={() => openInNewTab('https://www.linkedin.com/in/mark-b17/')}/>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default ContactPage;
