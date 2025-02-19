import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <header>
        <nav>
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Contact</li>
            <li>Login</li>
            <li>Signup</li>
        </nav>
    </header>
  )
}
export default Navbar
