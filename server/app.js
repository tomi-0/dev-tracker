import { supabase } from "../server/supabase.js"
import express from "express"

const app = express()

// Allows app to have json request body
app.use(express.json())

// Routes for different backend requests


export default app