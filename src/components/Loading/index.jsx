import React from 'react';
import ReactLoading from "react-loading";


function LoadingComponent({ type, width, height,color }) {
  return (
    <div
      style={{
        margin: "auto",
        width: width,
        height:  height ,
       
      }}
    >
      <ReactLoading type={type} width={width} height={height} color={color} />
    </div>
  );
}

export default LoadingComponent