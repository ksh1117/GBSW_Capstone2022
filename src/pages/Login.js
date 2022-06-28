import React, {useState} from "react";
import '../styles/login.css'
import {HiUser} from "react-icons"
const Login = () => {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const onIdHandler = (e) => {
        setId(e.target.value);
    }
    const onpwHandler = (e) => {
        setPw(e.target.value);
    }

    return (
        <div className="container">
            <div class="form_container">
                <div className="left">
                    <h1>How does a login system work?</h1>
                    <p>In computer security, logging in is the process by which an individual gains
                        access to a computer system by identifying and authenticating themselves.</p>
                </div>

                <div className="right_login">
                    <input type="text" value={id} onChange={onIdHandler} placeholder="아이디"/>

                    <input type="password" value={pw} onChange={onpwHandler} placeholder="비밀번호"/>
                    <button>로그인</button>
                    
                    <span>아직 계정이 없으신가요?</span>
                    <button type="submit"></button>
                </div>
            </div>
        </div>
    )
}
export default Login;