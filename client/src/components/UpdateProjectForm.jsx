import { useState } from "react"
import "../styles/UpdateProjectForm.css"

const UpdateProjectForm = ({project, updateProject, cancel, setCancel, addActivity}) => {

  const [name, setName] = useState(project.name)
  const [description, setDescription] = useState(project.description)
  const [stack, setStack] = useState(project.stack)
  const [status, setStatus] = useState(project.status)

  const editProject = (formData) => {
    updateProject({...project,name, description, stack, status})

    const acitivtyLogItem = {
      type: "project_updated",
      message: "Updated project "+name,
      date: Date()
    }
    
    setCancel(!cancel)
    addActivity(acitivtyLogItem)
    console.log(name)
  }

  return (
    <form action={editProject}>
      {/*if you give an input a value prop, you're telling React 
      "I'm in charge of this value" — so React expects you to also handle changes via onChange*/}
      <input className="project-form-name" value={name} onChange={(e) => setName(e.target.value)}/>
      <input value={stack} onChange={(e) => setStack(e.target.value)}/>
      <input className="full" value={description} onChange={(e) => setDescription(e.target.value)}/>
      {/* change later to checbox of saved skills?*/}
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        {/* change later to fetch options from db?*/} 
        <option value="in_progrress">In progress</option>
        <option value="paused">Paused</option>
        <option value="completed">Completed</option>
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