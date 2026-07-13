import { supabase } from "../supabase.js"


export const getAllProjects = async (req, res) => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")

  if (error) {
    return res.status(500).json({error: error.message})
  }

  // sends json response of data
  res.status(200).json(data)
}

export const updateProject = async (req, res) => {
  const id = req.params.id

  if (!id) {
    return res.status(400).json({error: "Missing id"})
  }

  const new_project = req.body

  const {
    project_name,
    project_description,
    project_status,
    project_date_added
  } = new_project

  const { error } = await supabase
    .from("projects")
    .update({
      project_name,
      project_description,
      project_status,
      project_date_added
    })
    .eq('id', id)

  if (error) {
    return res.status(500).json({error: error.message})
  }

  // sends json response of data
  res.status(204).json({message:"Successfully updated project"})
}

export const addProject = async (req, res) => {
  const project = req.body

  if (!project) {
    return res.status(400).json({error: "Missing project"})
  }

  const {
    project_name,
    project_description,
    project_status,
    project_date_added
  } = project

  const { error } = await supabase
    .from("projects")
    .insert({
      project_name: project_name,
      project_description: project_description,
      project_status: project_status,
      project_date_added: project_date_added
    })

  if (error) {
    return res.status(500).json({error: error.message})
  }

  // sends json response of data
  res.status(204).json({message:"Successfully added project"})
}

export const deleteProject = async (req, res) => {
  const project_id = parseInt(req.params.id)

  if (!project_id) {
    return res.status(400).json({error: "Missing id"})
  }

  const { error } = await supabase
    .from("projects")
    .delete()
    .eq("id", project_id)

  if (error) {
    res.status(500).json({ error: error.message})
  }

  res.status(204).json({message:"Successfully deleted project"})
}