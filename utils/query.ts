import { useInfiniteQuery } from "react-query";
import { fetchData } from "./index";
export const query = (type) => {
  const API_URL = "http://15.165.74.54:3000";
  const { data, fetchNextPage, hasNextPage, isFetching, isError, isLoading } =
    useInfiniteQuery(
      type,
      ({ pageParam = 1 }) => fetchData(`${API_URL}/?page=${pageParam}`),
      {
        getNextPageParam: (lastPage) =>
          lastPage.length > 0 ? lastPage.length / 10 + 1 : false,
      }
    );
  return { data, fetchNextPage, hasNextPage, isFetching, isError, isLoading };
};
