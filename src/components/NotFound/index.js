import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="failure-page">
    <h1 className="failure-heading">PAGE NOT FOUND</h1>
    <p className="failure-line">
      we’re sorry, the page you requested could not be found Please go back to
      the homepage
    </p>
    <Link to="/">
      <button className="failure-button" type="button">
        Home
      </button>
    </Link>
  </div>
)

export default NotFound
