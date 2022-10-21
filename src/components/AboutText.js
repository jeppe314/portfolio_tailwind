import React from "react"
import { Parallax } from "react-scroll-parallax"

export default function AboutText() {
  return (
    <div className="flex flex-col justify-center h-full gap-5 font-openSans">
      <h3 className="text-xl tracking-widest lg:text-3xl">Who am I?</h3>
      <p className="lg:text-2xl ">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
    </div>
  )
}
