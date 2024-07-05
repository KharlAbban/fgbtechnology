import Button from './Button'
import {CKEditor} from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { useState } from 'react'
import { Form, useSubmit } from 'react-router-dom'

const CTAForm = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const submitThis = useSubmit();

  const handleEditorChange = (Event, editor) => {
    setText(editor.data.get());
  }

  const handleMessageSend = async (Event) => {
    Event.preventDefault();

    const messageForm = new FormData(Event.target);
    messageForm.append("message", text);

    submitThis(messageForm, {
      method: 'POST',
    });
  }
  
  return (
    <Form method='POST' className="flex flex-col gap-7" onSubmit={handleMessageSend}>
      <input type="text" name='name' value={name} onChange={(Event) => setName(Event.target.value)} required className='border focus:outline-blue-500 focus:border-none outline-none border-gray-300 rounded-sm py-2 px-3 font-normal text-base' placeholder='Your name' />
      <input type="email" name='email' value={email} onChange={(Event) => setEmail(Event.target.value)} required className='border focus:outline-blue-500 focus:border-none outline-none border-gray-300 rounded-sm py-2 px-3 font-normal text-base' placeholder='Your email' />
      <input type="text" name='phone' value={phone} onChange={(Event) => setPhone(Event.target.value)} required className='border focus:outline-blue-500 focus:border-none outline-none border-gray-300 rounded-sm py-2 px-3 font-normal text-base' placeholder='Your phone number' />

      <CKEditor editor={ClassicEditor} onChange={handleEditorChange} />
      <Button text="Let's talk" bgColor="bg-blue-600" hoverColor="hover:bg-blue-500" classNames="w-full mt-6" whiteText={true} shouldGrow={true} />
    </Form>
  )
}

export default CTAForm