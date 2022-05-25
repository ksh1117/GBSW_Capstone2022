import React from "react";
import './Page.css';
import logoImg from './assets/logoImg.png';
import profileImg from './assets/profileImg.png'

const Page = () => {
    return (
        <div>
            <header>
                <div className="lineImg">
                <div>
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cpath fill='%23000' fill-rule='nonzero' d='M22.5 18a.5.5 0 1 1 0 1h-21a.5.5 0 1 1 0-1h21zm0-6a.5.5 0 1 1 0 1h-21a.5.5 0 1 1 0-1h21zm0-6a.5.5 0 1 1 0 1h-21a.5.5 0 0 1 0-1h21z'/%3E %3C/svg%3E" />
                </div>
                </div>

                <div className="logo">
                <img src={logoImg} alt="로고" />
                </div>

                <div className="profile">
                    <img src={profileImg} alt="프로필" />
                </div>
            </header>

            <div className="headerSort"></div>

            <div className="centerSort">
                <div className="sort">
                    <div className="img">이미지</div>
                    <div className="text">텍스트</div>
                </div>
            </div>
            
            <footer>
                <div className="footerSort"></div>
            </footer>
        </div>
        
    )
}

export default Page;