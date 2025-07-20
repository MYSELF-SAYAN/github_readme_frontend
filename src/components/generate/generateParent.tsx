"use client";
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { Textarea } from '../ui/textarea';
import { Copy, Download } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { usePathname } from 'next/navigation';
import axios from 'axios';
const GenerateParent = () => {
    const [readmeContent, setReadmeContent] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const projectId = usePathname().split('/')[2];
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const handleGenerate = async () => {
        // console.log("Generating README for project ID:", projectId);
        if (!projectId) {
            console.error("No project ID found");
            return;
        }
        setIsGenerating(true);
        const { data } = await axios.post(`${baseUrl}/readme/generate-readme/${projectId}`);
        // console.log("Generated README content:", data);
        setReadmeContent(data.readmeCode || "No content generated");
        setIsGenerating(false);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(readmeContent);
    };

    const handleDownload = () => {
        const blob = new Blob([readmeContent], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'README.md';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
    return (
        <div className='p-4 mt-2'>
            <div className='flex items-center justify-between mb-4'>
                <div>
                    <h1 className=' text-2xl font-bold'>Generate README</h1>
                    <p>Generate stunning README for your project effortlessly with the magic of AI.</p>
                </div>
                <Button onClick={handleGenerate}>{isGenerating ? "Generating..." : "Generate README"}</Button>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-300px)] max-h-[10vh]">

                <Card className="flex flex-col max-h[30vh]">
                    <CardHeader className="flex-shrink-0">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-lg font-medium">Markdown Source</CardTitle>
                            <div className="flex space-x-2">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={handleCopy}
                                    className="h-8"
                                >
                                    <Copy className="h-3 w-3 mr-1" />
                                    Copy
                                </Button>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={handleDownload}
                                    className="h-8"
                                >
                                    <Download className="h-3 w-3 mr-1" />
                                    Download
                                </Button>
                            </div>
                        </div>
                    </CardHeader>
                    <Separator />
                    <CardContent className="flex-1 p-0">
                        <Textarea
                            value={readmeContent}
                            onChange={(e) => setReadmeContent(e.target.value)}
                            placeholder="Generated README content will appear here..."
                            className="h-full resize-none border-0 rounded-none font-mono text-sm bg-code-bg focus-visible:ring-0"
                            style={{ minHeight: '500px' }}
                        />
                    </CardContent>
                </Card>


                <Card className="flex flex-col">
                    <CardHeader className="flex-shrink-0">
                        <CardTitle className="text-lg font-medium">Preview</CardTitle>
                    </CardHeader>
                    <Separator />
                    <CardContent className="flex-1 p-6 overflow-auto bg-background">
                        <div className="prose prose-sm max-w-none dark:prose-invert">
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
                                {readmeContent}
                            </ReactMarkdown>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default GenerateParent;


