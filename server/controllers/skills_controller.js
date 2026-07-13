import { supabase } from "../supabase.js"

export const getAllSkills = async (req, res) => {
  const { data, error } = await supabase
    .from("skills")
    .select("*")

  if (error) {
    return res.status(500).json({error: error.message})
  }

  // sends json response of data
  res.status(200).json(data)
}