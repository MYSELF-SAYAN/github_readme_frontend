"use client";
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { chatStream } from '@/services/chatStream';
import { readStreamableValue } from 'ai/rsc';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FileReference } from '@/Interfaces/interface';
import { Copy, Download } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Separator } from '@radix-ui/react-separator';
import CodeTabs from '@/components/SourceCode/CodeTabs';
const page = () => {
    const [question, setQuestion] = useState("");
    const [code, setCode] = useState("");
    const [fileRefs, setFileRefs] = useState<FileReference[]>([]);
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const projectId = currentPath.split('/')[2];
    const handleSend = async () => {
        // Implement send functionality
        if (code !== "") {
            setCode(""); // Clear the code after sending
        }
        const { output, result } = await chatStream(question, projectId);
        setFileRefs(result);
        for await (const chunk of readStreamableValue(output)) {
            if (chunk) {
                setCode(prev => prev + chunk);
            }
        }
        setQuestion(""); // Clear the input after sending

    };

    return (
        <div className='pt-4'>

            <Card className="flex flex-col h-[78vh] max-h-[78vh] overflow-y-auto">
                <CardHeader className="">
                    <CardTitle className="text-lg font-medium">Chat</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex-col overflow-auto bg-background  ">
                    <div className="prose prose-sm max-w-none dark:prose-invert max-h-[50vh]">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                code(props: any) {
                                    const { inline, className, children } = props;
                                    const match = /language-(\w+)/.exec(className || '');
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            style={oneDark as any}
                                            language={match[1]}
                                            PreTag="div"
                                            className="rounded-md prose "
                                        >
                                            {String(children).replace(/\n$/, '')}
                                        </SyntaxHighlighter>
                                    ) : (
                                        <code className={className}>
                                            {children}
                                        </code>
                                    );
                                },
                            }}
                        >
                            {code}
                        </ReactMarkdown>
                    </div>
                    
                </CardContent>
                <CodeTabs fileRefs={fileRefs} />
                <CardFooter className='flex items-center justify-between gap-2'>
                    <Input value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Ask a question about the codebase..." />
                    <Button onClick={handleSend}>Send</Button>
                </CardFooter>
            </Card>

        </div>
    );
}

export default page;


