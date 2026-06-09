const SkillForm = () => {

  const handleSkillForm = (formData) => {
    const newSkill = {
        name: formData.get("skill-name"),
        confidence: formData.get("skill-confidence"),
        category: formData.get("skill-category"),
        dateAdded: Date()
    }

    const acitivtyLogItem = {
      type: "skill_added",
      message: "Added skill "+formData.get("skill-name"),
      dateAdded: Date()
    }

    console.log(newSkill)
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
        <option value="Frontend">Frontend</option>
        <option value="Frontend">Backend</option>
        <option value="Frontend">Language</option>
        <option value="Frontend">Database</option>
        <option value="Frontend">Tools</option>
        <option value="Frontend">Concepts</option>
      </select>
      <button type="submit">Save Skill</button>
    </form>
  )
}

export default SkillForm