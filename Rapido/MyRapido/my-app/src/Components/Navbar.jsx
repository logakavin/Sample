import { Link } from  'react'
// import About from './About'

export default function Navbar() {
  return (
    <nav>
      <ul>
        {/* <li><Link to="/">Home</Link></li> */}
        <li><Link to="./About">About</Link></li>
        {/* <li><Link to="/contact">Contact</Link></li> */}
      </ul>
    </nav>
  )
}


