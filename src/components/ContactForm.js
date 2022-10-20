import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

export default function ContactForm() {
  const form = useRef()

  const emptyDefault = (e) => {
    if (e.target.value === e.target.defaultValue) {
      e.target.value = ""
    } else return
  }

  const resetInput = (e) => {
    if (e.target.value === "") {
      e.target.value = e.target.defaultValue
    }
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm("service_u76pkaj", "template_cnbi7iw", form.current, "wtaaymmz5WONMawK2").then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      },
      form.current.reset()
    )
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h2 className="text-3xl">CONTACT</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full flex flex-col gap-2 text-gray-300 rounded-md m-8 p-4 text-xl"
      >
        <input
          type="text"
          name="user_name"
          defaultValue="NAME"
          onFocus={(e) => emptyDefault(e)}
          onBlur={(e) => resetInput(e)}
          className="rounded-md h-12 bg-transparent border-2 border-white p-4 uppercase focus:border-devblue focus:outline-none focus:shadow-formInset"
        />
        <input
          type="email"
          name="user_email"
          defaultValue="E-MAIL"
          onFocus={(e) => emptyDefault(e)}
          onBlur={(e) => resetInput(e)}
          className="rounded-md h-12 bg-transparent border-2 border-white p-4 uppercase focus:border-devblue focus:outline-none focus:shadow-formInset"
        />

        <textarea
          name="message"
          defaultValue="MESSAGE"
          onFocus={(e) => emptyDefault(e)}
          onBlur={(e) => resetInput(e)}
          className="rounded-md h-12 bg-transparent border-2 border-white p-4 uppercase min-h-[350px] focus:border-devblue focus:outline-none focus:shadow-formInset"
        />
        <input
          type="submit"
          defaultValue="Send"
          className="my-2 transition-all hover:text-3xl border-box"
        />
      </form>
    </div>
  )
}
