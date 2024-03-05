import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

import React from "react";
/**
 * Builds a table based on `headers` order and keys.
 * `headers` is a map to define existing keys and table headers text.
 * `data` must be an object with all keys included in `headers`.
 * Additionally, `data` must include a unique `key` attribtute for each item.
 *
 * @export
 * @param {*} { headers, data }
 * @return {*}
 */
export default function GenericTable(props) {
  if (!props.headers instanceof Map || !props.headers) {
    return <>No data</>;
  }

  const tableHeaders = [];
  const tableData = [];

  for (const col of props.headers.values()) {
    tableHeaders.push(
      <TableCell variant="head" key={col}>
        {col}
      </TableCell>,
    );
  }
  for (const row of props.data) {
    const tableRow = [];
    for (const col of props.headers.keys()) {
      let value = row[col];
      if (typeof row[col] === "boolean") {
        value = row[col] ? "Yes" : "No";
      }

      tableRow.push(<TableCell key={`${row.key}_${col}`}>{value}</TableCell>);
    }

    tableData.push(<TableRow key={row.key}>{tableRow}</TableRow>);
  }

  return (
    <Paper>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>{tableHeaders}</TableRow>
          </TableHead>
          <TableBody>{tableData}</TableBody>
        </Table>
      </TableContainer>
      {props.pageData && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 20, 25]}
          component="div"
          count={props.pageData.totalRows}
          rowsPerPage={props.pageData.pageSize}
          page={props.pageData.curPage}
          onPageChange={props.onPageChange}
          onRowsPerPageChange={props.onRowsPerPageChange}
        />
      )}
    </Paper>
  );
}
