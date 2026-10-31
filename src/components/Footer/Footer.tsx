"use client"

import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import instagramIcon from "../../assets/instagram.svg";

export function Footer() {
  return (
    <Container className="footer">
      <div>
        <p>
          This Website was made with <img src={reactIcon.src} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/vishalrupak/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin.src} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/vishalrupak7979"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon.src} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B919360165553&text=Hello+vishal"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp.src} alt="Whatsapp" />
        </a>

        <a
          href="https://www.instagram.com/vishal._.v.r?utm_source=qr&igsh=MTVpeGhyZDg0aXM3YQ=="
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon.src} alt="Instagram" />
        </a>
      </div>
    </Container>
  );
}
