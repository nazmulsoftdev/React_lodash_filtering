import React from 'react'

function RangeComponent({ className, selectRequest, HandlerRequest }) {
  return (
    <div>
      <select
        className={className}
        value={selectRequest}
        onChange={HandlerRequest}
      >
        <option value="20">Select The Request API</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="300">300</option>
      </select>
    </div>
  );
}

export default RangeComponent