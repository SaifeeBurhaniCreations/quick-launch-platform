
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from 'lucide-react';

export type SidebarNavItem = {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  items?: SidebarNavItem[];
};

interface SidebarNavProps {
  items: SidebarNavItem[];
  className?: string;
}

export function SidebarNav({ items, className }: SidebarNavProps) {
  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      {items.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </div>
  );
}

function NavItem({ item }: { item: SidebarNavItem }) {
  const [expanded, setExpanded] = useState(false);
  const hasItems = !!item.items?.length;

  return (
    <div className="flex flex-col">
      <div
        className={cn(
          "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium",
          hasItems && "cursor-pointer hover:bg-muted",
          item.href ? "text-foreground hover:bg-muted" : "text-muted-foreground"
        )}
        onClick={() => hasItems && setExpanded(!expanded)}
      >
        <a 
          href={item.href || "#"} 
          className={cn(
            "flex-1",
            !item.href && hasItems ? "cursor-pointer" : ""
          )}
          onClick={(e) => hasItems && !item.href && e.preventDefault()}
        >
          <span className="flex items-center gap-2">
            {item.icon && <span className="w-4 h-4">{item.icon}</span>}
            {item.title}
          </span>
        </a>
        {hasItems && (
          <ChevronDownIcon 
            className={cn(
              "h-4 w-4 transition-transform", 
              expanded ? "transform rotate-180" : ""
            )} 
          />
        )}
      </div>
      
      {hasItems && expanded && (
        <div className="ml-4 mt-1 flex flex-col gap-1 pl-2 border-l border-border">
          {item.items?.map((subItem, index) => (
            <NavItem key={index} item={subItem} />
          ))}
        </div>
      )}
    </div>
  );
}
