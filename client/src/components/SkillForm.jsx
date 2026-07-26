import "../styles/UpdateProjectForm.css"

const SkillForm = ({addSkill, addActivity}) => {

  const handleSkillForm = (formData) => {
    const today = new Date()

    const newSkill = {
        skill_name: formData.get("skill-name"),
        skill_confidence: parseInt(formData.get("skill-confidence")),
        skill_category: formData.get("skill-category"),
        skill_date_added: today.toISOString()
    }

    const acitivtyLogItem = {
      activity_type: "skill_added",
      activity_message: "Added skill "+formData.get("skill-name"),
      activity_date: today.toISOString()
    }

    addSkill(newSkill)
    addActivity(acitivtyLogItem)
  }

  return(
    <form action={handleSkillForm}>
      <input type="text" id="name" name="skill-name" placeholder="e.g. React"/>
       <select id="confidence" name="skill-confidence" placeholder="e.g 3">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <select id="category" name="skill-category" placeholder="e.g. Frontend">
        <option value="FRONTEND">Frontend</option>
        <option value="BACKEND">Backend</option>
        <option value="LANGUAGE">Language</option>
        <option value="DATABASE">Database</option>
        <option value="TOOLS">Tools</option>
        <option value="CONCEPTS">Concepts</option>
      </select>
      <button className="form-button" type="submit">Save Skill</button>
    </form>
  )
}

export default SkillForm