import { useState } from "react"
import ProjectCard from "../components/ProjectCard"
import ActivityLog from "../components/ActivityLog"
import ActivityCard from "../components/ActivityCard"

const Dashboard = ({skills, projects, activityLog}) => {
  const weekAgo = new Date()
  weekAgo.setDate(weekAgo.getDate() - 7)

  const recentProjects = projects.filter(p => (new Date(p.dateAdded) >= weekAgo))
  const recentActivity = activityLog.filter(a => (new Date(a.date) >= weekAgo))
  const recentSkills = skills.filter(s => (new Date(s.dateAdded) >= weekAgo))
  const inProgress = projects.filter(p => (p.status === "in_progress" || p.status === "paused"))

  const cardObject = [
    {id: 0, name:"PROJECTS", number:recentProjects.length},
    {id: 1, name:"SKILLS TRACKED", number:recentSkills.length},
    {id: 2, name:"COMPLETED", number:recentProjects.filter(p => p.status === "completed").length}
  ]

  return(
    <section>
      <h1>Dashboard</h1>
      <p>Here's where you're at this week</p>

      {cardObject.map(d => (<ActivityCard key={d.id} data={d}/>))}

      <div>
        <p>RECENT ACTIVITY</p>
        {recentActivity.map(activity => (<ActivityLog key={activity.id} activity={activity}/>))}
      </div>
      
      <div>
        <h3>IN PROGRESS</h3>
        {inProgress.map(project => (<ProjectCard key={project.id} project={project}/>))}
      </div>
      
      
    </section>
  )
}

export default Dashboard