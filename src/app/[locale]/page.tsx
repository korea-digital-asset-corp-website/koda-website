const page = async () => {
  return (
    <div className="">
      <h1 className="text-display-lg">큰 제목</h1>
      <h2 className="text-display-md">중간 제목</h2>
      <h3 className="text-display-sm">작은 제목</h3>

      <h1 className="text-headline-lg">헤드라인 라지</h1>
      <h2 className="text-headline-md">헤드라인 미디엄</h2>
      <h3 className="text-headline-sm">헤드라인 스몰</h3>
      <h4 className="text-headline-xs">헤드라인 엑스트라스몰</h4>

      <h3 className="text-title-lg">제목 라지</h3>
      <h4 className="text-title-md">제목 미디엄</h4>
      <h5 className="text-title-sm">제목 스몰</h5>

      <label className="text-label-lg">라벨 라지</label>
      <label className="text-label-md">라벨 미디엄</label>
      <label className="text-label-sm">라벨 스몰</label>

      <p className="text-body-xl">본문 엑스트라라지</p>
      <p className="text-body-lg">본문 라지</p>
      <p className="text-body-md">본문 미디엄</p>
      <p className="text-body-sm">본문 스몰</p>

      <span className="text-caption-lg">캡션 라지</span>
      <span className="text-caption-sm">캡션 스몰</span>
    </div>
  );
};

export default page;
