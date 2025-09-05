import { createTheme } from "@mui/material/styles";

function getCssVarValue(name, fallback) {
  if (typeof window !== "undefined") {
    const value = getComputedStyle(document.documentElement).getPropertyValue(
      name
    );
    return value.trim() || fallback;
  }
  return fallback;
}

export function createAppTheme(mode) {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: getCssVarValue(
          "--color-primary",
          mode === "light" ? "#1976d2" : "#90caf9"
        ),
      },
      secondary: {
        main: getCssVarValue(
          "--color-secondary",
          mode === "light" ? "#9c27b0" : "#ce93d8"
        ),
      },
      background: {
        default: getCssVarValue(
          "--color-bg",
          mode === "light" ? "#ffffff" : "#121212"
        ),
        paper: getCssVarValue(
          "--color-surface",
          mode === "light" ? "#f5f5f5" : "#1e1e1e"
        ),
      },
      text: {
        primary: getCssVarValue(
          "--color-text-primary",
          mode === "light" ? "#000" : "#fff"
        ),
        secondary: getCssVarValue(
          "--color-text-secondary",
          mode === "light" ? "#555" : "#aaa"
        ),
      },
    },
  });
}
