import { useEffect, useState } from "react"
import { initialProjects, initialSkills } from "../data/testData"
import ProjectCard from "../components/ProjectCard"
import ProjectForm from "../components/ProjectForm"

const Projects = ({projects, setProjects, activityLog, setActivityLog}) => {
  const [showForm, setShowForm] = useState(false)

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
      {showForm? <ProjectForm /> : <></>}

      {projects.map(project => 
        <ProjectCard key={project.id} project={project}/>
      )}

    </section>
  )
}

export default Projects