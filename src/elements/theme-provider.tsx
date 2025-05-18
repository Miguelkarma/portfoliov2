"use client";
import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState, useMemo } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  attribute?: string;
  disableSystemTheme?: boolean;
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  attribute = "class",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Theme;
      return savedTheme || defaultTheme;
    }
    return defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;

    // Clear all theme classes
    root.classList.remove("light", "dark");
    body.classList.remove("light", "dark");

    // Add the current theme class
    if (attribute === "class") {
      root.classList.add(theme);
      body.classList.add(theme);
    }

    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme, attribute]);

  // Initialize theme on mount
  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;

    if (attribute === "class") {
      root.classList.add(theme);
      body.classList.add(theme);
    }
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme: (newTheme: Theme) => setTheme(newTheme),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
