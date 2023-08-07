import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";
import Link from "next/link";
import { query } from "../utils/query";
import { defaultBooksList, defaultImageAtom } from "../recoil";
import { useRecoilState } from "recoil";
import Image from "next/image";
import { Book } from "../styles/Types";
import { fetchData } from "../utils/dataFetcher";
import PullToRefresh from "react-simple-pull-to-refresh";

const Scroller: React.FC = () => {
  const { data, fetchNextPage, hasNextPage, isFetching, isError, isLoading } =
    query("booksItems");

  const [defaultImage, _] = useRecoilState(defaultImageAtom);
  const [bookList, setBookList] = useRecoilState<Book[]>(defaultBooksList);

  useEffect(() => {
    if (data) {
      setBookList([...(data?.pages?.flat() || [])]);
    }
  }, [data, setBookList]);

  const handleRefresh = async () => {
    const refreshedData = await fetchData("1");
    setBookList([...refreshedData]);
  };

  if (isError) {
    return <p>Error fetching data. Please try again later.</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <PullToRefresh onRefresh={handleRefresh}>
        <div>
          <div>
            <button
              onClick={handleRefresh}
              style={{ top: 0, position: "absolute" }}
            >
              Refresh
            </button>
          </div>
          <InfiniteScroll
            dataLength={(bookList || []).length}
            next={fetchNextPage}
            hasMore={hasNextPage as boolean}
            loader={<h4>Loading more items...</h4>}
            endMessage={<h4>No more items to load.</h4>}
            scrollThreshold="80%"
          >
            <div className="flex flex-wrap justify-around">
              {bookList?.map((item, index) => (
                <Link
                  href={`/book/${index + 1}`}
                  key={index}
                  className="p-4 inline-block w-96"
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
          </InfiniteScroll>

          {isFetching && <p>Fetching more data...</p>}
        </div>
      </PullToRefresh>
    </div>
  );
};

export default Scroller;
