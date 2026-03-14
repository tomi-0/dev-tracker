import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

import './App.css'

const App = () => {
  return (
    // Router watches the URL in the browser's address bar. When it changes, instead of making a server request, 
    // it just re-renders the matching component. The server is never contacted
    <Router>
      <Navbar />
      {/*container for all your route definitions, only renders the first route that matches.*/} 
      <Routes>
        {/*Route — defines a single path and what component to render for it*/} 
        <Route path="/" element={<Dashboard />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/skills" element={<Skills />}/>
      </Routes>
    </Router>
  )
}

export default App
