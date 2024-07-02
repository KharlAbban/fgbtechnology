import Button from './Button'
import {CKEditor} from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { useState } from 'react'
import { Form, useSubmit } from 'react-router-dom'

const CTAForm = () => {
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
    <div className='flex flex-col items-center gap-8 max-lg:w-screen max-lg:px-4'>
      <h2 className="text-white lg:hidden heading text-3xl underline">Say Something</h2>
      <div className='w-full px-6 py-12 max-lg:py-8 rounded-sm askForm lg:bg-white'>
        <Form method='POST' className="flex flex-col gap-7" onSubmit={handleMessageSend}>
          <input type="text" name='name' required className='border focus:outline-blue-500 focus:border-none outline-none border-gray-300 rounded-sm py-2 px-3 font-normal text-base' placeholder='Your name' />
          <input type="email" name='email' required className='border focus:outline-blue-500 focus:border-none outline-none border-gray-300 rounded-sm py-2 px-3 font-normal text-base' placeholder='Your email' />
          <input type="text" name='phone' required className='border focus:outline-blue-500 focus:border-none outline-none border-gray-300 rounded-sm py-2 px-3 font-normal text-base' placeholder='Your phone number' />

          <CKEditor editor={ClassicEditor} onChange={handleEditorChange} />
          <Button text="Let's talk" bgColor="bg-blue-600" hoverColor="hover:bg-blue-500" classNames="w-full mt-6" whiteText={true} shouldGrow={true} />
        </Form>
      </div>
    </div>
  )
}

export default CTAForm