"use client";

import { Logo } from "@/components/shared/logo";
import { MainNav } from "./main-nav";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-8">
          <Logo />
          <MainNav />
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button className="rounded-full px-5 text-xs font-medium">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}
