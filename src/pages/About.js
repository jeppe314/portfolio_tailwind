import React from "react"
import JesperObject from "../components/JesperObject"
import AboutText from "../components/AboutText"
import { ReactComponent as Avatar } from "../assets/avatars/Avatar2.svg"
import { Parallax } from "react-scroll-parallax"

export default function About() {
  return (
    <section className="mt-[-15vh] flex flex-wrap flex-col justify-around gap-8 leading-relaxed md:m-0">
      <div className="md:flex md:flex-row">
        <div className="flex justify-center items-around md:w-1/2">
          <Avatar />
        </div>
        <JesperObject />
      </div>
      <AboutText />
    </section>
  )
}
