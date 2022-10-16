import React from "react"
import JesperObject from "../components/JesperObject"
import AboutText from "../components/AboutText"
import { ReactComponent as Avatar } from "../assets/avatars/Avatar2.svg"
import { Parallax } from "react-scroll-parallax"

export default function About() {
  return (
    <section className="h-full -mt-32 flex flex-col justify-start items-center md:items-center md:m-0">
      <div className="md:flex flex-between w-screen">
        <div className="w-full md:w-1/2 flex flex-center items-center">
          <Avatar className="-scale-x-100" />
        </div>
        <JesperObject />
      </div>
      <AboutText />
    </section>
  )
}
