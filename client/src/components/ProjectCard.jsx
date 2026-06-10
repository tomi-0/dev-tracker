import { useState } from "react"
import UpdateProjectForm from "./UpdateProjectForm"

const ProjectCard= ({project, showActions, deleteProject, updateProject, editingId, setEditingId}) => {
  const [cancel, setCancel] = useState(true)

  return(
    <div className="project-card">
      <div>
        <h2>{project.name}</h2>
        <p>{project.stack}</p>
      </div>
      <p>{project.status}</p>
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