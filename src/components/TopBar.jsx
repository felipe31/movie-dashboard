import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function TopBar({ onPageChange, currentPath }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Frontend Javascript test
          </Typography>
          <Button onClick={() => onPageChange("/")} color="inherit" variant={currentPath === "/" ? "outlined" : ""}>
            Dashboard
          </Button>
          <Button
            onClick={() => onPageChange("/list")}
            color="inherit"
            variant={currentPath === "/list" ? "outlined" : ""}
          >
            List
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
