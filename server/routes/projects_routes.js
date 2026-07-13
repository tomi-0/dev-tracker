import express from "express"
import { getAllProjects, addProject, updateProject, deleteProject } from "../controllers/projects_controller.js"

const projectsRouter = express.Router()

projectsRouter.get("/", getAllProjects)
projectsRouter.post("/", addProject)
projectsRouter.put("/:id", updateProject)
projectsRouter.delete("/:id", deleteProject)

export default projectsRouter