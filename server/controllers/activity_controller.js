import { supabase } from "../supabase.js"

export const getAllActivity = async (req, res) => {
  const { data, error } = await supabase
    .from("activity")
    .select("*")

  if (error) {
    return res.status(500).json({error: error.message})
  }

  // sends json response of data
  res.status(200).json(data)
}

export const addActivity = async (req, res) => {
  const activity = req.body

  if (!activity) {
    return res.status(400).json({error: "Missing activity"})
  }

  const {
    activity_type,
    activity_message,
    activity_date
  } = activity

  const { data, error } = await supabase
    .from("activity")
    .insert({
      activity_type: activity_type,
      activity_message: activity_message,
      activity_date: activity_date,
    })
    .select() //  without this, `data` is null/empty
    .single() // returns the object directly instead of an array

  if (error) {
    return res.status(500).json({error: error.message})
  }

  // sends json response of data
  res.status(201).json({data, message:"Successfully added activity"})
}