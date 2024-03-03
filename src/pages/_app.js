import Layout from "@/components/Layout";
import Dashboard from "./dashboard";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(<Dashboard />);
  const [currentPath, setCurrentPath] = useState("/");

  const onPageChange = (page, path) => {
    setCurrentPage(page);
    setCurrentPath(path);
  };
  return (
    <Layout onPageChange={onPageChange} currentPath={currentPath}>
      {currentPage}
    </Layout>
  );
}
