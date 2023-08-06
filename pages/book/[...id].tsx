import React from "react";
import { query } from "../../utils/query";
import { fetchData } from "../../utils/dataFetcher";
import Carousel from "../../components/Carousel";
import reviewIconOne from "../../public/reviewIconOne.png";
import likeIcon from "../../public/likeIcon.png";
import commentIcon from "../../public/commentIcon.png";
import Image from "next/image";
import Review from "../../components/Review";
import detailSection from "../../components/Description";
import Description from "../../components/Description";
import { defaultImageAtom } from "../../recoil";
import { useRecoilState } from "recoil";
const Book = (props) => {
  const [defaultImage, _] = useRecoilState(defaultImageAtom);
  console.log(defaultImage);
  const { data } = props;
  const commentSectionData = [
    {
      review:
        "은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 \n 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트로, \n 최종 결과물에 들어가는 실제적인 문장 내용이 채워지기 전에 시각 디자인 \n 프로젝트 모형의 채움 글로도 이용된다. 이런 용도로 사용할 때 로렘 입숨을 그리킹 이라고도 부르며, 때로 로렘 입숨은 공간만 차지하는 무언가를 지칭하는 용어로도 사용된다. 로렘 입숨은 전통 라틴어와 닮은 점 때문에 종종 호기심을 유발하기도 하지만 그 이상의 의미를 담지는 않는다. 문서에서 텍스트가 보이면 사람들은 전체적인 프레젠테이션보다는 텍스트에 담긴 뜻에 집중하는 경향이 있어서 출판사들은 서체나 디자인을 보일 때는 프레젠테이션 자체에 초점을 맞추기 위해 로렘 입숨을 사용한다.",
      like: true,
      comment: true,
      image: "/reviewIconOne.png",
    },
    {
      review: "오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다",
      like: true,
      comment: false,
      image: "/reviewIconTwo.png",
    },
  ];
  return (
    <div className="p-2">
      <h3 className="text-7xl font-extrabold text-center mb-4">
        이건 책이에요
      </h3>
      {/* <svg>
        <Image src={defaultImage} width={50} height={50} alt="" />
      </svg> */}
      <Carousel />
      <Description
        price={data?.[0]?.price}
        description=" 은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은
        그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트로,
        최종 결과물에 들어가는 실제적인 문장 내용이 채워지기 전에 시각 디자인
        프로젝트 모형의 채움 글로도 이용된다. 이런 용도로 사용할 때 로렘 입숨을
        그리킹 이라고도 부르며, 때로 로렘 입숨은 공간만 차지하는 무언가를
        지칭하는 용어로도 사용된다. 로렘 입숨은 전통 라틴어와 닮은 점 때문에
        종종 호기심을 유발하기도 하지만 그 이상의 의미를 담지는 않는다. 문서에서
        텍스트가 보이면 사람들은 전체적인 프레젠테이션보다는 텍스트에 담긴 뜻에
        집중하는 경향이 있어서 출판사들은 서체나 디자인을 보일 때는 프레젠테이션
        자체에 초점을 맞추기 위해 로렘 입숨을 사용한다."
        discountRate={data?.[0]?.discountRate}
        title="이건 책이에요"
      />
      <Review CommentData={commentSectionData} />
    </div>
  );
};
export async function getServerSideProps() {
  const data = await fetchData(1);

  return {
    props: { data: data },
  };
}
export default Book;
