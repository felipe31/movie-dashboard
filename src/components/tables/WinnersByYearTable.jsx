import GenericTable from "@/components/GenericTable";
import { fetchJSON } from "@/utils";
import { Button, Grid, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function WinnersByYearTable() {
  const headers = new Map([
    ["id", "Id"],
    ["year", "Year"],
    ["title", "Title"],
  ]);

  const [data, setData] = useState([]);
  const [year, setYear] = useState();

  useEffect(() => {
    fetchJSON(`https://tools.texoit.com/backend-java/api/movies?winner=true&year=${year}`).then((result) =>
      setData(
        result.map((row) => {
          return { ...row, key: row.id };
        }),
      ),
    );
  }, [year]);

  let yearText = year;
  return (
    <Paper sx={{ p: 2, m: 2 }}>
      <h2>List movie winners by year</h2>
      <Grid sx={{ my: 2 }} container>
        <Grid item xs={10}>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Search by year"
            variant="outlined"
            onChange={(val) => (yearText = val.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button onClick={() => setYear(parseInt(yearText, 10))} sx={{ mx: 2, height: "100%" }} variant="outlined">
            Search
          </Button>
        </Grid>
      </Grid>
      <GenericTable headers={headers} data={data} />
    </Paper>
  );
}
