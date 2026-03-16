import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://avatars.alphacoders.com/avatars/view/375159" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/KorooUwU" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="koroo.pdf" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Trương Phúc Hoàng Anh</h1>
          <p>FIT Student | Frontend Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/KorooUwU" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="koroo.pdf" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;