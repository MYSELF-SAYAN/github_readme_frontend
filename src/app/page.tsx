import ButtonRedirect from "@/components/Home/ButtonRedirect";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  FileText,
  MessageSquare,
  Zap,
  Shield,
  Code2,
  Download,
  Eye,
  Sparkles,
  ChevronRight,
  Star,
  Users,
  Clock
} from "lucide-react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
export default function Home() {
  const features = [
    {
      icon: FileText,
      title: "AI-Powered README Generation",
      description: "Generate comprehensive, professional README files automatically by analyzing your repository structure and code.",
      color: "text-blue-600"
    },
    {
      icon: MessageSquare,
      title: "Chat with Repository",
      description: "Interactive AI assistant that understands your codebase and answers questions about your project.",
      color: "text-green-600"
    },
    {
      icon: Eye,
      title: "Live Markdown Preview",
      description: "Real-time preview of your README with GitHub-style rendering and syntax highlighting.",
      color: "text-purple-600"
    },
    {
      icon: Code2,
      title: "Smart Code Analysis",
      description: "Deep code understanding with file relationship mapping and intelligent documentation suggestions.",
      color: "text-orange-600"
    },
    {
      icon: Download,
      title: "Export & Integration",
      description: "Download your README or integrate directly with GitHub repositories for seamless workflow.",
      color: "text-indigo-600"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your code stays private with optional GitHub token integration and secure processing.",
      color: "text-red-600"
    }
  ];

  const stats = [
    { icon: Users, value: "10K+", label: "Developers" },
    { icon: FileText, value: "50K+", label: "READMEs Generated" },
    { icon: Star, value: "4.9", label: "Rating" },
    { icon: Clock, value: "2min", label: "Avg. Generation Time" }
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Github className="h-8 w-8 text-gray-900" />
            <span className="text-xl font-bold text-gray-900">README Generator</span>
          </div>
          {/* <Link href="/login">
            <Button variant="outline" className="text-gray-900 border-gray-300 hover:bg-gray-50">
              Sign In
            </Button>
          </Link> */}
          <div className='flex gap-2 items-center justify-between w-48 p-2 mb-2'>
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-700 border-blue-200">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Documentation
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Generate Perfect
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> READMEs </span>
            in Minutes
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your repositories with AI-generated documentation. Chat with your code,
            create comprehensive READMEs, and maintain professional project documentation effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/dashboard">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Visit Dashboard
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            {/* <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3">
              <Github className="mr-2 h-5 w-5" />
              Connect with GitHub
            </Button> */}
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-gray-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Perfect Documentation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features designed for developers who want to create and maintain
              professional documentation without the hassle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect Repository</h3>
              <p className="text-gray-600">
                Add your GitHub repository URL and optional access token for private repos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Analysis</h3>
              <p className="text-gray-600">
                Our AI analyzes your code structure, dependencies, and documentation patterns
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Generate & Export</h3>
              <p className="text-gray-600">
                Get your professional README with live preview and export options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Documentation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of developers who've already improved their project documentation with AI.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Start Generating READMEs
              <Zap className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; 2024 GitHub README Generator. Built for developers, by developers.</p>
        </div>
      </footer>
    </div>
  );
}
