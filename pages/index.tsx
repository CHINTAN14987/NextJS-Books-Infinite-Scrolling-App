import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";
import Link from "next/link";
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
      >
        <div className="">
          <div className="flex flex-wrap justify-around">
            {data?.pages?.flat()?.map((item, index) => (
              <Link
                href={`/book/${index + 1}`}
                className=" p-4 inline-block w-96"
              >
                <Card
                  id={index}
                  title={item?.title}
                  discountRate={item?.discountRate}
                  coverImage={item?.coverImage}
                  price={item?.price}
                />
              </Link>
            ))}
          </div>
        </div>
      </InfiniteScroll>

      {isFetching && <p>Fetching more data...</p>}
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default Home;
