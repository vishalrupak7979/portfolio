'use client'

import { Container } from './styles'
import { useState } from 'react'
export function Header() {
  const [isActive, setActive] = useState(false)
  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }
  function closeMenu() {
    setActive(false)
  }
  return (
    <Container className="header-fixed">
      <input
        onChange={toggleTheme}
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
      />
      <label htmlFor="switch">Toggle</label>
      <nav className={isActive ? 'active' : ''}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" onClick={closeMenu}>
          About me
        </a>
        <a href="#experience" onClick={closeMenu}>
          Experience
        </a>
        <a href="#project" onClick={closeMenu}>
          Project
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
        <a href="/vishal_rupak_resume.pdf" download className="button">
          Resume
        </a>
      </nav>
      <div
        aria-expanded={isActive ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
        className={isActive ? 'menu active' : 'menu'}
        onClick={() => {
          setActive(!isActive)
        }}
      ></div>
    </Container>
  )
}
