import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer">
    <h1 className="footer-logo">
      COVID19<span className="footerlogospan">INDIA</span>
    </h1>
    <p className="footer-line">
      we stand with everyone fighting on the front lines
    </p>
    <div className="footer-social">
      <VscGithubAlt className="github-logo" />
      <FiInstagram className="instagram-logo" />
      <FaTwitter className="twitter-logo" />
    </div>
  </div>
)

export default Footer
