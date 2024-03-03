import Dashboard from "@/pages/dashboard";
import List from "@/pages/list";

const { Box, AppBar, Toolbar, Typography, Button } = require("@mui/material");

export default function TopBar({ onPageChange, currentPath }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Frontend Javascript test
          </Typography>
          <Button
            onClick={() => onPageChange(<Dashboard />, "/")}
            color="inherit"
            variant={currentPath === "/" ? "outlined" : ""}
          >
            Dashboard
          </Button>
          <Button
            onClick={() => onPageChange(<List />, "/list")}
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
