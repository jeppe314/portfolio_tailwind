import React from "react"
import { BiMap } from "react-icons/bi"
import { AiOutlineGithub } from "react-icons/ai"
import { FiMail, FiPhoneCall } from "react-icons/fi"
import { BsLinkedin } from "react-icons/bs"
export default function Socials() {
  return (
    <div className="flex flex-col justify-center items-center">
      <ul>
        <li className="text-2xl my-4 flex items-center jutstify-center">
          <BiMap className="w-10 h-full" />
          <p className="ml-6">Stockholm</p>
        </li>
        <li className="text-2xl my-4 flex items-center jutstify-center">
          <FiPhoneCall className="w-10 h-full" />
          <p className="ml-6">+46735950612</p>
        </li>
        <li className="text-2xl my-4 flex items-center jutstify-center">
          <FiMail className="w-10 h-full" />
          <a href="mailto:jesperlindqvist93@gmail.com" className="ml-6">
            Jesper Lindqvist
          </a>
        </li>
      </ul>
      <hr className="w-3/4" />
      <ul className="flex w-2/3 justify-between p-3">
        <a href="https://github.com/jeppe314" target="_blank">
          <AiOutlineGithub className="h-full w-12" />
        </a>
        <li>
          <a href="https://www.linkedin.com/in/jesper-lindqvist-9b1b0b240/" target="_blank">
            <BsLinkedin className="h-full w-12" />
          </a>
        </li>
      </ul>
      <hr className="w-3/4" />
    </div>
  )
}
