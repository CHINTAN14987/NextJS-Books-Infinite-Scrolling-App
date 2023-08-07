import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";
import Link from "next/link";
import { query } from "../utils/query";
import { defaultBooksList, defaultImageAtom } from "../recoil";
import { useRecoilState } from "recoil";
import Image from "next/image";
import { Book } from "../styles/Types";
import Scroller from "../components/Scroller";

const HomePage: React.FC = () => {
  const { data, fetchNextPage, hasNextPage, isFetching, isError, isLoading } =
    query("booksItems");
  const [defaultImage, _] = useRecoilState(defaultImageAtom);
  const [bookList, setBookList] = useRecoilState<Book[]>(defaultBooksList);

  useEffect(() => {
    if (data) {
      setBookList([...(data?.pages?.flat() || [])]);
    }
  }, [data, setBookList]);

  //   const handleRefresh = () => {
  //     fetchNextPage(1);
  //   };
  console.log(bookList, "bookList");
  if (isError) {
    return <p>Error fetching data. Please try again later.</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="font-extrabold text-3xl text-center flex-grow">Books</h1>
        <Image
          src={defaultImage}
          width={60}
          height={50}
          alt="avatar"
          objectFit="contain"
          className="rounded-full w-12 h-12"
        />
      </div>
      <Scroller />
    </div>
  );
};

export default HomePage;
