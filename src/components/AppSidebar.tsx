import { Home, FileText, Code2, Youtube, Mail } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Artikel", url: "/artikel", icon: FileText },
  { title: "Proyek", url: "/proyek", icon: Code2 },
  { title: "Channel YT", url: "/channel", icon: Youtube },
  { title: "Sosmed", url: "/sosmed", icon: Mail },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") return currentPath === path;
    return currentPath.startsWith(path);
  };

  return (
    <Sidebar className={open ? "w-60" : "w-16"} collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold px-4 py-6">
            {open && "KOPI SUSU"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={isActive(item.url) ? "bg-sidebar-accent" : ""}
                  >
                    <NavLink to={item.url} end={item.url === "/"}>
                      <item.icon className="h-5 w-5" />
                      {open && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
