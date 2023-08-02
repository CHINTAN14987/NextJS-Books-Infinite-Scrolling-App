import React from "react";
import axios from "axios";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";
import Link from "next/link";
import { fetchData } from "../utils";
import { query } from "../utils/query";

const Home = () => {
  const { data, fetchNextPage, hasNextPage, isFetching, isError, isLoading } =
    query("booksItems");

  const handleRefresh = () => {
    // Refetch the first page
    fetchNextPage(1);
  };

  if (isError) {
    return <p>Error fetching data. Please try again later.</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(data);
  return (
    <div>
      <h1>Card Type List</h1>
      <InfiniteScroll
        dataLength={(data?.pages?.flat() || []).length}
        next={fetchNextPage}
        hasMore={hasNextPage as boolean}
        loader={<h4>Loading more items...</h4>}
        endMessage={<h4>No more items to load.</h4>}
        scrollThreshold="80%"
        className="grid grid-cols-3"
      >
        {data?.pages?.flat()?.map((item, index) => (
          <Link href={`/book/${index + 1}`}>
            <Card
              id={index}
              title={item?.title}
              discountRate={item?.discountRate}
              coverImage={item?.coverImage}
              price={item?.price}
            />
          </Link>
        ))}
      </InfiniteScroll>

      {isFetching && <p>Fetching more data...</p>}
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default Home;
