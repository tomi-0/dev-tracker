import "../styles/ProjectCard.css"

const ProjectForm = ( {addProject, addActivity} ) => {

  const addNewProject = (formData) => {
    const today = new Date()

    // add new project 
    const newProject = {
      project_name: formData.get("project-name"), 
      project_description: formData.get("description"), 
      project_stack: formData.get("tech-stack"), 
      project_status: formData.get("status"), 
      project_date_added: today.toISOString()
    }

    // add new item to activity log
    const acitivtyLogItem = {
      activity_type: "project_added",
      activity_message: "Added project "+formData.get("project-name"),
      activity_date: today.toISOString()
    }

    addProject(newProject)
    addActivity(acitivtyLogItem)
  }

  return(
    <form action={addNewProject}>
      <input type="text" name="project-name" placeholder="e.g. dev-tracker"/>
      <input type="text" name="description" placeholder="What are you building?"/>
      {/* change leater to checbox of saved skills*/}
      <input type="text" name="tech-stack" placeholder="React, Node, Supabase"/>
      <select name="status">
        {/* change later to fetch options from db?*/} 
        <option value="IN_PROGRESS">In progress</option>
        <option value="PAUSED">Paused</option>
        <option value="COMPLETED">Completed</option>
      </select>
      <button className="project-add-button" type="submit">Save Project</button>
    </form>
  )

}

export default ProjectForm