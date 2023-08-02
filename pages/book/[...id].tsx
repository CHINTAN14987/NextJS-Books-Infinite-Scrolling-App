import React from "react";
import { query } from "../../utils/query";
const Book = (props) => {
  const { data, fetchNextPage, hasNextPage, isFetching, isError, isLoading } =
    query("book");
  console.log(data);
  console.log(props);
  return <div>Book</div>;
};
// export async function getServerSideProps(context) {
//   return {
//     props: { data, fetchNextPage, hasNextPage, isFetching, isError, isLoading },
//   };
// }
export default Book;
