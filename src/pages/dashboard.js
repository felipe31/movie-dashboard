import ConsecutiveAwardGaps from "@/components/tables/ConsecutiveAwardGaps";
import MultipleWinnersTable from "@/components/tables/MultipleWinnersTable";
import TopStudiosTable from "@/components/tables/TopStudiosTable";
import WinnersByYearTable from "@/components/tables/WinnersByYearTable";
import { Grid } from "@mui/material";

export default function Dashboard() {
  return (
    <Grid container>
      <Grid item md={12} lg={6}>
        <MultipleWinnersTable />
        <ConsecutiveAwardGaps />
      </Grid>
      <Grid item md={12} lg={6}>
        <TopStudiosTable />
        <WinnersByYearTable />
      </Grid>
    </Grid>
  );
}
