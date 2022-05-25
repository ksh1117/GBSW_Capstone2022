import React from "react";
import './Mainpage.css';
import logoImg from './assets/logoImg.png';
import profileImg from './assets/profileImg.png';
import capstone from './assets/capstone.jpg'
import menu from './assets/menu.png';

const Mainpage = () => {
  return (
    <div className="center1">
      <header>
        <div className="lineImg">
          <div className="lineImgSort">
            <img src={menu} />
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

      <div class="postDiv">
        <div className="postSort">
          <div class="post">
            <div className="postImg">
              <img src={capstone} alt="타이틀 이미지" />
            </div>
            <div className="text">
              C언어 1일차
            </div>
          </div>

          <div class="post">
              <div className="postImg">
                  이미지
              </div>
              <div className="text">
                  제목
              </div>
          </div>

          <div class="post">
              <div className="postImg">
                  이미지
              </div>
              <div className="text">
                  제목
              </div>
          </div>

          <div class="post">
              <div className="postImg">
                  이미지
              </div>
              <div className="text">
                  제목
              </div>
          </div>

          <div class="post">
              <div className="postImg">
                  이미지
              </div>
              <div className="text">
                  제목
              </div>
          </div>

          <div class="post">
              <div className="postImg">
                  이미지
              </div>
              <div className="text">
                  제목
              </div>
          </div>

          <div class="post">
              <div className="postImg">
                  이미지
              </div>
              <div className="text">
                  제목
              </div>
          </div>

          <div class="post">
              <div className="postImg">
                  이미지
              </div>
              <div className="text">
                  제목
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mainpage;