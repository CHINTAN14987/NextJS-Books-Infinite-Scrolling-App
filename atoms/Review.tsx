import Image from "next/image";
import React from "react";
import likeIcon from "../public/likeIcon.png";
import commentIcon from "../public/commentIcon.png";
import mode from "../public/mode.png";

const Review = (props) => {
  const { CommentData } = props;

  return (
    <div>
      {CommentData?.map((comment, index) => {
        return (
          <div className={`ml-0 my-8 ${index % 2 ? "sm:ml-28" : "sm:ml-14"}`}>
            <div className="flex justify-between items-center my-4">
              <div>
                <Image
                  src={comment?.image}
                  height={150}
                  width={150}
                  style={{ width: "fit-content", height: "50px" }}
                  alt="icon"
                  objectFit="cover"
                />
              </div>
              <span className="font-black text-gray-400 cursor-pointer">
                . . .
              </span>
            </div>
            <div className="ml-0 md:ml-16">
              <p className="font-semibold cursor-pointer">{comment?.review}</p>
              <div className="flex space-x-4 items-center my-4 text-justify">
                {comment?.like && (
                  <Image src={likeIcon} alt="like" height={35} width={35} />
                )}
                {comment?.comment && (
                  <Image
                    src={commentIcon}
                    alt="comment"
                    height={30}
                    width={30}
                  />
                )}
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex space-x-4 items-center py-8 border-t-2">
        <Image
          src={mode}
          height={30}
          width={30}
          objectFit="cover"
          alt="camera-icon"
        />
        <p className="flex-grow text-gray-400 font-bold">댓글을 남겨주세요.</p>
        <span className="text-gray-400 font-bold">등록</span>
      </div>
    </div>
  );
};

export default Review;
