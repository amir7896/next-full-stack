import { Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" color="primary">
        Welcome to the Home Page
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "1rem" }}
      >
        Click Me
      </Button>
    </div>
  );
}
