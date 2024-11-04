"use client";

import { Authenticated, Unauthenticated } from "convex/react";
import { RedirectToSignIn } from "@clerk/nextjs";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Link } from "@mui/material";
import { User2Icon, PlusIcon } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarProvider>
        <DashboardSidebar />
        {children}
      </SidebarProvider>
    </>
    /* 
    <>
   
      <Authenticated>{children}</Authenticated>
      <Unauthenticated>
        <RedirectToSignIn />
      </Unauthenticated>
      
    </>*/
  );
}
function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/friends">
                    <User2Icon />
                    Friends
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroup>
            <SidebarGroupLabel>Direct Message</SidebarGroupLabel>
            <SidebarGroupAction>
              <PlusIcon />
              <span className="sr-only"></span>
            </SidebarGroupAction>
          </SidebarGroup>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
