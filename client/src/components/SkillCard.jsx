import UpdateSkillForm from "./UpdateSkillForm"
import { useState } from "react"

const SkillCard = ({ skill, updateSkill, deleteSkill, addActivity, editingId, setEditingId }) => {
  const confidenceLabel = {
    1:"Beginner",
    2:"Beginner",
    3:"Learning",
    4:"Confident",
    5:"Expert"
  }

  const [cancel, setCancel] = useState(true)

  return(
    <div>
      <h2>{skill.name}</h2>
      <p>Skill bar</p>
      <div>
        <p>{skill.category}</p>
        <p>{confidenceLabel[skill.confidence]}</p>
        <p>{skill.confidence}</p>
        <button onClick={() => {
          setCancel(false)
          setEditingId(skill.id)
        }
        }>Edit</button>
        {editingId === skill.id && !cancel?  <UpdateSkillForm skill={skill} updateSkill={updateSkill} addActivity={addActivity} setCancel={setCancel}/> : <></>}
        <button onClick={() => deleteSkill(skill.id)}>Delete</button>
       
      </div>
    </div>
  )
}

export default SkillCard