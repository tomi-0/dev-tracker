import { useState } from "react"
import ProjectCard from "../components/ProjectCard"
import ActivityLog from "../components/ActivityLog"
import ActivityCard from "../components/ActivityCard"

const Dashboard = ({skills, projects, activityLog}) => {
  const weekAgo = new Date()
  weekAgo.setDate(weekAgo.getDate() - 7)

  const recentProjects = projects.filter(p => (new Date(p.project_date_added) >= weekAgo))
  const recentActivity = activityLog.filter(a => (new Date(a.activity_date) >= weekAgo))
  const recentSkills = skills.filter(s => (new Date(s.skills_date_added) >= weekAgo))
  const inProgress = projects.filter(p => (p.project_status === "in_progress" || p.project_status === "paused"))

  const cardObject = [
    {id: 0, name:"PROJECTS", number:recentProjects.length},
    {id: 1, name:"SKILLS TRACKED", number:recentSkills.length},
    {id: 2, name:"COMPLETED", number:recentProjects.filter(p => p.project_status.toLowerCase() === "completed").length}
  ]

  return(
    <section>
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Here's where you're at this week</p>
      </div>

      <div className="dashboard-activity-cards">
        {cardObject.map(d => (<ActivityCard key={d.id} data={d}/>))}
      </div>

      <div className="dashboard-activity-container">
          <div className="dashboard-activity">
          <p className="headers">RECENT ACTIVITY</p>
          {recentActivity.map(activity => (<ActivityLog key={activity.id} activity={activity}/>))}
        </div>
        
        <div className="dashboard-progress">
          <p className="headers">IN PROGRESS / PAUSED</p>
          {inProgress.map(project => (<ProjectCard key={project.id} project={project} showActions={false}/>))}
        </div>
      </div>
      
      
    </section>
  )
}

export default Dashboard