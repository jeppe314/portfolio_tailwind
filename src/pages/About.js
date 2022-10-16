import React from "react"
import JesperObject from "../components/JesperObject"
import AboutText from "../components/AboutText"
import { ReactComponent as Avatar } from "../assets/avatars/Avatar2.svg"
import { Parallax } from "react-scroll-parallax"

export default function About() {
  return (
    <section className="mt-[-15vh] h-screen flex flex-col md:flex-row justify-around leading-relaxed md:m-0">
      {/* <div className="flex justify-center items-around md:w-1/2"> */}
        <Avatar />
      {/* </div> */}
      <div className="flex w-[50vw]">
        <JesperObject className="h-full w-full" />
      </div>
    </section>
  )
}
