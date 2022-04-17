import "./styles.css";
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai'

function Register() {
    const [classAuth, setClassAuth] = useState<string>("")
  return (
    <div className={`${classAuth} container`} id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <Link to="#" className="social">
              <AiFillGithub />
            </Link>
            <Link to="#" className="social">
              <AiFillGoogleCircle />
            </Link>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
          <button onClick={() => setClassAuth("right-panel-active")}>Sign In</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <div className="social-container">
            <Link to="#" className="social">
              <AiFillGithub />
            </Link>
            <Link to="#" className="social">
              <AiFillGoogleCircle />
            </Link>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <Link to="#">Forgot your password?</Link>
          <button>Sign In</button>
          <button onClick={() => setClassAuth("")}>Sign Up</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button className="ghost" id="signIn" onClick={() => setClassAuth("")}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" onClick={() => setClassAuth("right-panel-active")}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
