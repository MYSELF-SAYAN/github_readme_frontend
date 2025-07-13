"use client";
import React, { useEffect, useState } from 'react';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { House, CreditCard, LayoutDashboard, Plus } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import CreateProject from './create-project';
// import { useStore } from '@/state/store';
import { useAuth } from '@clerk/nextjs';
const AppSidebar = ({ projects }: { projects: any }) => {
  const { userId } = useAuth();
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const sidebarItems = [
    { label: 'Home', icon: House, path: '/' },
    { label: 'Billings', icon: CreditCard, path: '/billings' },
    { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  ];
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onAdd = async (project: any) => {
    try {
      if (!userId) {
        throw new Error("User ID is required");
      }
      const { name, githubUrl, githubToken } = project;
      const response = await axios.post(`${baseUrl}/project/create`, {
        name, repoUrl: githubUrl, githubToken, userId
      });
      setIsModalOpen(false);
      console.log("Project created successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  };
  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Sidebar collapsible='icon' variant='floating'>
      <SidebarHeader>
        <h2>Dashboard</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <Button onClick={() => setIsModalOpen(true)} variant='outline' className='w-full mb-2 cursor-pointer flex items-center justify-between p-3'>Create project
            <Plus className='ml-2 h-4 w-4' />
          </Button>
          <CreateProject isOpen={isModalOpen} onClose={onClose} onAdd={onAdd} />
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {
                sidebarItems.map((item, index) => (
                  <SidebarMenuItem
                    key={index}
                  >
                    <SidebarMenuButton asChild>
                      <Link href={item.path} className={pathname === item.path ? 'bg-purple-700 text-white' : 'text-gray-700 hover:bg-purple-100 hover:text-purple-700'}>
                        <item.icon />
                        <span>

                          {item.label}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              }
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {
                projects.map((item: any, index: number) => (
                  <SidebarMenuItem
                    key={index}
                  >
                    <SidebarMenuButton asChild>
                      <Link href={`/dashboard/${item.id}/generate-readme`} >
                        {/* <item.icon /> */}
                        <span>

                          {item.name}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              }
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
