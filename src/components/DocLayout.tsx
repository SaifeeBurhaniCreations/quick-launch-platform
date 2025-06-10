
import { useState, useEffect } from 'react';
import { SidebarNav, type SidebarNavItem } from './SidebarNav';
import { DocHeader } from './DocHeader';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface DocLayoutProps {
  children: React.ReactNode;
  items: SidebarNavItem[];
  className?: string;
}

export function DocLayout({ children, items, className }: DocLayoutProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close mobile sidebar when route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <DocHeader onMenuToggle={() => setIsMobileOpen(!isMobileOpen)} />
      
      <div className="container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
        {/* Sidebar */}
        <aside
          className={cn(
            "fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block",
            isMobileOpen && "fixed inset-0 top-14 z-40 block h-[calc(100vh-3.5rem)] bg-background",
            className
          )}
        >
          <ScrollArea className="py-6 pr-6 lg:py-8">
            <SidebarNav items={items} />
          </ScrollArea>
        </aside>

        {/* Main content */}
        <main className="relative py-6 lg:gap-10 lg:py-8">
          <div className="mx-auto w-full min-w-0">
            <div className="doc-content">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
