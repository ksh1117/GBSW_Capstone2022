import React, {useState} from "react";
import '../styles/App.css';

const Signup = () =>  {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [name, setName] = useState('');
  const [bdate, setBdate] = useState('');
  
  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  };
  const onPwHandler = (e) => {
    setPw(e.currentTarget.value);
  };
  const onCpwHandler = (e) => {
    setPwCheck(e.currentTarget.value);
  };  
  const onBdateHandler = (e) => {
    setBdate(e.currentTarget.value);
  };
  const onBtnClick = (e) => {
    if(pw !== pwCheck) {
      alert("비밀번호를 다시 확인 해주세요");
    } 
    else {
      
      console.log("이름: " + name);
      console.log("아이디: " + id);
      console.log("비밀번호: " + pw);
      console.log("생년월일: " + bdate);
      alert("회원가입 완료");
    }
  }
  
  return(
    <div className="center">
      <div className="signippage">
      <form>
        <h2>일단 캡스톤 회원가입폼</h2>
        <div>
          
          <input type="text" value={name} onChange = {onNameHandler} placeholder = "*이름"/><br/>
        </div>
        <div>
          <input type="text" value={id} onChange = {onIdHandler} minLength = '5' maxLength = '16' placeholder = "*아이디(5~16자)" /><br/>
        </div>
        <div>
          <input type="password" value={pw} onChange = {onPwHandler} maxLength = '12' placeholder = "*비밀번호(1~12자)"/><br/>
        </div>
        <div>
          <input type="password" value={pwCheck} onChange = {onCpwHandler} maxLength = '12' placeholder = "*비밀번호 확인"/><br/>
        </div>
        <div>
          <label>생년월일</label><br></br>
          <input type="date" value={bdate} onChange = {onBdateHandler}/>
        </div>
        <div>
          <button type="submit" onClick={onBtnClick}>회원 가입</button>
        </div>
      </form>
    </div>
    </div>
  )
}
export default Signup;