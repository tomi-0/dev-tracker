import { supabase } from "../server/supabase.js"
import express from "express"
import activityRouter from "./routes/activity_routes.js"
import projectsRouter from "./routes/projects_routes.js"
import skillsRouter from "./routes/skills_routes.js"
import middleware from "./utils/middleware.js"
import cors from "cors"

const app = express()

// Allows app to have json request body
app.use(express.json())

// allows frontend to access backend overcoming same ortigin policy
app.use(cors())

// request logger logs requests
app.use(middleware.requestLogger)

// Routes for different backend requests
app.use("/api/projects", projectsRouter)
app.use("/api/skills", skillsRouter)
app.use("/api/activity", activityRouter)

// other middleware
app.use(middleware.unkownEndpoint)
app.use(middleware.errorHandler)

app.get("/", () => {
  console.log("Server side")
})

// Add any required middleware e.g. logging, auth?

export default app