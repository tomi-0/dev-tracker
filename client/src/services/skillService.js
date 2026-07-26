import axios from "axios"
// change later to hosted URL
const BASE_URL = "http://localhost:3001/api/skills"

const getAll = async () => {
  try {
    const res = await axios.get(BASE_URL)
    return res.data
  } catch (error) {
    console.log("Error fetching all skills: "+error.message)
  }
}

const addSkill = async (newSkill) => {
  try {
    const res = await axios.post(BASE_URL, newSkill)
    return res.data
  } catch (error) {
    console.log("Error adding new skill: "+error.message)
  }
}

const updateSkill = async (newSkill) => {
  try {
    const id = newSkill.id
    const res = await axios.put(`${BASE_URL}/${id}`, newSkill)
    return res.data
  } catch (error) {
    console.log("Error updating skill: "+error.message)
    return "Error updating skill"
  }
}

const deleteSkill = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${id}`)
    // use .data to access json body
    return res.data.message
  } catch (error) {
    console.log("Error deleting skill: "+error.message)
    return "Error deleting skill"
  }
}

export default {
  getAll, 
  addSkill,
  updateSkill,
  deleteSkill
}