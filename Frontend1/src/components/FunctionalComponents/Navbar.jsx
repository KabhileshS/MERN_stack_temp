import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../css/Navbar.css'

const Navbar = () => {
  var [dropdown,setDropdown] = useState(false)
  var [dropdown1,setDropdown1] = useState(false)

  return (
    <header>
        <nav>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/gallery'>Gallery</Link></li>

            <div className="dropdown" onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}>
              
              <span className="link">Hooks</span>
              {dropdown && (
                <ol className="dropdown-list">
                  <li><Link className="dropdown-link" to="/use-state">UseState</Link></li>
                  <li><Link className="dropdown-link" to="/use-effect">UseEffect</Link></li>
                  <li><Link className="dropdown-link" to="/use-effect-api">UseEffectAPI</Link></li>
                  <li><Link className="dropdown-link" to="/use-ref">UseRef</Link></li>
                  <li><Link className="dropdown-link" to="/use-memo">UseMemo</Link></li>
                  <li><Link className="dropdown-link" to="/use-callback">UseCallback</Link></li>
                  <li><Link className="dropdown-link" to="/use-memoize">UseMemoizeCustomeHook</Link></li>
                </ol>
              )}
            </div >
            <li><Link to='/hoc'>HoC</Link></li>
            <div className="dropdown" onMouseEnter={()=>setDropdown1(true)} onMouseLeave={()=>setDropdown1(false)}>
              <span className='link'>Memoization</span>
              {dropdown1 && 
                  (<ol className="dropdown-list">
                    <li><Link to="/memo" className='dropdown-link'>Memo</Link></li>
                    <li><Link to="/lazy" className='dropdown-link'>Lazy Component</Link></li>
              </ol>)}
            </div>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </nav>
    </header>
  )
}
export default Navbar
