import express from "express"
import { getAllActivity } from "../controllers/activity_controller.js"

const activityRouter = express.Router()

activityRouter.get("/", getAllActivity)

export default activityRouter

