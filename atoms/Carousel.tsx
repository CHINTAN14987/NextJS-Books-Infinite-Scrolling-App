import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as NextCarousel } from "react-responsive-carousel";
import { useRecoilState } from "recoil";
import { defaultBooksPageAtom } from "../recoil";
const data: string[] = [
  "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80",
  "https://images.unsplash.com/photo-1554357395-dbdc356ca5da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1798&q=80",
];

const Carousel = () => {
  const [defaultBookImages, _] = useRecoilState(defaultBooksPageAtom);
  console.log(defaultBookImages, "jhjhjhjhjjhjhj");
  return (
    <NextCarousel
      autoPlay
      transitionTime={2000}
      showThumbs={false}
      className="carousel-slider"
    >
      {defaultBookImages?.map((image, index) => {
        return (
          <div key={index} className="w-[100%] h-[100%]">
            <img
              src={image}
              alt="book"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
        );
      })}
    </NextCarousel>
  );
};

export default Carousel;
