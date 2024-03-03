import GenericTable from "@/components/GenericTable";
import { fetchJSON } from "@/utils";
import { useEffect, useState } from "react";

export default function MoviesTable() {
  const headers = new Map([
    ["id", "ID"],
    ["year", "Year"],
    ["title", "Title"],
    ["winner", "Winner?"],
  ]);

  const [data, setData] = useState([]);
  const [pageData, setPageData] = useState({ totalRows: 0, totalPages: 0, curPage: 0, pageSize: 15 });

  function onPageChange(event, newPage) {
    setPageData((prevPageData) => ({
      ...prevPageData,
      curPage: newPage,
    }));
  }
  function onRowsPerPageChange(event) {
    setPageData((prevPageData) => ({
      ...prevPageData,
      pageSize: parseInt(event.target.value, 10),
      curPage: 0,
    }));
  }

  useEffect(() => {
    fetchJSON(
      `https://tools.texoit.com/backend-java/api/movies?page=${pageData.curPage}&size=${pageData.pageSize}`,
    ).then((result) => {
      setData(result.content);
      setPageData({
        totalRows: result.totalElements,
        totalPages: result.totalPages,
        curPage: result.pageable.pageNumber,
        pageSize: result.size,
      });
    });
  }, [pageData.curPage, pageData.pageSize]);

  return (
    <>
      <h2>List movies</h2>
      <GenericTable
        headers={headers}
        data={data}
        pageData={pageData}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </>
  );
}
