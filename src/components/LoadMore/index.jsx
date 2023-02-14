import React from 'react'

function LoadMoreComponent({ children, LoadmoreCard,className }) {
  return (
    <div style={{textAlign:"center",marginTop:"10px"}}>
      <button onClick={LoadmoreCard} className={className}>{children}</button>
    </div>
  );
}

export default LoadMoreComponent