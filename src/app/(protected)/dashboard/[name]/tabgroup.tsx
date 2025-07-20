"use client";
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, MessageSquare, ExternalLink } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const TabGroup = () => {
    const currentPath = usePathname();
    const projectId = currentPath.split('/')[2];

    const getTabValue = () => {
        if (currentPath.includes('/generate-readme')) return 'generate-readme';
        if (currentPath.includes('/chat-with-repo')) return 'chat-with-repo';
        return 'generate-readme';
    };
        // console.log("Current Path:", currentPath, "Project ID:", projectId, "Tab Value:", getTabValue());
    return (
        <div>
            <Tabs value={getTabValue()} className="w-fit">
                <TabsList className="grid w-full grid-cols-2 bg-muted p-1">
                    <TabsTrigger value="generate-readme" asChild>
                        <Link
                            href={`/dashboard/${projectId}/generate-readme`}
                            className={`flex items-center space-x-2 ${getTabValue() === 'generate-readme' ? 'bg-background text-foreground' : ''}`}
                        >
                            <Zap className="h-4 w-4" />
                            <span>Generate README</span>
                        </Link>
                    </TabsTrigger>

                    <TabsTrigger value="chat-with-repo" asChild>
                        <Link
                            href={`/dashboard/${projectId}/chat-with-repo`}
                            className={`flex items-center space-x-2 ${getTabValue() === 'chat-with-repo' ? 'bg-background text-foreground' : ''}`}
                        >
                            <MessageSquare className="h-4 w-4" />
                            <span>Chat with Repo</span>
                        </Link>
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    );
}

export default TabGroup;

