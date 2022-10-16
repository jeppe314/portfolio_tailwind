import React from "react"
import JesperObject from "../components/JesperObject"
import AboutText from "../components/AboutText"
import { ReactComponent as Avatar } from "../assets/avatars/Avatar2.svg"
import { Parallax } from "react-scroll-parallax"

export default function About() {
  return (
    <section className="mt-[-15vh] h-screen flex flex-col md:flex-row justify-around leading-relaxed md:m-0">
      <div className="flex w-1/3 h-50 justify-start items-center">
        <Avatar className="h-full w-full" />
      </div>
      <div className="flex w-2/3 h-screen justify-start items-center">
        <JesperObject className="h-full w-full" />
      </div>
    </section>
  )
}
