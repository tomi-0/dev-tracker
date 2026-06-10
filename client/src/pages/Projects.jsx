import { useEffect, useState } from "react"
import { initialProjects, initialSkills } from "../data/testData"
import ProjectCard from "../components/ProjectCard"
import ProjectForm from "../components/ProjectForm"

const Projects = ({projects, deleteProject, updateProject, addProject, addActivity}) => {
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState(null)

  const changeFormView = () => {
      setShowForm(!showForm)
  }

  return(
    <section>
      <h1>Projects</h1>
      <p>All your logged coding projects</p>

      <button onClick={changeFormView}>
        {showForm? "Cancel" : "+ New project" }
      </button>
      {showForm? <ProjectForm addProject={addProject} addActivity={addActivity}/> : <></>}

      {projects.map(project => 
        <ProjectCard key={project.id} project={project} showActions={true} deleteProject={deleteProject} updateProject={updateProject} editingId={editingId} setEditingId={setEditingId} addActivity={addActivity}/>
      )}

    </section>
  )
}

export default Projects