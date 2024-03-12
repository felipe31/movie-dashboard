import GenericTable from "@/components/GenericTable";
import { getMoviesList } from "@/services/apiService";
import { Box, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function MoviesTable() {
  const [year, setYear] = useState();
  const [isWinner, setIsWinner] = useState();
  const [isValidYear, setIsValidYear] = useState(true);

  const firstYear = 1980;
  const lastYear = new Date().getFullYear();

  function keyPress(e) {
    if (e.keyCode === 13) {
      const numeric = parseInt(e.target.value, 10);
      if (e.target.value.length !== 4 || numeric < firstYear || numeric > lastYear) {
        setIsValidYear(false);
        setYear();
        return;
      }
      setIsValidYear(true);

      setYear(numeric);
      setPageData((prev) => {
        return { ...prev, curPage: 0 };
      });
    }
  }

  const headers = new Map([
    [
      "id",
      <Box sx={{ textAlign: "center" }} key="id">
        ID
      </Box>,
    ],
    [
      "year",
      <>
        <Box sx={{ textAlign: "center" }}>Year</Box>

        <TextField
          sx={{ width: "100%" }}
          size="small"
          type="number"
          label="Filter by year"
          variant="outlined"
          onKeyDown={keyPress}
          error={!isValidYear}
          helperText={isValidYear ? "" : `Choose an year between ${firstYear} and ${lastYear}`}
        />
      </>,
    ],
    [
      "title",
      <Box sx={{ textAlign: "center" }} key="title">
        Title
      </Box>,
    ],
    [
      "winner",
      <>
        <Box sx={{ textAlign: "center" }}>Winner?</Box>
        <Select
          sx={{ width: "100%" }}
          size="small"
          variant="outlined"
          onChange={(val) => {
            setIsWinner(val.target.value);
            setPageData((prev) => {
              return { ...prev, curPage: 0 };
            });
          }}
        >
          <MenuItem value={undefined}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </Select>
      </>,
    ],
  ]);

  const [data, setData] = useState([]);
  const [pageData, setPageData] = useState({ totalRows: 0, totalPages: 0, curPage: 0, pageSize: 10 });

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
    getMoviesList(pageData.curPage, pageData.pageSize, { isWinner, year })
      .then((result) => {
        setData(
          result.content?.map((row) => {
            return { ...row, key: `${row.title}_${row.year}` };
          }),
        );
        setPageData({
          totalRows: result.totalElements,
          totalPages: result.totalPages,
          curPage: result.pageable?.pageNumber,
          pageSize: result.size,
        });
      })
      .catch(() => {});
  }, [pageData.curPage, pageData.pageSize, isWinner, year]);

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
