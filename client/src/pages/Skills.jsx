import { useState } from 'react'
import { initialSkills } from '../data/testData'
import SkillCard from "../components/SkillCard"
import SkillForm from '../components/SkillForm'

import "../styles/Skills.css"

const Skills = ({skills, addSkill, updateSkill, deleteSkill, addActivity}) => {

  const [viewForm, setViewForm] = useState(false)
  const [editingId, setEditingId] = useState(null)
  
  const changeView = () => {
    setViewForm(!viewForm)
  }

  return(
    <section>
      <div className='skill-header'>
        <div className='skill-left'>
          <h1>Skills</h1>
          <p className='skill-text'>Technologies you're learning</p>
        </div>

        <button className="skill-add-button" onClick={changeView}>{
          viewForm? "Cancel" : "+ New skill"
        }</button>
      </div>
      
      {viewForm? <SkillForm addSkill={addSkill} addActivity={addActivity}/> : <></>}
      <div className='skill-container'>
        {skills.map(skill => (
          <SkillCard key={skill.id} skill={skill} updateSkill={updateSkill} deleteSkill={deleteSkill} addActivity={addActivity} editingId={editingId} setEditingId={setEditingId}/>
        ))}
      </div>
    </section>
  )
}

export default Skills