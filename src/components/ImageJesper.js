import React from "react"
import Image from "../assets/images/jesper_nobg.png"

export default function ImageJesper() {
  return (
    <div className="flex flex-nowrap bg-white bg-opacity-50 my-8 md:w-1/2 ">
      <img src={Image} alt="Jesper" />
    </div>
  )
}
