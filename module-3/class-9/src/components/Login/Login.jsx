import React from 'react'
import './Login.css'

const Login = ({ setIsLoggedIn }) => {

const [email, setEmail] = React.useState('')
const [password, setPassword] = React.useState('')

const handleLogin = () => {
  
 if(email === 'admin@gmail.com' && password === 'admin'){
    setIsLoggedIn(true)
  }else{
    alert('Invalid credentials')
  }
}



  return (
    <div className="login_container">
      <div className="login_card">
        <h2>Sign in</h2>
        <form className="login_form" onSubmit={(e)=>e.preventDefault()}>
          <div className="form_group">
            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)}  id="email" name="email" type="email" placeholder="you@example.com" />
          </div>

          <div className="form_group">
            <label htmlFor="password">Password</label>
            <input  onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" placeholder="••••••••" />
          </div>

          <div className="login_helpers">
            <label style={{fontSize: '0.9rem'}}><input type="checkbox"/> Remember</label>
            <a href="#">Forgot?</a>
          </div>

          <button className="login_btn" type="submit" onClick={() => handleLogin()}>Sign in</button>
        </form>
      </div>
    </div>
  )
}

export default Login