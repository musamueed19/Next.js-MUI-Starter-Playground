"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { useState, useMemo, useEffect } from "react";
import { createAppTheme } from "@/lib/theme";

export default function DashboardLayout({ children }) {
  const [mode, setMode] = useState("light");

  // create theme when mode changes
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  // sync CSS vars with current mode
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", mode);
    }
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        style={{ margin: "1rem" }}
      >
        Toggle Mode
      </button>

      {children}
    </ThemeProvider>
  );
}
