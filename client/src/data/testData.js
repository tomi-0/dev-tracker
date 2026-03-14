export const initialProjects = [
  { id: 1, name: "dev-tracker", description: "Full stack app to log projects and skills", stack: "React, Node.js, Supabase", status: "in_progress", dateAdded: "2026-03-12" },
  { id: 2, name: "FSO notes app", description: "Notes app built during Full Stack Open part 3", stack: "React, Express, MongoDB", status: "completed", dateAdded: "2026-02-20" },
  { id: 3, name: "FSO phonebook", description: "Phonebook backend with REST API and MongoDB", stack: "React, Express, MongoDB", status: "paused", dateAdded: "2026-03-01" },
  { id: 4, name: "Countries app", description: "Browse countries using a public REST API", stack: "React, REST API", status: "completed", dateAdded: "2026-02-10" },
  { id: 5, name: "Blog list app", description: "Full stack blog listing app with auth", stack: "React, Node.js, MongoDB", status: "in_progress", dateAdded: "2026-03-08" },
]

export const initialSkills = [
  { id: 1, name: "React", confidence: 4, category: "Frontend", dateAdded: "2026-02-01" },
  { id: 2, name: "Node.js", confidence: 3, category: "Backend", dateAdded: "2026-03-01" },
  { id: 3, name: "Express.js", confidence: 3, category: "Backend", dateAdded: "2026-03-01" },
  { id: 4, name: "JavaScript", confidence: 4, category: "Language", dateAdded: "2026-01-15" },
  { id: 5, name: "MongoDB", confidence: 3, category: "Database", dateAdded: "2026-03-05" },
  { id: 6, name: "Supabase", confidence: 2, category: "Database", dateAdded: "2026-03-12" },
  { id: 7, name: "CSS", confidence: 3, category: "Frontend", dateAdded: "2026-01-20" },
  { id: 8, name: "Git", confidence: 3, category: "Tools", dateAdded: "2026-01-15" },
  { id: 9, name: "REST APIs", confidence: 4, category: "Concepts", dateAdded: "2026-02-15" },
  { id: 10, name: "SQL", confidence: 2, category: "Database", dateAdded: "2026-03-10" },
]

export const initialActivityLog = [
  { id: 1, type: "project_added", message: "Added project dev-tracker", date: "2026-03-12" },
  { id: 2, type: "skill_added", message: "Added skill Supabase", date: "2026-03-12" },
  { id: 3, type: "skill_added", message: "Added skill SQL", date: "2026-03-10" },
  { id: 4, type: "project_added", message: "Added project blog list app", date: "2026-03-08" },
  { id: 5, type: "project_updated", message: "Marked FSO phonebook as paused", date: "2026-03-05" },
  { id: 6, type: "skill_added", message: "Added skill MongoDB", date: "2026-03-05" },
  { id: 7, type: "project_added", message: "Added project FSO phonebook", date: "2026-03-01" },
  { id: 8, type: "skill_added", message: "Added skill Node.js", date: "2026-03-01" },
  { id: 9, type: "project_updated", message: "Marked FSO notes app as completed", date: "2026-02-20" },
  { id: 10, type: "project_added", message: "Added project FSO notes app", date: "2026-02-20" },
]