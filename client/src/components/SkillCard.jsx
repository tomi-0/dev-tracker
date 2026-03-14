const SkillCard = ({ skill }) => {
  const confidenceLabel = {
    1:"Beginner",
    2:"Beginner",
    3:"Learning",
    4:"Confident",
    5:"Expert"
  }

  return(
    <div>
      <h2>{skill.name}</h2>
      <p>Skill bar</p>
      <div>
        <p>{confidenceLabel[skill.confidence]}</p>
        <p>{skill.confidence}</p>
      </div>
    </div>
  )
}

export default SkillCard