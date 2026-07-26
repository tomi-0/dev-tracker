import express from "express"
import { getAllSkills, addSkill, updateSkill, deleteSkill } from "../controllers/skills_controller.js"

const skillsRouter = express.Router()

skillsRouter.get("/", getAllSkills)
skillsRouter.post("/", addSkill)
skillsRouter.put("/:id", updateSkill)
skillsRouter.delete("/:id", deleteSkill)

export default skillsRouter