import {
  getConsecutiveAwardList,
  getMoviesList,
  getMultipleWinnersList,
  getTopStudiosList,
  getWinnerByYearList,
} from "@/services/apiService";
import * as assert from "assert";

describe("API functions", () => {
  test("getMoviesList", async () => {
    const pageSize = 10;
    const res = await getMoviesList(0, pageSize);

    assert.ok(Array.isArray(res.content), "Content does not exist or is not an array");
    assert.equal(res.pageable.pageSize, pageSize, `Page size must be ${pageSize}`);
  });

  test("getWinnerByYearList", async () => {
    const res = await getWinnerByYearList(2015);
    assert.ok(Array.isArray(res), "Response does not exist or is not an array");
  });

  test("getConsecutiveAwardList", async () => {
    const res = await getConsecutiveAwardList();
    assert.ok(Array.isArray(res.min), "Min does not exist or is not an array");
    assert.ok(Array.isArray(res.max), "Max does not exist or is not an array");
  });

  test("getMultipleWinnersList", async () => {
    const res = await getMultipleWinnersList();
    assert.ok(Array.isArray(res.years), "Years property does not exist or is not an array");
  });

  test("getTopStudiosList", async () => {
    const res = await getTopStudiosList();
    assert.ok(Array.isArray(res.studios), "Studios property does not exist or is not an array");
  });
});
