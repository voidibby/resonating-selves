import * as React from "react"
import Logo from "./logo"
import * as css from "../assets/styles/header.module.scss"

const Header = (props) => {
  return (
    <header>
      <div className={css.headerDetails}>
        <h3>INTERFACE CULTURES AT {"\n"} ARS ELECTRONICA 2023</h3>
        <h3>06.–10.09.23 {"\n"} POSTCITY LINZ</h3>
      </div>
      <Logo></Logo>
    </header>
  )
}

export default Header
