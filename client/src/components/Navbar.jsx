import { Link } from "react-router-dom"
import "../styles/Navbar.css"

const Navbar = () => {
  return(
    <nav>
      <Link to="/" className="nav-element">Dashboard</Link>
      <Link to="/projects"className="nav-element">Projects</Link>
      <Link to="/skills" className="nav-element">Skills</Link>
    </nav>
  )
}

export default Navbar