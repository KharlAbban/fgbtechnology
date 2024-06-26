import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import React, { useState } from 'react'
import { Form, useSubmit } from 'react-router-dom'
import Button from './Button'

const ContactSection = () => {
  const [text, setText] = useState("");
  const submitThis = useSubmit();

  const handleEditorChange = (Event, editor) => {
    setText(editor.data.get());
  }

  const handleMessageSend = (Event) => {
    Event.preventDefault();
    const formData = new FormData(Event.target);
    formData.append("message", text);
    console.log(formData.get("message"));

    submitThis(formData);
  }

  return (
    <section className='section flex max-lg:flex-col max-lg:gap-7 mt-2 justify-around'>
      <div className='w-60 h-screen max-lg:w-full border-r border-primaryBlue'></div>
      <div className='mx-auto w-3/4'>
      <div className='px-8 py-12 max-lg:py-8 bg-white rounded-sm relative askForm'>
        <h2 className="text-center mb-6 heading text-3xl underline">Send A Message</h2>
        <Form method='POST' className="flex flex-col gap-7" onSubmit={handleMessageSend}>
          <input type="text" name='name' required className='border focus:outline-blue-500 focus:border-none outline-none border-gray-300 rounded-sm py-2 px-3 font-normal text-base' placeholder='Your name' />
          <input type="email" name='email' required className='border focus:outline-blue-500 focus:border-none outline-none border-gray-300 rounded-sm py-2 px-3 font-normal text-base' placeholder='Your email' />

          <CKEditor editor={ClassicEditor} onChange={handleEditorChange} />
          <Button text="Let's talk" bgColor="bg-blue-600" hoverColor="hover:bg-blue-500" classNames="w-full mt-6" whiteText={true} shouldGrow={true} />
        </Form>
      </div></div>
    </section>
  )
}

export default ContactSection