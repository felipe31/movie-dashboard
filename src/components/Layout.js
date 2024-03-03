import { CssBaseline } from "@mui/material";
import TopBar from "./TopBar";

export default function Layout({ children, onPageChange, currentPath }) {
  return (
    <div>
      <CssBaseline />
      <header>
        <TopBar onPageChange={onPageChange} currentPath={currentPath} />
      </header>
      <main>
        <div className="content">{children}</div>
      </main>
    </div>
  );
}
