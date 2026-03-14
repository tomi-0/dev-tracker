const timeAgo = (date1, date2) => {
  // difference in milliseconds
  const diffMs = date1 - date2
  const diffDays = Math.floor(diffMs / (1000* 60 * 60 *24))
  const diffHours = Math.floor(diffMs/ (1000 * 60 * 60))
  
  if (diffDays >= 1) return `${diffDays}d ago`
  if (diffHours >= 1) return `${diffHours}h ago`
  return "just now"
  
}

const ActivityLog = ({activity}) => {
  const today = new Date()
  today.getDate()

  return(
    <div>
      <p>{activity.message}</p>
      <p>{timeAgo(new Date(), new Date(activity.date))}</p>
    </div>
  )
}

export default ActivityLog