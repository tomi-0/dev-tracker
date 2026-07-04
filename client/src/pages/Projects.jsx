import { useEffect, useState } from "react"
import { initialProjects, initialSkills } from "../data/testData"
import ProjectCard from "../components/ProjectCard"
import ProjectForm from "../components/ProjectForm"
import "../styles/Projects.css"

const Projects = ({projects, deleteProject, updateProject, addProject, addActivity}) => {
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)

  const changeFormView = () => {
      setShowForm(!showForm)
  }

  return(
    <section>
      <div className="project-header">
        <div className="project-left">
          <h1>Projects</h1>
          <p className="project-text">All your logged coding projects</p>
        </div>

        <button onClick={changeFormView}>
          {showForm? "Cancel" : "+ New project" }
        </button>
      </div>

      {showForm? <ProjectForm addProject={addProject} addActivity={addActivity}/> : <></>}
      
      <div className="projects-container">
        {projects.map(project => 
          <ProjectCard key={project.id} project={project} showActions={true} deleteProject={deleteProject} updateProject={updateProject} editingId={editingId} setEditingId={setEditingId} addActivity={addActivity}/>
        )}
      </div>

    </section>
  )
}

export default Projects