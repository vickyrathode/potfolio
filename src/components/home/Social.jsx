import React from "react";
import { FiInstagram, FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/aarvicky09/" className="home__social-icon" target="_blank" rel="true">
                <FiInstagram />
            </a>
            <a href="https://www.github.com/vickyrathode" className="home__social-icon" target="_blank" rel="true">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/vikki-rathod-263343230/" className="home__social-icon" target="_blank" rel="true">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;