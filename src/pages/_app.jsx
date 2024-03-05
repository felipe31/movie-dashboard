import Layout from "@/components/Layout";
import Dashboard from "./dashboard";
import { useState } from "react";
import "../styles/globals.css";
import List from "./list";

export default function Home() {
  const [currentPath, setCurrentPath] = useState("/");

  const onPageChange = (path) => {
    setCurrentPath(path);
  };

  return (
    <Layout onPageChange={onPageChange} currentPath={currentPath}>
      {currentPath === "/" && <Dashboard key="d1" />}
      {currentPath === "/list" && <List key="l1" />}
    </Layout>
  );
}
