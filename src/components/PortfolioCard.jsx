const PortfolioCard = () => {
  return (
    <li className="bg-purple-300 w-60 h-72 rounded-xl ">
      {/* 이미지가 들어오면 object-cover 적용해야함 */}
      <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
        프로젝트 이미지
      </div>
      {/* text : 글자 크기, font : 글자 굵기 */}
      <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
      <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
    </li>
  );
};

export default PortfolioCard;
