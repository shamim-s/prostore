"use client";
import useTheme, { ThemeProvider } from "next-theme";
import React from "react";

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={theme}
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
