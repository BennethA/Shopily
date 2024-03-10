import { FaXmark } from "react-icons/fa6"

const Model = ({handleModel, handleLogin, handleHasAccount, hasAccount}) => {
  return (
    <div className="model">
      <div className="formBox">
        <form onSubmit={handleLogin}>
          {
            hasAccount 
            ? <>
                <div>
                  <input type="text" name="" id="" placeholder="Username"/>
                </div>
                <div>
                  <input type="email" name="" id="" placeholder="example123@gmail.com"/>
                </div>
                <div>
                  <input type="password" placeholder="Password"/>
                </div>
                <button type="submit">Sign In</button>
              </>
            : <>
                <div>
                  <input type="text" name="" id="" placeholder="Username"/>
                </div>
                <div>
                  <input type="password" placeholder="Password"/>
                </div>
                <button type="submit">Login</button>
              </>
          }
        </form>
        <div className="noAccount" onClick={handleHasAccount}>
          {hasAccount ? "Go Back" : "No Account?"}
        </div>
        <FaXmark className="xMark" onClick={handleModel}/>
      </div>
    </div>
  )
}

export default Model