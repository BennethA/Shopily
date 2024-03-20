import { FaXmark } from "react-icons/fa6"
import LoginDetails from "./LoginDetails.json"
import { MouseEventHandler, useEffect, useState } from "react"

const Model = (props: { hasAccount: any; handleLogin: MouseEventHandler<HTMLButtonElement> | undefined; handleHasAccount: MouseEventHandler<HTMLParagraphElement> | undefined; handleToModel: MouseEventHandler<SVGElement> | undefined }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')

  const handleRegistrationInfo = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    let userData = {
      email: email,
      password: password,
      userName: userName
    }
    setEmail('')
    setPassword('')
    setUserName('')
    
    localStorage.setItem(userName, JSON.stringify(userData))
    let storedData = JSON.parse(localStorage.getItem(userData));
    LoginDetails.push(storedData)
  }
  

  return (
    <div className="model">
      <div className="formBox">
        <div>
          {
            props.hasAccount 
            ? <form>
                <input 
                  type="email" 
                  value={email} 
                  placeholder="example123@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                  type="password" 
                  value={password} 
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={props.handleLogin}>Login</button>
                <p className="noAccount" onClick={props.handleHasAccount}>No Account?</p>
              </form>
            : <form onSubmit={handleRegistrationInfo}>
                <input 
                  type="text" 
                  value={userName} 
                  placeholder="Username"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input 
                  type="email" 
                  value={email} 
                  placeholder="example123@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                  type="password" 
                  value={password} 
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign In</button>
                <p className="toLogin" onClick={props.handleHasAccount}>Go Back</p>
              </form>
          }
        </div>
        <FaXmark className="xMark" onClick={props.handleToModel}/>
      </div>
    </div>
  )
}

export default Model