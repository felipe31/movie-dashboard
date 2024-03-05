import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";

/**
 * Defines the navigation bar with a list of buttons defined by menu.
 * `menu` is a Map<string, string>. Its key is the path, its value is the menu
 * label.
 *
 * @export
 * @param {*} { onPageChange, currentPath, menu }
 * @return {*}
 */
export default function TopBar({ onPageChange, currentPath, menu }) {
  const buttons = [];

  if (menu instanceof Map) {
    for (const [path, label] of menu.entries()) {
      buttons.push(
        <Button
          key={path}
          onClick={() => onPageChange(path)}
          color="inherit"
          variant={currentPath === path ? "outlined" : ""}
        >
          {label}
        </Button>,
      );
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Frontend Javascript test
          </Typography>
          {buttons}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
