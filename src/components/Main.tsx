import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ResumeIcon from '@mui/icons-material/Description';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="src/assets/images/avatar.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/KorooUwU" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="koroo.pdf" target="_blank" rel="noreferrer"><ResumeIcon/></a>
          </div>
          <h1>Trương Phúc Hoàng Anh</h1>
          <p>IT Student | Frontend Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/KorooUwU" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="koroo.pdf" target="_blank" rel="noreferrer"><ResumeIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;