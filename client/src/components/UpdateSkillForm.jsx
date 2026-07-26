import { useState } from "react"

import "../styles/UpdateProjectForm.css"

const UpdateSkillForm = ({skill, updateSkill, addActivity, setCancel}) => {

  const [skill_name, setName] = useState(skill.skill_name)
  const [skill_confidence, setConfidence] = useState(skill.skill_confidence)
  const [skill_category, setCategory] = useState(skill.skill_category)

  const editSkill = () => {
    const today = new Date()
    setConfidence(parseInt(skill_confidence))
    updateSkill({...skill, skill_name, skill_confidence, skill_category})

    const acitivtyLogItem = {
      activity_type: "skill_updated",
      activity_message: "Updated skill "+skill_name,
      activity_date: today.toISOString()
    }

    addActivity(acitivtyLogItem)
    setCancel(true)
  }

  return (
    <form action={editSkill} className="skill-form">
      <input value={skill_name} onChange={(e) => setName(e.target.value)}/>
       <select value={skill_confidence} onChange={(e) => setConfidence(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <select value={skill_category} onChange={(e) => setCategory(e.target.value)}>
        <option value="FRONTEND">Frontend</option>
        <option value="BACKEND">Backend</option>
        <option value="LANGUAGE">Language</option>
        <option value="DATABASE">Database</option>
        <option value="TOOOLS">Tools</option>
        <option value="CONCEPTS">Concepts</option>
      </select>
      <div className="form-buttons">
        <button className="form-button" type="submit">Save</button>
        <button className="form-button" onClick={() => setCancel(true)}>Cancel</button>
      </div>
    </form>
  )
}

export default UpdateSkillForm