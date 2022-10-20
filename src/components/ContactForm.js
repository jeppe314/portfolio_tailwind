import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

export default function ContactForm() {
  const form = useRef()

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
    <div className="w-full h-full">
      <form
        ref={form}
        onSubmit={sendEmail}
        class="flex flex-col gap-2 h-12 text-gray-500 border-box w-full"
      >
        <h5>Questions? Send a message!</h5>
        <input type="text" name="user_name" value="Your name" />
        <input type="email" name="user_email" value="Your e-mail" />

        <textarea name="message" value="Your message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}
