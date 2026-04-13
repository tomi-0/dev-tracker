const ProjectForm = () => {

  const addProject = (formData) => {
    
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