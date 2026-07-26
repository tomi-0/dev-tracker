import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { initialProjects, initialSkills, initialActivityLog } from './data/testData'

import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

import projectService from './services/projectService'
import activityService from './services/activityService'
import skillService from './services/skillService'

import './App.css'

const App = () => {
  // if both Dashboard and Projects need access to the same projects data,
  // pass it down as props, otherwise they each have their own separate copy 
  // and adding a project on the Projects page wouldn't show up on the Dashboard

  const [skills, setSkills] = useState([])
  const [projects, setProjects] = useState([])
  const [activityLog, setActivityLog] = useState([])

  //  wrap our async function in useCallback to map it with dependency array.
  //  if not wrapped the function will re-render on every update which will result in triggering the useEffect hook again
  const fetchData = async () => {
    const fetchProjects = await projectService.getAll()
    const fetchActivity = await activityService.getAll()
    const fetchSkills = await skillService.getAll()
    setProjects(fetchProjects)
    setActivityLog(fetchActivity)
    setSkills(fetchSkills)
    console.log("Hi")
  }

  useEffect(() => {
    fetchData()
  } , [])


  // Project methods
  const deleteProject = async (id) => {
    const res = await projectService.deleteProject(id)
    console.log(res)
    setProjects(projects.filter(p => p.id !== id))
  }

  const updateProject = async (newProject) => {
    const res = await projectService.updateProject(newProject)
    console.log(res.message)
    const project = res.data
    setProjects(projects.map(p => p.id === project.id? project : p))
  }

  const addProject = async (newProject) => {
    // spread operator (...) creates a new array by copying all elements of arr and appending the object obj at the end.
    const res = await projectService.addProject(newProject)
    console.log(res.message)
    setProjects([...projects, res.data])
  }


  // Skill methods
  const deleteSkill = async (id) => {
    const res = await skillService.deleteSkill(id)
    console.log(res)
    setSkills(skills.filter(s => s.id !== id))
  }

  const updateSkill = async (newSkill) => {
    const res = await skillService.updateSkill(newSkill)
    console.log(res.message)
    const skill = res.data
    setSkills(skills.map(s => s.id === skill.id? skill : s))
  }

  const addSkill = async (newSkill) => {
    const res = await skillService.addSkill(newSkill)
    console.log(res)
    setSkills([...skills, res.data])
  }


  // Activity methods
  const addActivity = async (newActivity) => {
    const res = await activityService.addActivity(newActivity)
    console.log(res.message)
    setActivityLog([...activityLog, res.data])
  }

  return (
    // Router watches the URL in the browser's address bar. When it changes, instead of making a server request, 
    // it just re-renders the matching component. The server is never contacted
    <BrowserRouter>
      <Navbar />
      {/*container for all your route definitions, only renders the first route that matches.*/} 
      <Routes>
        {/*Route — defines a single path and what component to render for it*/} 
        <Route path="/" element={<Dashboard skills={skills} projects={projects} activityLog={activityLog}/>}/>
        <Route path="/projects" element={<Projects projects={projects} deleteProject={deleteProject} updateProject={updateProject} addProject={addProject} addActivity={addActivity}/>}/>
        <Route path="/skills" element={<Skills skills={skills} addSkill={addSkill} updateSkill={updateSkill} deleteSkill={deleteSkill} addActivity={addActivity}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
