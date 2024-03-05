import ConsecutiveAwardGaps from "@/components/tables/ConsecutiveAwardGaps";
import MultipleWinnersTable from "@/components/tables/MultipleWinnersTable";
import TopStudiosTable from "@/components/tables/TopStudiosTable";
import WinnersByYearTable from "@/components/tables/WinnersByYearTable";
import Dashboard from "@/pages/dashboard";
import { render, screen } from "@testing-library/react";

import * as assert from "assert";

describe("Load dashboard page components", () => {
  test("Load MultipleWinnersTable", () => {
    render(<MultipleWinnersTable />);
    const title = screen.getByText(/multiple winners/);
    const year = screen.getByText(/Year/);
    const count = screen.getByText(/Count/);

    assert.ok(!!title, "Table title not found!");
    assert.ok(!!year, "year column not found!");
    assert.ok(!!count, "count column not found!");
  });

  test("Load TopStudiosTable", () => {
    render(<TopStudiosTable />);
    const title = screen.getByText(/Top 3/);
    const name = screen.getByText(/Name/);
    const count = screen.getByText(/Count/);

    assert.ok(!!title, "Table title not found!");
    assert.ok(!!name, "name column not found!");
    assert.ok(!!count, "count column not found!");
  });

  test("Load WinnersByYearTable", () => {
    render(<WinnersByYearTable />);
    const title = screen.getByText(/List movie/);
    const id = screen.getByText(/Id/);
    const year = screen.getByText(/Year/);
    const movieTitle = screen.getByText(/Title/);

    assert.ok(!!title, "Table title not found!");
    assert.ok(!!id, "id column not found!");
    assert.ok(!!year, "year column not found!");
    assert.ok(!!movieTitle, "title column not found!");
  });

  test("Load ConsecutiveAwardGaps", () => {
    render(<ConsecutiveAwardGaps />);
    const title = screen.getByText(/Producers with/);
    const max = screen.getByText(/Maximum/);
    const min = screen.getByText(/Minimum/);
    const tables = screen.getAllByText(/Previous Year/);

    assert.ok(!!title, "Table title not found!");
    assert.ok(!!max, "max label not found!");
    assert.ok(!!min, "min label not found!");
    assert.equal(tables.length, 2, "Error on finding max and min tables");
  });

  test("Load the entire dashboard page", () => {
    render(<Dashboard />);
    const multipleWinners = screen.getByText(/multiple winners/);
    const topStudios = screen.getByText(/studios with winners/);
    const moviesByYear = screen.getByText(/winners by year/);
    const awardGaps = screen.getByText(/longest and shortest interval/);

    assert.ok(!!multipleWinners, "multipleWinners table not found!");
    assert.ok(!!topStudios, "topStudios table not found!");
    assert.ok(!!moviesByYear, "moviesByYear table not found!");
    assert.ok(!!awardGaps, "awardGaps table not found!");
  });
});
