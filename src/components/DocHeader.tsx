
import { Button } from "@/components/ui/button";
import { MenuIcon, GithubIcon } from "lucide-react";

interface DocHeaderProps {
  onMenuToggle: () => void;
}

export function DocHeader({ onMenuToggle }: DocHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          onClick={onMenuToggle}
        >
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <div className="flex items-center gap-2 font-bold">
          <div className="bg-sbc-700 text-white rounded p-1">SBC</div>
          <span>Deploy</span>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search can be added here in the future */}
          </div>
          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="GitHub">
              <GithubIcon className="h-5 w-5" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
