import axios from "axios"
// change later to hosted URL
const BASE_URL = "http://localhost:3001/api/projects"

const getAll = async () => {
  try {
    const res = await axios.get(BASE_URL)
    return res.data
  } catch (error) {
    console.log("Error fetching all projects: "+error.message)
  }
}

const addProject = async (newProject) => {
  try {
    const res = await axios.post(BASE_URL, newProject)
    return res.data
  } catch (error) {
    console.log("Error adding new project: "+error.message)
  }
}

const updateProject = async (newProject) => {
  try {
    const id = newProject.id
    const res = await axios.put(`${BASE_URL}/${id}`, newProject)
    return res.data
  } catch (error) {
    console.log("Error updating project: "+error.message)
    return "Error updating project"
  }
}

const deleteProject = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${id}`)
    // use .data to access json body
    return res.data.message
  } catch (error) {
    console.log("Error deleting project: "+error.message)
    return "Error deleting project"
  }
}

export default {
  getAll, 
  addProject,
  updateProject,
  deleteProject
}