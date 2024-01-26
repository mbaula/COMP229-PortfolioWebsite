import React from 'react';
import { Container, VStack, Heading } from '@chakra-ui/react';
import ProjectItem from './ProjectItem'; 
import project1 from '.././assets/meandeli.jpeg';

const Projects = () => {
    const projects = [
      {
        title: "Project Alpha",
        description: "This is a project where I developed an innovative solution to streamline workflow. It involved using cutting-edge technologies and collaborating with a cross-functional team.",
        imageUrl: project1, 
        reverse: false,
        externalLink: "https://github.com/mbaula",
      },
    ];
  
    return (
      <Container maxW="5xl" centerContent>
        <VStack spacing={10} py={{ base: 10, md: 20 }}>
          <Heading as="h2" size="2xl" textAlign="center">My Projects</Heading>
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              reverse={project.reverse}
              externalLink={project.externalLink}
            />
          ))}
        </VStack>
      </Container>
    );
  };
  
export default Projects;  
