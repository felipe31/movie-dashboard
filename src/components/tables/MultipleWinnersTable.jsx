import GenericTable from "@/components/GenericTable";
import { getMultipleWinnersList } from "@/services/apiService";
import { Paper } from "@mui/material";
import { useEffect, useState } from "react";

export default function MultipleWinnersTable() {
  const headers = new Map([
    ["year", "Year"],
    ["winnerCount", "Win Count"],
  ]);

  const [data, setData] = useState([]);

  useEffect(() => {
    getMultipleWinnersList()
      .then((result) => {
        setData(
          result.years?.map((row) => {
            return { ...row, key: `${row.year}_${row.winnerCount}` };
          }),
        );
      })
      .catch(() => {});
  }, []);

  return (
    <Paper sx={{ p: 2, m: 2 }}>
      <h2>List years with multiple winners</h2>
      <GenericTable headers={headers} data={data} />
    </Paper>
  );
}
