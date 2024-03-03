import GenericTable from "@/components/GenericTable";
import { fetchJSON } from "@/utils";
import { Paper } from "@mui/material";
import { useEffect, useState } from "react";

export default function TopStudiosTable() {
  const headers = new Map([
    ["name", "Name"],
    ["winCount", "Win Count"],
  ]);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchJSON(`https://tools.texoit.com/backend-java/api/movies?projection=studios-with-win-count`).then((result) => {
      setData(result.studios.slice(0, 3));
    });
  }, []);

  return (
    <Paper sx={{ p: 2, m: 2 }}>
      <h2>Top 3 studios with winners</h2>
      <GenericTable headers={headers} data={data} />
    </Paper>
  );
}
