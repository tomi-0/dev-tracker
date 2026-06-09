const ProjectForm = ( {initialProjects} ) => {

  const addProject = (formData) => {
    // add new project 
    const newProject = {
      name: formData.get("project-name"), 
      description: formData.get("description"), 
      stack: formData.get("tech-stack"), 
      status: formData.get("status"), 
      dateAdded: Date()
    }

    // add new item to activity log
    const acitivtyLogItem = {
      type: "skill_added",
      message: "Added skill "+formData.get("skill-name"),
      dateAdded: Date()
    }

    console.log(newProject)
  }

  return(
    <form action={addProject}>
      <input type="text" name="project-name" placeholder="e.g. dev-tracker"/>
      <input type="text" name="description" placeholder="What are you building?"/>
      {/* change leater to checbox of saved skills*/}
      <input type="text" name="tech-stack" placeholder="React, Node, Supabase"/>
      <select name="status">
        {/* change later to fetch options from db?*/} 
        <option value="in_progrress">In progress</option>
        <option value="paused">Paused</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">Save Project</button>
    </form>
  )

}

export default ProjectForm