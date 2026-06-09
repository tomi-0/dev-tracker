import { useState } from 'react'
import { initialSkills } from '../data/testData'
import SkillCard from "../components/SkillCard"
import SkillForm from '../components/SkillForm'

const Skills = ({skills, setSkills, activityLog, setActivityLog}) => {

  const [viewForm, setViewForm] = useState(false)
  
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
      {viewForm? <SkillForm/> : <></>}

      {skills.map(skill => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </section>
  )
}

export default Skills