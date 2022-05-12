import React from "react";
import './Mainpage.css';

const Mainpage = () => {
  return (
    <div className="center">
      <header>
        <div className="sort">
          <div>
            <img className="lineImg" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cpath fill='%23000' fill-rule='nonzero' d='M22.5 18a.5.5 0 1 1 0 1h-21a.5.5 0 1 1 0-1h21zm0-6a.5.5 0 1 1 0 1h-21a.5.5 0 1 1 0-1h21zm0-6a.5.5 0 1 1 0 1h-21a.5.5 0 0 1 0-1h21z'/%3E %3C/svg%3E" />
          </div>
        </div>

        <div className="sort">
          <img className="logo" src="http://img.danawa.com/prod_img/500000/869/844/img/2844869_1.jpg?shrink=330:330&_v=20210325103140" alt="로고" />
        </div>

        <div className="sort">
            <img className="profile" src="https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927" alt="프로필" />
        </div>
      </header>
    </div>
  )
}

export default Mainpage;