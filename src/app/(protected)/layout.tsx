
import { SidebarProvider } from '@/components/ui/sidebar'
// import './globals.css'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import App from 'next/app'
import AppSidebar from './dashboard/app-sidebar'
import { getProjects } from '@/services/services'
export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const projects = await getProjects();
    return (
        <SidebarProvider>
            <AppSidebar projects={projects} />
            <main className='w-full m-2'>
                <div className='flex gap-2 items-center border-sidebar-border bg-sidebar border shadow rounded-md p-2 mb-2'>
                    <div className='ml-auto'></div>
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
                <div className='border-sidebar-border bg-sidebar border shadow rounded-md  overflow-y-scroll h-full max-h-[calc(100vh-4rem)] p-4'>
                    {children}
                </div>
            </main>

        </SidebarProvider>
    )
}