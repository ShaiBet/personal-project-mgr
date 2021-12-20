import { useState } from 'react';
import Projects from './components/Projects';
import Project from './components/Project';
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Assaf Bar mizva",
      progress: 25,
    },
    {
      id: 2,
      title: "Living room renovation",
      progress: 30,
    },
    {
      id: 3,
      title: "Car replacement",
      progress: 46,
    },
    {
      id: 4,
      title: "Philipines summer vacation",
      progress: 80,
    },
    {
      id: 5,
      title: "Mom's 70 birthday",
      progress: 10,
    },
    {
      id: 6,
      title: "First aid course guide",
      progress: 95,
    }
  ])

  return (
    <Router>
      <CssBaseline />      
      <Route path='/' exact>
        <Projects projects={projects} />
      </Route>
      <Route path='/project/:id'>
        <Project projects={projects} />
      </Route>      
    </Router>

  );
}

export default App;
