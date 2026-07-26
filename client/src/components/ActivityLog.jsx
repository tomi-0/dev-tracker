import "../styles/ActivityLog.css"

const timeAgo = (date1, date2) => {
  // difference in milliseconds
  const diffMs = date2 - date1
  const diffDays = Math.floor(diffMs / (1000* 60 * 60 *24))
  const diffHours = Math.floor(diffMs/ (1000 * 60 * 60))
  
  if (diffDays >= 1) return `${diffDays}d ago`
  if (diffHours >= 1) return `${diffHours}h ago`
  return "just now"
}

const colour = (message) => {
  if (message.includes("skill")) {
    return "activity-dot dot-skill"
  }
  return "activity-dot dot-project"
}

const ActivityLog = ({activity}) => {
  const today = new Date()
  today.getDate()

  return(
    <div className="activity-log-item">
      <div className={colour(activity.activity_message)}></div>
      <h1>{activity.activity_message}</h1>
      <p>{timeAgo(new Date(), new Date(activity.activity_date))}</p>
    </div>
  )
}

export default ActivityLog