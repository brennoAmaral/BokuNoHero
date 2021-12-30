import * as React from "react"
import BokuNoHeroLogo from "../../images/boku-no-hero-logo.png"
import BrennoDevButton from "../../utils/brennoDevButton"
import * as style from "./style"

export default function Header() {
  return (
    <style.Header>
      <img src={BokuNoHeroLogo} />
      <BrennoDevButton />
    </style.Header>
  );
}

