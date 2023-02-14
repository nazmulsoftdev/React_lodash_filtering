import React from 'react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function LoadSkeleton({count}) {
  return (
    <>
      <p>
       
        <Skeleton count={count} />
      </p>
    </>
  );
}

export default LoadSkeleton