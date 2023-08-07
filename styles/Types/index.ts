export interface Book {
  title: string;
  discountRate: number;
  coverImage: string;
  price: number;
}
export type QueryData = {
  pages: Book[][];
  pageParams: (number | undefined)[];
  // This assumes that data.pages is an array of arrays of books
  // ... other properties ...
};
