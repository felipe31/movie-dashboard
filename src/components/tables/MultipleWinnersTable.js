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

  useEffect(() => {
    fetchJSON(`https://tools.texoit.com/backend-java/api/movies?projection=years-with-multiple-winners`).then(
      (result) => {
        setData(
          result.years.map((row) => {
            return { ...row, key: `${row.year}_${row.winnerCount}` };
          }),
        );
      },
    );
  }, []);

  return (
    <Paper sx={{ p: 2, m: 2 }}>
      <h2>List years with multiple winners</h2>
      <GenericTable headers={headers} data={data} />
    </Paper>
  );
}
