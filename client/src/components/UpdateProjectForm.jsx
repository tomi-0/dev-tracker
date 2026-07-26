import { useState } from "react"
import "../styles/UpdateProjectForm.css"

const UpdateProjectForm = ({project, updateProject, cancel, setCancel, addActivity}) => {

  const [project_name, setName] = useState(project.project_name)
  const [project_description, setDescription] = useState(project.project_description)
  const [project_stack, setStack] = useState(project.project_stack)
  const [project_status, setStatus] = useState(project.project_status)

  const editProject = (formData) => {
    updateProject({...project,project_name, project_description, project_stack, project_status})
    const today = new Date()

    const acitivtyLogItem = {
      activity_type: "project_updated",
      activity_message: "Updated project "+project_name,
      activity_date: today.toISOString()
    }
    
    setCancel(!cancel)
    addActivity(acitivtyLogItem)
  }

  return (
    <form action={editProject}>
      {/*if you give an input a value prop, you're telling React 
      "I'm in charge of this value" — so React expects you to also handle changes via onChange*/}
      <input className="project-form-name" value={project_name} onChange={(e) => setName(e.target.value)}/>
      <input value={project_stack} onChange={(e) => setStack(e.target.value)}/>
      <input className="full" value={project_description} onChange={(e) => setDescription(e.target.value)}/>
      {/* change later to checbox of saved skills?*/}
      <select value={project_status} onChange={(e) => setStatus(e.target.value)}>
        {/* change later to fetch options from db?*/} 
        <option value="IN_PROGRESS">In progress</option>
        <option value="PAUSED">Paused</option>
        <option value="COMPLETED">Completed</option>
      </select>
      <div className="form-buttons">
        <button className="form-button" onClick={ () =>
          setCancel(!cancel)
        } >Cancel</button>
        <button className="form-button" type="submit">Save</button>
      </div>
    </form>
  )
}

export default UpdateProjectForm