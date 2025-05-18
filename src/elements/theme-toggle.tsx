"use client";
import { useCallback, memo, useRef, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Switch } from "@/components/ui/switch";

export const ThemeToggle = memo(function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isTransitioning = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const toggleTheme = useCallback(() => {
    if (isTransitioning.current) return;

    isTransitioning.current = true;

    requestAnimationFrame(() => {
      setTheme(theme === "light" ? "dark" : "light");

      timeoutRef.current = setTimeout(() => {
        isTransitioning.current = false;
      }, 200);
    });
  }, [theme, setTheme]);

  const sunClasses =
    theme === "dark"
      ? "h-[1.2rem] w-[1.2rem] text-muted-foreground scale-75 rotate-12 transition-transform duration-300"
      : "h-[1.2rem] w-[1.2rem] text-foreground scale-100 rotate-0 transition-transform duration-300";

  const moonClasses =
    theme === "light"
      ? "h-[1.2rem] w-[1.2rem] text-muted-foreground scale-75 rotate-12 transition-transform duration-300"
      : "h-[1.2rem] w-[1.2rem] text-foreground scale-100 rotate-0 transition-transform duration-300";

  return (
    <div className="flex items-center space-x-2">
      <Sun className={sunClasses} />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <Moon className={moonClasses} />
    </div>
  );
});
