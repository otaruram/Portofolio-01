import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Menu } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="sticky top-0 z-10 h-14 border-b border-border bg-sidebar/95 backdrop-blur supports-[backdrop-filter]:bg-sidebar/80">
            <div className="flex h-full items-center px-4">
              <SidebarTrigger>
                <Menu className="h-5 w-5" />
              </SidebarTrigger>
              <div className="ml-4 font-bold text-lg">Oki Taruna Ramadhan</div>
            </div>
          </header>
          <main className="flex-1 p-6 md:p-8 lg:p-12">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
