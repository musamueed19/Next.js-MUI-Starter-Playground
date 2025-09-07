"use client";

import { Add } from "@mui/icons-material";
import { Button, Typography, Paper, Stack, Fab, Icon } from "@mui/material";

export default function DashboardPage() {
  return (
    <Paper style={{ padding: "1rem" }}>
      <Typography variant="h1">Dashboard</Typography>
      <Typography variant="body1">
        This text color and background will follow the theme.
      </Typography>
      <Button variant="contained" color="primary" disableRipple>
        Primary Button
      </Button>
      <Button variant="text" color="success">
        Congratulations! You are passed.
      </Button>

      <Stack direction={"row"} padding={2}>
        <Fab size="large">
          <Add />
        </Fab>
      </Stack>
    </Paper>
  );
}
