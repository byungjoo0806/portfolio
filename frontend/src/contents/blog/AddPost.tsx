import { Editor } from '@monaco-editor/react';
import React, { useState } from 'react';

type Props = {}

const AddPost = (props: Props) => {
    const [codeValue,setCodeValue] = useState<string>("");

    function handleEditorChange(value: any, event: any) {
        // console.log(value);
        setCodeValue(value);
        // console.log(codeValue);
    };

    return (
        <div className='w-[90%] mt-5'>
            <Editor className='border border-slate-300 h-96' defaultLanguage="javascript" defaultValue="// Code of the Day" onChange={handleEditorChange}/>
            <button className='w-10 h-5 border border-black'>Add</button>
        </div>
    )
}

export default AddPost;