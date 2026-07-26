import UpdateSkillForm from "./UpdateSkillForm"
import { useState } from "react"

import { SquarePen, Trash } from 'lucide-react'

import "../styles/SkillsCard.css"

const SkillCard = ({ skill, updateSkill, deleteSkill, addActivity, editingId, setEditingId }) => {
  const confidenceLabelStyle = {
    1:"skill-bar low",
    2:"skill-bar mid",
    3:"skill-bar mid-high",
    4:"skill-bar high",
    5:"skill-bar max"
  }

  const [cancel, setCancel] = useState(true)

  return(
    <>
    <div className="skill-card">
      <div className="skill-info">
        <h2 className="skill-title">{skill.skill_name}</h2>
        <p className="skill-category">{skill.skill_category}</p>
      </div>
        <div className="empty-skill-bar">
          <div className={confidenceLabelStyle[skill.skill_confidence]}></div>
        </div>
      <p className="confidence-rating">{skill.skill_confidence+"/5"}</p>
      <SquarePen className="edit-button" onClick={() => {
        setCancel(false)
        setEditingId(skill.id)
      }
      }/>
      <Trash className="edit-button" onClick={() => deleteSkill(skill.id)}/>
      <br></br>
    </div>
    <div className="update-skill-form"> 
       {editingId === skill.id && !cancel?  <UpdateSkillForm skill={skill} updateSkill={updateSkill} addActivity={addActivity} setCancel={setCancel}/> : <></>}
    </div>
    </>
  )
}

export default SkillCard