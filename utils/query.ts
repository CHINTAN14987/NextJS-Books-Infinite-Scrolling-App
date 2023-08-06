import { useInfiniteQuery } from "react-query";
import { fetchData } from "./dataFetcher";
export const query = (type) => {
  const { data, fetchNextPage, hasNextPage, isFetching, isError, isLoading } =
    useInfiniteQuery(type, ({ pageParam = 1 }) => fetchData(pageParam), {
      getNextPageParam: (lastPage) =>
        lastPage.length > 0 ? lastPage.length / 10 + 1 : false,
    });
  return { data, fetchNextPage, hasNextPage, isFetching, isError, isLoading };
};
