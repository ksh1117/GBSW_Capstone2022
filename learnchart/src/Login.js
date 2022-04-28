import React, {useState} from "react";
import './App.css';
import { Link } from "react-router-dom";
const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  }
  const onpwHandler = (e) => {
    setPw(e.currentTarget.value);
  }

  return(
    <div className="center">
    <div className="Login">
      <form>
      <h2>일단 캡스톤 로그인폼</h2>
      <div>
        <input type="text" value={id} onChange = {onIdHandler} placeholder = "아이디" />
      </div>
      <div>
      <input type="password" value={pw} onChange = {onpwHandler} placeholder = "비밀번호" />
      </div>
      <div>
      <Link to="/signup">
        <button>로그인</button>
      </Link>
      </div>
      </form>
      </div>
    </div>
  )
}
export default Login;