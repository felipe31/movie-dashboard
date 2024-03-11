import GenericTable from "@/components/GenericTable";
import { fetchJSON } from "@/utils";
import { Paper } from "@mui/material";
import { useEffect, useState } from "react";

export default function MultipleWinnersTable() {
  const headers = new Map([
    ["year", "Year"],
    ["winnerCount", "Win Count"],
  ]);

  const [data, setData] = useState([]);
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    if (!url) return;

    fetchJSON(`${url}?projection=years-with-multiple-winners`).then((result) => {
      setData(
        result.years?.map((row) => {
          return { ...row, key: `${row.year}_${row.winnerCount}` };
        }),
      );
    });
  }, [url]);

  return (
    <Paper sx={{ p: 2, m: 2 }}>
      <h2>List years with multiple winners</h2>
      <GenericTable headers={headers} data={data} />
    </Paper>
  );
}
