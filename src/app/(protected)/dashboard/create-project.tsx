"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Github, Plus } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

interface AddProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (project: { name: string; githubUrl: string; githubToken: string }) => void;
}
const CreateProject = ({ isOpen, onClose, onAdd }: AddProjectModalProps) => {
    const [name, setName] = useState("");
    const [githubUrl, setGithubUrl] = useState("");
    const [githubToken, setGithubToken] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);



        onAdd({ name,  githubUrl, githubToken });

        // Reset form
        setName("");
        setGithubUrl("");
        setGithubToken("");
        setIsLoading(false);
    };

    const handleClose = () => {
        setName("");
        setGithubUrl("");
        setGithubToken("");
        onClose();
    };
    return (
        <div>
            <Dialog open={isOpen} onOpenChange={handleClose}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center space-x-2">
                            <Plus className="h-5 w-5" />
                            <span>Add New Project</span>
                        </DialogTitle>
                        <DialogDescription>
                            Add a GitHub repository to generate README files and chat with your codebase.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="project-name" className="text-sm font-medium">
                                Project Name <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                id="project-name"
                                placeholder="My Awesome Project"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="h-10"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="github-url" className="text-sm font-medium">
                                GitHub Repository URL <span className="text-destructive">*</span>
                            </Label>
                            <div className="relative">
                                <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="github-url"
                                    placeholder="https://github.com/username/repository"
                                    value={githubUrl}
                                    onChange={(e) => setGithubUrl(e.target.value)}
                                    className="h-10 pl-10"
                                    required
                                />
                            </div>
                            <p className="text-xs text-muted-foreground">
                                The GitHub repository URL you want to work with
                            </p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="github-token" className="text-sm font-medium">
                                GitHub Personal Access Token <span className="text-muted-foreground">(Optional)</span>
                            </Label>
                            <Textarea
                                id="github-token"
                                placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
                                value={githubToken}
                                onChange={(e) => setGithubToken(e.target.value)}
                                className="min-h-[80px] font-mono text-sm"
                                rows={3}
                            />
                            <p className="text-xs text-muted-foreground">
                                Optional: Provide a GitHub token for private repositories or higher API limits.
                                <a
                                    href="https://github.com/settings/tokens"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline ml-1"
                                >
                                    Create token →
                                </a>
                            </p>
                        </div>

                        <div className="flex justify-end space-x-2 pt-2">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={handleClose}
                                disabled={isLoading}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                disabled={isLoading || !name.trim() || !githubUrl.trim()}
                                className="bg-primary hover:bg-primary-hover"
                            >
                                {isLoading ? "Adding..." : "Add Project"}
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default CreateProject;
