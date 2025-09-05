"use client";

import { Button, Typography, Paper } from "@mui/material";

export default function DashboardPage() {
  return (
    <Paper style={{ padding: "1rem" }}>
      <Typography variant="h1">Dashboard</Typography>
      <Typography variant="body1">
        This text color and background will follow the theme.
      </Typography>
      <Button variant="contained" color="primary">
        Primary Button
      </Button>
    </Paper>
  );
}
