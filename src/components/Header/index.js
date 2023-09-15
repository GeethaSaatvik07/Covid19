import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="navbar">
    <h1 className="navlogo">
      COVID19<span className="navlogospan">INDIA</span>
    </h1>
    <ul className="navpages">
      <Link to="/">
        <li className="active-navroute">Home</li>
      </Link>
      <Link to="/about">
        <li className="active-navroute">About</li>
      </Link>
    </ul>
  </div>
)

export default Header
