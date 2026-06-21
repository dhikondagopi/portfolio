import { useEffect, ReactNode } from "react";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light");
    root.classList.add("dark");

    localStorage.setItem("theme", "dark");
  }, []);

  return <>{children}</>;
};