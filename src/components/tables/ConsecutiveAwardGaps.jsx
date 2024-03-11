import GenericTable from "@/components/GenericTable";
import { getConsecutiveAwardList } from "@/services/apiService";
import { Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function ConsecutiveAwardGaps() {
  const headers = new Map([
    ["producer", "Producer"],
    ["interval", "Interval"],
    ["previousWin", "Previous Year"],
    ["followingWin", "Following Year"],
  ]);

  const [dataMax, setDataMax] = useState([]);
  const [dataMin, setDataMin] = useState([]);

  useEffect(() => {
    getConsecutiveAwardList()
      .then((result) => {
        setDataMax(
          result?.max?.map((row) => {
            return { ...row, key: `${row.producer}_${row.previousWin}` };
          }),
        );
        setDataMin(
          result?.min?.map((row) => {
            return { ...row, key: `${row.producer}_${row.previousWin}` };
          }),
        );
      })
      .catch(() => {});
  }, []);

  return (
    <Paper sx={{ p: 2, m: 2 }}>
      <h2>Producers with longest and shortest interval between wins</h2>
      <Typography sx={{ mt: 2 }} variant="h6">
        Maximum
      </Typography>
      <GenericTable headers={headers} data={dataMax} />

      <Typography sx={{ mt: 2 }} variant="h6">
        Minimum
      </Typography>
      <GenericTable headers={headers} data={dataMin} />
    </Paper>
  );
}
