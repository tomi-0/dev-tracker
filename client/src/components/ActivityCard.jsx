import "../styles/ActivityCard.css"

const ActivityCard = ({data}) => {

  return(
    <div className="activity-card">
      <h2>{data.name}</h2>
      <p>{data.number}</p>
    </div>
  )
}

export default ActivityCard