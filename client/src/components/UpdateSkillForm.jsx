import { useState } from "react"

import "../styles/UpdateProjectForm.css"

const UpdateSkillForm = ({skill, updateSkill, addActivity, setCancel}) => {

  const [name, setName] = useState(skill.name)
  const [confidence, setConfidence] = useState(skill.confidence)
  const [category, setCategory] = useState(skill.category)

  const editSkill = () => {
    updateSkill({...skill, name, confidence, category})

    const acitivtyLogItem = {
      type: "skill_updated",
      message: "Updated skill "+name,
      date: Date()
    }

    addActivity(acitivtyLogItem)
    //console.log(name)
    setCancel(true)
  }

  return (
    <form action={editSkill} className="skill-form">
      <input value={name} onChange={(e) => setName(e.target.value)}/>
       <select value={confidence} onChange={(e) => setConfidence(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Language">Language</option>
        <option value="Database">Database</option>
        <option value="Tools">Tools</option>
        <option value="Concepts">Concepts</option>
      </select>
      <div className="form-buttons">
        <button className="form-button" type="submit">Save</button>
        <button className="form-button" onClick={() => setCancel(true)}>Cancel</button>
      </div>
    </form>
  )
}

export default UpdateSkillForm