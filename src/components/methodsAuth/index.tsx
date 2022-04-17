import { Link } from 'react-router-dom'
import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai'

export default function MethodsAuth () {
    return (
          <div className="social-container">
            <Link to="#" className="social">
              <AiFillGithub />
            </Link>
            <Link to="#" className="social">
              <AiFillGoogleCircle />
            </Link>
          </div>
    )
}