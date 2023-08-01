// pages/index.js
import React from "react";
import axios from "axios";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";

const API_URL = "http://15.165.74.54:3000";

const Home = () => {
  const fetchItems = async (page = 1) => {
    const response = await fetch(`${API_URL}/?page=${page}`);

    const output = await response.json();

    return output.data;
  };

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery(
    "items",
    ({ pageParam = 1 }) => fetchItems(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.nextPage) {
          return lastPage.nextPage;
        }
        return false;
      },
    }
  );

  const handleRefresh = () => {
    // Refetch the first page
    fetchNextPage(1);
  };
  console.log(data, "data");
  return (
    <div>
      <h1>Card Type List</h1>
      <InfiniteScroll
        dataLength={
          data?.pages.reduce(
            (total, page) => total + page?.results?.length,
            0
          ) || 0
        }
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<h4>Loading...</h4>}
        endMessage={<h4>No more items to load.</h4>}
        scrollThreshold="80%"
      >
        {console.log(data)}
        {data?.pages.map((page, pageIndex) =>
          page?.results?.map((item) => (
            <Card
              key={`${pageIndex}-${item.id}`}
              title={item.title}
              discountRate={item.discountRate}
              coverImage={item.coverImage}
              price={item.price}
            />
          ))
        )}
      </InfiniteScroll>

      {isFetching && <p>Fetching more data...</p>}
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default Home;
