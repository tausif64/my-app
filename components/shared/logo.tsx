import React from "react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-xs font-bold">
        CA
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-sm font-semibold">Catalyst</span>
        <span className="text-[10px] text-muted-foreground">Analytics</span>
      </div>
    </div>
  );
}
