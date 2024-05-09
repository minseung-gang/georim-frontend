import React from "react";
import * as News from "../../../styles/news/news.styled";

function SkeletonCard() {
  return (
    <News.SkeletonCard>
      <News.SkeletonImage />
      <News.SkeletonContent>
        <News.SkeletonType />
        <News.SkeletonTitle />
        <News.SkeletonDate />
      </News.SkeletonContent>
    </News.SkeletonCard>
  );
}

export default SkeletonCard;
