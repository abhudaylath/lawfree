import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useClipboard } from '@mantine/hooks';

interface props {
  aiOutput: string | undefined
}

function OutputSection({ aiOutput }: props) {
  const editorRef = useRef<Editor | null>(null);

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    editorInstance.setMarkdown(aiOutput)
  }, [aiOutput])

  const handleEditorChange = () => {
    if (editorRef.current) {
      //console.log(editorRef.current.getInstance().getMarkdown());
    }
  };
  const clipboard = useClipboard({ timeout: 1000 });
  return (
    <div className='bg-white shadow-lg border'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button className='bg-blue-500 hover:bg-blue-700 flex gap-2'
          onClick={() => clipboard.copy(aiOutput)}>
          {clipboard.copied ? (
            'Copied'
          ) : (
            <Copy size={16} />
          )}
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={handleEditorChange}
      />
    </div>
  );
}

export default OutputSection;
