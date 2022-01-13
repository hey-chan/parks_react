import React from 'react'
import {Link} from 'react-router-dom';

export default function SignUp() {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [password_confirmation, setPasswordConfirmation] = useState("");
  return (
    <>
      <section>
        <h2>Sign Up</h2>
        <div>
          <img src={process.env.PUBLIC_URL + '/park_image1.jpg'} alt="melbourne google map" style={{ width: '100%' }} />
          {/* <form onSubmit={handleSubmit}> */}
          <form>
            <div>
              <label>
                Username
                <input
                  id="username"
                  // value={username}
                  // onChange={(e) => setUsername(e.currentTarget.value)}
                />
              </label>
              <label>
                Email
                <input
                  id="email"
                  // value={email}
                  // onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </label>
              <label>
                User Icon
                <input
                  type="file"
                  id="icon"
                  // value={icon}
                  // onChange={(e) => setIcon(e.currentTarget.value)}
                />
              </label>
              <label>
                Password
                <input
                  id="password"
                  // value={password}
                  // onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </label>
              <label>
                Password Confirmation
                <input
                  id="password_confirmation"
                  // value={password_confirmation}
                  // onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </label>
              <button type="submit" className="primary">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </section>
      <h2><Link to="/auth/signin">Already Signed Up? Click here.</Link></h2>
    </>
  )
}
