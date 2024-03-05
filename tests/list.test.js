import MoviesTable from "@/components/tables/MoviesTable";
import List from "@/pages/list";
import { render, screen } from "@testing-library/react";
import * as assert from "assert";

describe("Load list page components", () => {
  test("Load MoviesTable", () => {
    render(<MoviesTable />);
    const title = screen.getByText(/List movies/);
    const id = screen.getByText(/ID/);
    const year = screen.getByText(/Year/);
    const movieTitle = screen.getByText(/Title/);
    const winner = screen.getAllByText(/Winner\?/);

    assert.ok(!!title, "Table title not found!");
    assert.ok(!!id, "id column not found!");
    assert.ok(!!year, "year column not found!");
    assert.ok(!!movieTitle, "title column not found!");
    assert.ok(!!winner, "winner column not found!");
  });

  test("Load the entire dashboard page", () => {
    render(<List />);
    const movies = screen.getByText(/List movies/);

    assert.ok(!!movies, "List movies table not found!");
  });
});
