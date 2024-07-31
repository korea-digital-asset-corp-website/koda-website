import React from "react";
import NewsCard from "src/components/card/NewsCard";
import images from "src/images";

export default {
  title: "@Component/Card",
};

export const _NewsCard = {
  render: () => (
    <NewsCard
      thumnailImage={images.newsMaekyungSrc}
      title={`KB국민은행, 디지털자산관리 기업에 
  전략적 투자`}
      caption={"매일경제, 2020.11"}
      uri={""}
    />
  ),

  name: "NewsCard",
};
