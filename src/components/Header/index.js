import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="navbar-container">
      <Link to="/" className="link">
        <span className="website-logo">GET-HIRED</span>
      </Link>
      <button type="button" className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
