import express from "express"
import { getAllActivity, addActivity } from "../controllers/activity_controller.js"

const activityRouter = express.Router()

activityRouter.get("/", getAllActivity)
activityRouter.post("/", addActivity)

export default activityRouter

