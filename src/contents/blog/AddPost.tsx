import { Editor } from '@monaco-editor/react';
import React, { useRef } from 'react';

type Props = {}

const AddPost = (props: Props) => {
    const editorRef = useRef(null);

    function handleEditorDidMount(editor: any, monaco: any) {
        editorRef.current = editor;
        console.log(typeof editor);
        console.log(typeof monaco);
    }

    // function showValue() {
    //     if(editorRef.current !== undefined)
    //     alert(editorRef.current.getValue());
    // }

    return (
        <div className='w-[90%] mt-5'>
            <Editor className='border border-slate-300 h-96' defaultLanguage="javascript" defaultValue="// Code of the Day" onMount={handleEditorDidMount} />
            <button className='w-10 h-5 border border-black'>Add</button>
        </div>
    )
}

export default AddPost;