import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <header>
        <nav>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/gallery'>Gallery</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <div>
              <span>Hooks</span>
              <ol>
                <li>
                  <Link to='/'>UseState</Link>
                </li>
                <li>
                  <Link to='/useeffect'>UseEffect</Link>
                </li>
              </ol>
            </div>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
        </nav>
    </header>
  )
}
export default Navbar
