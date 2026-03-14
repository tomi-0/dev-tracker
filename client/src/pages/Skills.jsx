import { useState } from 'react'
import { initialSkills } from '../data/testData'
import SkillCard from "../components/SkillCard"

const Skills = ({skills, setSkills, activityLog, setActivityLog}) => {

  return(
    <section>
      <h1>Skills</h1>
      <p>Technologies you're learning</p>

      <button>+ Log skill</button>

      {skills.map(skill => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </section>
  )
}

export default Skills