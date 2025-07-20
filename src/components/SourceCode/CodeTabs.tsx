"use client";
import { FileReference } from '@/Interfaces/interface';
import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Helper function to map file extensions to language names
const getLanguageFromExtension = (filename: string): string => {
  const ext = filename.split('.').pop()?.toLowerCase();

  const extensionMap: { [key: string]: string } = {
    js: 'javascript',
    jsx: 'jsx',
    ts: 'typescript',
    tsx: 'tsx',
    py: 'python',
    java: 'java',
    cpp: 'cpp',
    c: 'c',
    html: 'html',
    css: 'css',
    scss: 'scss',
    json: 'json',
    md: 'markdown',
    sh: 'bash',
    sql: 'sql',
    go: 'go',
    php: 'php',
    rb: 'ruby',
    swift: 'swift',
    xml: 'xml',
    yaml: 'yaml',
    yml: 'yaml',
    dockerfile: 'docker',
    env: 'bash'
  };

  return extensionMap[ext || ''] || 'text';
};

const CodeTabs = ({ fileRefs }: { fileRefs: FileReference[] }) => {
  const [activeTab, setActiveTab] = useState(fileRefs[0]?.file_name || '');
  // console.log("Tabs",activeTab, "Refs", fileRefs);
  useEffect(() => {
    if (fileRefs.length > 0) {
      setActiveTab(fileRefs[0].file_name);
    }
  }, [fileRefs]);

  return (
    <div className='max-h-[25vh] overflow-auto'>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          {fileRefs.map((fileRef) => (
            <TabsTrigger key={fileRef.file_name} value={fileRef.file_name}>
              {fileRef.file_name}
            </TabsTrigger>
          ))}
        </TabsList>

        {fileRefs.map((fileRef) => {
          const language = getLanguageFromExtension(fileRef.file_name);
          return (
            <TabsContent className='max-w-7xl' key={fileRef.file_name} value={fileRef.file_name}>
              <SyntaxHighlighter language={language} style={vscDarkPlus} wrapLongLines={true} customStyle={{ borderRadius: '10px', fontSize: '0.85rem', maxWidth: '100%' }} >
                {fileRef.source_code}
              </SyntaxHighlighter>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default CodeTabs;
