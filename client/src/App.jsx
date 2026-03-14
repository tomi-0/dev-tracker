import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import { initialProjects, initialSkills, initialActivityLog } from './data/testData'

import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

import './App.css'

const App = () => {
  // if both Dashboard and Projects need access to the same projects data,
  // pass it down as props, otherwise they each have their own separate copy 
  // and adding a project on the Projects page wouldn't show up on the Dashboard
  const [skills, setSkills] = useState(initialSkills)
  const [projects, setProjects] = useState(initialProjects)
  const [activityLog, setActivityLog] = useState(initialActivityLog)

  return (
    // Router watches the URL in the browser's address bar. When it changes, instead of making a server request, 
    // it just re-renders the matching component. The server is never contacted
    <Router>
      <Navbar />
      {/*container for all your route definitions, only renders the first route that matches.*/} 
      <Routes>
        {/*Route — defines a single path and what component to render for it*/} 
        <Route path="/" element={<Dashboard skills={skills} projects={projects} activityLog={activityLog}/>}/>
        <Route path="/projects" element={<Projects projects={projects} setProjects={setProjects} activityLog={activityLog} setActivityLog={setActivityLog}/>}/>
        <Route path="/skills" element={<Skills skills={skills} setSkills={setSkills} activityLog={activityLog} setActivityLog={setActivityLog}/>}/>
      </Routes>
    </Router>
  )
}

export default App
