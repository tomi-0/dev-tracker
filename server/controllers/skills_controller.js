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

export const updateSkill = async (req, res) => {
  const id = req.params.id

  if (!id) {
    return res.status(400).json({error: "Missing id"})
  }

  const new_skill = req.body

  const {
    skill_name,
    skill_confidence,
    skill_category,
    skill_date_added
  } = new_skill

  const { data, error } = await supabase
    .from("skills")
    .update({
      skill_name,
      skill_confidence,
      skill_category,
      skill_date_added
    })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    return res.status(500).json({error: error.message})
  }

  res.status(201).json({data, message:"Successfully updated project"})
}

export const addSkill = async (req, res) => {
  const skill = req.body

  if (!skill) {
    return res.status(400).json({error: "Missing skill"})
  }

  const {
    skill_name,
    skill_confidence,
    skill_category,
    skill_date_added
  } = skill

  const { data, error } = await supabase
    .from("skills")
    .insert({
      skill_name: skill_name,
      skill_confidence: skill_confidence,
      skill_category: skill_category,
      skill_date_added: skill_date_added
    })
    .select() //  without this, `data` is null/empty
    .single() // returns the object directly instead of an array

  if (error) {
    return res.status(500).json({error: error.message})
  }

  // sends json response of data
  res.status(201).json({message:"Successfully added skill", data: data})
}

export const deleteSkill = async (req, res) => {
  const skill_id = parseInt(req.params.id)

  if (!skill) {
    return res.status(400).json({error: "Missing id"})
  }

  const { error } = await supabase
    .from("skills")
    .delete()
    .eq("id", skill)

  if (error) {
    return res.status(500).json({ error: error.message})
  }

  res.status(200).json({message:"Successfully deleted skill"})
}