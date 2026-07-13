import { supabase } from "../server/supabase.js"
import express from "express"
import activityRouter from "./routes/activity_routes.js"
import projectsRouter from "./routes/projects_routes.js"
import skillsRouter from "./routes/skills_routes.js"

const app = express()

// Allows app to have json request body
app.use(express.json())

// Routes for different backend requests
app.use("/api/projects", projectsRouter)
app.use("/api/skills", skillsRouter)
app.use("/api/activity", activityRouter)

app.get("/", () => {
  console.log("Server side")
})

// Add any required middleware e.g. logging, auth?

export default app