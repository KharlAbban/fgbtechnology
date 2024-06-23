import Button from './Button'
import {CKEditor} from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { useState } from 'react'

const CTAForm = ({ovalImg, dottedShape}) => {
  const [text, setText] = useState("");

  const handleEditorChange = (Event, editor) => {
    setText(editor.data.get().slice(3, editor.data.get().length - 4));
  }
  
  return (
    <div className='px-8 py-12 bg-white rounded-sm max-w-[35rem] relative askForm'>
      <div className="flex flex-col gap-7">
        <input type="text" className='border focus:outline-blue-500 focus:border-none outline-none border-gray-300 rounded-sm py-2 px-3 font-normal text-base' placeholder='Your name' />
        <input type="email" className='border focus:outline-blue-500 focus:border-none outline-none border-gray-300 rounded-sm py-2 px-3 font-normal text-base' placeholder='Your email' />

        <CKEditor editor={ClassicEditor} onChange={handleEditorChange} />
      </div>
      <Button text="Let's talk" bgColor="bg-blue-600" hoverColor="hover:bg-blue-500" classNames="w-full mt-6" whiteText={true} shouldGrow={true} />
    </div>
  )
}

export default CTAForm