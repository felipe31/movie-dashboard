import { CssBaseline } from "@mui/material";
import TopBar from "./TopBar";

/**
 * Builds the basic layout of the page. Includes the navbar with menu.
 *
 * @export
 * @param {*} { menu, children, onPageChange, currentPath }
 * @return {*}
 */
export default function Layout({ menu, children, onPageChange, currentPath }) {
  return (
    <div>
      <CssBaseline />
      <header>
        <TopBar menu={menu} onPageChange={onPageChange} currentPath={currentPath} />
      </header>
      <main>
        <div className="content">{children}</div>
      </main>
    </div>
  );
}
