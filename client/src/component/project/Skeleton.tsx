import React from "react";
import * as Skel from "../../styles/project/skeleton.styled";
function Skeleton() {
  const skeletons = Array.from({ length: 6 }, (_, index) => (
    <Skel.Skeleton className="skeleton" key={index}>
      <div className="skeleton__image" />
      <div className="skeleton__text">
        <div className="skeleton__title" />
        <div className="skeleton__category" />
      </div>
    </Skel.Skeleton>
  ));
  return <>{skeletons}</>;
}

export default Skeleton;
