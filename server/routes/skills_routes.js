import express from "express"
import { getAllSkills } from "../controllers/skills_controller.js"

const skillsRouter = express.Router()

skillsRouter.get("/", getAllSkills)

export default skillsRouter