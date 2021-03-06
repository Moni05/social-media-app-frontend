import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../context/apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";



export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall({email: email.current.value, password: password.current.value }, dispatch);
  };

  //console.log(user);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social App</h3>
          <span className="loginDesc">
            Connect with friends and the world around you.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
          <input placeholder="Email" type="email" required className="loginInput" ref={email} />
          <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password} />
          <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? ( <CircularProgress color="white" size="20px" />) : (
                "Log In"
              )}
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}