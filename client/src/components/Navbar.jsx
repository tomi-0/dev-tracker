import { Link } from "react-router-dom"

const Navbar = () => {
  return(
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/skills">Skills</Link>
    </nav>
  )
}

export default Navbar