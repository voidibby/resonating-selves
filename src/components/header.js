import * as React from "react"
import { useState, useEffect } from "react"
import Logo from "./logo"
import * as css from "../assets/styles/header.module.scss"

const Header = (props) => {
  const [windowWidth, setWindowWidth] = useState(null)

  useEffect(() => {
    setWindowWidth(window.innerWidth)

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  return (
    <header>
      <div className={css.headerDetails}>
        <h3>INTERFACE CULTURES AT {"\n"} ARS ELECTRONICA 2023</h3>
        <h3>06.–10.09.23 {"\n"} POSTCITY LINZ</h3>
      </div>
      <Logo></Logo>
      <div className={css.screenWidth}>
        <div className={css.blah}></div>
        <p>{windowWidth}</p>
      </div>
    </header>
  )
}

export default Header
