import React from 'react'

function TitleComponent({ className, selectRequest }) {
  return (
    <div>
      <h4 className={className}> {selectRequest} API Requested</h4>
    </div>
  );
}

export default TitleComponent