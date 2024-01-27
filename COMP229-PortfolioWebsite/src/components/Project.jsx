import React from 'react';
import { Container, VStack, Heading } from '@chakra-ui/react';
import ProjectItem from './ProjectItem'; 
import visimulate from '.././assets/visimulate.png';
import jettbot from '.././assets/jettbot.png'
import deeplearning from '.././assets/deeplearning.png'
import snake from '.././assets/snake.png'
import { color } from 'framer-motion';

const Projects = ({portfolioColor}) => {
    const projects = [
    {
        title: "ViSimulate",
        description: "Ever wondered how the world looks through someone else's eyes? ViSimulate makes that possible. It's a React web app where you can upload any picture and apply filters that mimic various visual impairments. It's a powerful way to get a glimpse into how people with different visual challenges see the world. All in real-time, all to help us understand and empathize better.",
        imageUrl: visimulate,
        externalLink: "https://visimulate.netlify.app/",
        reverse: false,
        badges: [
            { text: "React", colorScheme: "blue" },
            { text: "Node.js", colorScheme: "green" },
            { text: "JavaScript", colorScheme: "yellow"},
            { text: "Image Processing Algorithms", colorScheme: "red"},
        ],
        textColor: portfolioColor,
    },
    {
        title: "JettBot",
        description: "Meet JettBot! Inspired by the valorant agent, this bot offers an economy system where users can save up virtual cash to try their luck with games like roulette, blackjack, and slots. JettBot also offers random agent picks and a gacha system for Valorant skins. JettBot also functions as a musicbot! I built this single-guild bot for fun and is now used by over 150 people in my discord server.",
        imageUrl: jettbot,
        externalLink: "https://github.com/mbaula/JettBot",
        reverse: true,
        badges: [
            { text: "Discord.js", colorScheme: "gray" },
            { text: "Sequelize", colorScheme: "yellow" },
            { text: "Distube", colorScheme: "red"},
        ],
        textColor: portfolioColor,
    },
    {
        title: "DeepLearning.AI Projects",
        description: "A collection of projects/labs I coded while completing the deeplearning.ai specialization. This ranges from implementing YOLO algorithm to detect cars, utilizing LSTM networks to generate 30-second jazz music, or generating art with neural style transfer",
        imageUrl: deeplearning,
        externalLink: "https://coursera.org/share/6fd7be31f291ded6a57397d4bea05bf8",
        reverse: false,
        badges: [
            { text: "RNNs", colorScheme: "pink" },
            { text: "Tensorflow", colorScheme: "cyan" },
            { text: "CNNs", colorScheme: "green"},
            { text: "Artificial Neural Network", colorScheme: "gray"},
            { text: "Keras", colorScheme: "yellow"},
        ],
        textColor: portfolioColor,
    },
    {
        title: "Embedded Snake Game",
        description: "A snake game I programmed on an LPC1768, a Cortex®-M3 microcontroller for embedded applications. With this project I learned important concepts involving multithreading and embedded programming. This was my final project for MTE 241 where I also learned about process management, interprocess communication and synchronization, memory management, resource management, interrupt handling, concurrent programming, and file systems",
        imageUrl: snake,
        externalLink: "https://www.youtube.com/watch?v=46SF3pjkcG4&ab_channel=Marky",
        reverse: true,
        badges: [
            { text: "C", colorScheme: "green" },
            { text: "Multithreading", colorScheme: "red" },
            { text: "Embedded Programming", colorScheme: "green"},
        ],
        textColor: portfolioColor,
    },
    ];
  
    return (
      <Container maxW="5xl" centerContent>
        <VStack spacing={10} py={{ base: 10, md: 20 }}>
          <Heading as="h2" size="2xl" textAlign="center" _hover={{color: portfolioColor, transition: "0.5s"}}>Projects</Heading>
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              reverse={project.reverse}
              externalLink={project.externalLink}
              badges={project.badges}
            />
          ))}
        </VStack>
      </Container>
    );
  };
  
export default Projects;  
