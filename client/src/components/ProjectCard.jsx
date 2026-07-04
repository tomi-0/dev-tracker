import { useState } from "react"
import UpdateProjectForm from "./UpdateProjectForm"
import '../styles/ProjectCard.css'

const ProjectCard= ({project, showActions, deleteProject, updateProject, editingId, setEditingId}) => {
  const [cancel, setCancel] = useState(true)

  const status_text = (status) => {
    if (status.includes("paused")) {
      return "Paused"
    }
    else if (status.includes("completed")) {
      return "Completed"
    }
    else {
      return "In progress"
    }
  }

  const get_colour = (status) => {
    if (status.includes("paused")) {
      return "project-status paused"
    }
    else if (status.includes("completed")) {
      return "project-status completed"
    }
    else {
      return "project-status in-progress"
    }
  }

  return(
    <div className="project-card">
      <div className="project-info">
        <p>{project.name}</p>
        <p className="project-stack">{project.stack}</p>
      </div>
      <p className={get_colour(project.status)}>{status_text(project.status)}</p>
      {!showActions? <></> :
        <>
        <button onClick={() => {
          setEditingId(project.id) 
          setCancel(false)
        }}>
          Edit
        </button>
          {editingId === project.id && !cancel? <UpdateProjectForm  project={project} updateProject={updateProject} cancel={cancel} setCancel={setCancel}/> : <></>}
        <button onClick={() => deleteProject(project.id)}>Delete</button>
        </>
      }
      
    </div>
  )
}

export default ProjectCard