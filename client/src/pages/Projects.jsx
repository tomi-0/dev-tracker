import { useState } from "react"
import { initialProjects, initialSkills } from "../data/testData"
import ProjectCard from "../components//ProjectCard"

const Projects = ({projects, setProjects, activityLog, setActivityLog}) => {

  return(
    <section>
      <h1>Projects</h1>
      <p>All your logged coding projects</p>

      <button>+ New projext</button>

      {projects.map(project => 
        <ProjectCard key={project.id} project={project}/>
      )}

    </section>
  )
}

export default Projects