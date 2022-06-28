import React, {useState} from "react";
import '../styles/login.css'
import {Link} from "react-router-dom";
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

                    <h1>LearnChart</h1>
                    <p>저희가 개발하는 LearnCheck는 코딩 혹은 기타 프로젝트 등 자신이 했는 활동을 기록하며 활동을 그래프나 표로 나타내 수치를
                    보여주면서 일의 능률을 높혀줍니다.</p>
                </div>

                <div className="right_login">
                    <input type="text" value={id} onChange={onIdHandler} placeholder="아이디"/>

                    <input type="password" value={pw} onChange={onpwHandler} placeholder="비밀번호"/>
                    
                    <Link to="/Mainpage">
                    <button>로그인</button>      
                    </Link>   
                    <span>아직 계정이 없으신가요?</span>
                    <Link to="/Signup">
                    <span>회원가입</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Login;