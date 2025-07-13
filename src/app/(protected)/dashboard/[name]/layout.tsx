
import { SidebarProvider } from '@/components/ui/sidebar'
import App from 'next/app'
import { getProjects } from '@/services/services'

import Link from 'next/link';
import TabGroup from './tabgroup';
export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const projects = await getProjects();
  
    return (
        <div>
            <TabGroup />
            {children}
        </div>
    )
}