import React from "react"
import JesperObject from "../components/JesperObject"
import AboutText from "../components/AboutText"
import { ReactComponent as Avatar } from "../assets/avatars/Avatar2.svg"
import { Parallax } from "react-scroll-parallax"

export default function About() {
  return (
    <section className="h-full -mt-32 flex flex-col justify-start items-center md:flex-row md:items-center">
      <Avatar className="w-full -scale-x-100" />

      <JesperObject />

      <AboutText />
    </section>
  )
}
