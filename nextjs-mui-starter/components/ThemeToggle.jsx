import { Button } from "@mui/material";

export default function ThemeToggle({ mode, setMode }) {
  return (
    <Button
      variant="contained"
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
    >
      Switch to {mode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
}
