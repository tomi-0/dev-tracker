import { useState } from "react"
import UpdateProjectForm from "./UpdateProjectForm"
import '../styles/ProjectCard.css'
import { SquarePen, Trash } from 'lucide-react';

const ProjectCard= ({project, showActions, deleteProject, updateProject, editingId, setEditingId, addActivity}) => {
  const [cancel, setCancel] = useState(true)

  const status_text = (status) => {
    if (status.includes("PAUSED")) {
      return "Paused"
    }
    else if (status.includes("COMPLETED")) {
      return "Completed"
    }
    else {
      return "In progress"
    }
  }

  const get_colour = (status) => {
    if (status.includes("PAUSED")) {
      return "project-status paused"
    }
    else if (status.includes("COMPLETED")) {
      return "project-status completed"
    }
    else {
      return "project-status in-progress"
    }
  }

  return(
    <div className="project-card">
      <div className="project-card-left">
        <div className="project-info project-name">
          <p>{project.project_name}</p>
          <p className="project-stack">{project.project_stack}</p>
        </div>
        <p className={get_colour(project.project_status)}>{status_text(project.project_status)}</p>
        {!showActions? <></> :
          <div className="buttons">
          <SquarePen className="edit-button" size={30} color="white" onClick={() => {
            setEditingId(project.id) 
            setCancel(false)
          }}/>
          {/* add activity for deleting project*/}
          <Trash className="edit-button" size={30} color="white" onClick={() => deleteProject(project.id)}/>
          </div>
        }
      </div>
      <div className="editing-form">
        {editingId === project.id && !cancel? <UpdateProjectForm  project={project} updateProject={updateProject} cancel={cancel} setCancel={setCancel} addActivity={addActivity}/> : <></>}
      </div>
    </div>
  )
}

export default ProjectCard