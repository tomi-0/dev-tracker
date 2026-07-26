import axios from "axios"
// change later to hosted URL
const BASE_URL = "http://localhost:3001/api/activity"

const getAll = async () => {
  try {
    const res = await axios.get(BASE_URL)
    return res.data
  } catch (error) {
    console.log("Error fetching all activity: "+error.message)
  }
}

const addActivity = async (newActivity) => {
  try {
    const res = await axios.post(BASE_URL, newActivity)
    return res.data
  } catch (error) {
    console.log("Error adding new activity: "+error.message)
  }
}

export default {
  getAll, 
  addActivity,
}