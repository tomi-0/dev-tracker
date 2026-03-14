const ProjectCard= ({project}) => {
  return(
    <div className="project-card">
      <div>
        <h2>{project.name}</h2>
        <p>{project.stack}</p>
      </div>
      <p>{project.status}</p>
    </div>
  )
}

export default ProjectCard