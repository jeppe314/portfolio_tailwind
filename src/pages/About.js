import React from "react"
import JesperObject from "../components/JesperObject"
import AboutText from "../components/AboutText"
import { ReactComponent as Avatar } from "../assets/avatars/Avatar2.svg"
import { Parallax } from "react-scroll-parallax"

export default function About() {
  return (
    <section className="mt-[-15vh] flex flex-col justify-around items-center leading-relaxed sm:flex-row sm:m-0 sm:items-start">
      <div className="flex h-50 justify-start items-center sm:w-1/3">
        <Avatar className="md:h-full w-full" />
      </div>
      <div className="flex justify-start items-center sm:w-2/3">
        <JesperObject className="h-full w-full" />
      </div>
    </section>
  )
}
