import Navbar from './components/Navbar.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import HomePage from './components/HomePage.jsx';
import AboutMe from './components/AboutMe.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const portfolioColor = '#E94560';

  return (
    <ChakraProvider>
      <Router>
      <Navbar portfolioColor={portfolioColor}/>
      <Routes>
        <Route path="/" element={<HomePage portfolioColor={portfolioColor} />} />
        <Route path="/about" element={<AboutMe />} />
        {/* ... other routes */}
      </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
