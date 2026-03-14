const ActivityCard = ({data}) => {

  return(
    <div>
      <h2>{data.name}</h2>
      <p>{data.number}</p>
    </div>
  )
}

export default ActivityCard