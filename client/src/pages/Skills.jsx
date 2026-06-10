import { useState } from 'react'
import { initialSkills } from '../data/testData'
import SkillCard from "../components/SkillCard"
import SkillForm from '../components/SkillForm'

const Skills = ({skills, addSkill, updateSkill, deleteSkill, addActivity}) => {

  const [viewForm, setViewForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  
  const changeView = () => {
    setViewForm(!viewForm)
  }

  return(
    <section>
      <h1>Skills</h1>
      <p>Technologies you're learning</p>

      <button onClick={changeView}>{
        viewForm? "Cancel" : "+ Add new skill"
        }</button>
      {viewForm? <SkillForm addSkill={addSkill} addActivity={addActivity}/> : <></>}

      {skills.map(skill => (
        <SkillCard key={skill.id} skill={skill} updateSkill={updateSkill} deleteSkill={deleteSkill} addActivity={addActivity} editingId={editingId} setEditingId={setEditingId}/>
      ))}
    </section>
  )
}

export default Skills