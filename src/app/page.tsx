import { Typography, Button, Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Typography variant="h4" color="primary">
        Welcome to the Home Page
      </Typography>
      <Button variant="contained" color="primary" style={{ marginTop: "1rem" }}>
        Click Me
      </Button>
    </Box>
  );
}
