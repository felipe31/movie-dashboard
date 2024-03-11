import { fetchJSON } from "./utils";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

/**
 * Retrieve the movie list based on page number and page size.
 *
 * @export
 * @param {number} pageNum
 * @param {number} pageSize
 * @return {{
 *      content: {
 *          id: number,
 *          year: number,
 *          title: number,
 *          studios: string[],
 *          producers: string[],
 *          winner: boolean
 *      }[],
 *      pageable: {
 *          sort: {
 *              sorted: boolean,
 *              unsorted: boolean,
 *          },
 *          pageSize: number,
 *          pageNumber: number,
 *          offset: number,
 *          paged: boolean,
 *          unpaged: boolean,
 *      },
 *      totalElements: number,
 *      last: boolean,
 *      totalPages: number,
 *      first: boolean,
 *      sort: {
 *          sorted: boolean,
 *          unsorted: boolean,
 *       },
 *      number: number,
 *      numberOfElements: number,
 *      size: number,
 *  }}
 */
export async function getMoviesList(pageNum, pageSize) {
  if (!!BASE_URL && !isNaN(pageNum) && !isNaN(pageSize)) {
    const res = await fetchJSON(`${BASE_URL}?page=${pageNum}&size=${pageSize}`);

    if (!!res) {
      return res;
    }
  }
  throw new Error("Error while retrieving the movies list!");
}

/**
 * Retrieve the list of winners for a given year.
 *
 * @export
 * @param {number} year
 * @return {{
 *      id: number,
 *      year: number,
 *      title: string,
 *      studios: string[],
 *      producers: string[],
 *      winner: boolean,
 *  }[]}
 */
export async function getWinnerByYearList(year) {
  if (!!BASE_URL && !isNaN(year)) {
    const res = await fetchJSON(`${BASE_URL}?winner=true&year=${year}`);

    if (!!res) {
      return res;
    }
  }
  throw new Error("Error while retrieving the top studios list!");
}

/**
 * Retrieves the list of consecurive awards
 *
 * @export
 * @return {{
 *      max: {
 *          producer: string,
 *          interval: number,
 *          previousWin: number,
 *          followingWin: number,
 *      }[],
 *           max:{producer: string,
 *          interval: number,
 *          previousWin: number,
 *          followingWin: number,
 *      }[]
 *  }}
 */
export async function getConsecutiveAwardList() {
  if (!!BASE_URL) {
    const res = await fetchJSON(`${BASE_URL}?projection=max-min-win-interval-for-producers`);

    if (!!res) {
      return res;
    }
  }
  throw new Error("Error while retrieving the consecutive award list!");
}

/**
 *
 *
 * @export
 * @return {{
 *      years: {
 *          year: number,
 *          winnerCount: number,
 *      }[]
 *  }}
 */
export async function getMultipleWinnersList() {
  if (!!BASE_URL) {
    const res = await fetchJSON(`${BASE_URL}?projection=years-with-multiple-winners`);

    if (!!res) {
      return res;
    }
  }
  throw new Error("Error while retrieving the multiple winners list!");
}

/**
 *
 *
 * @export
 * @return {{
 *      studios: {
 *          name: string,
 *          winCount: number
 *      }[]
 *  }}
 */
export async function getTopStudiosList() {
  if (!!BASE_URL) {
    const res = await fetchJSON(`${BASE_URL}?projection=studios-with-win-count`);

    if (!!res) {
      return res;
    }
  }
  throw new Error("Error while retrieving the multiple winners list!");
}
