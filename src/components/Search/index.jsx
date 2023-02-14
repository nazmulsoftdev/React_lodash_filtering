import React from 'react'

function SearchComponent({ className, SearchHandler, search }) {
  return (
    <>
      <input className={className} type="text" placeholder="Search Here" value={search} onChange={SearchHandler} />
    </>
  );
}

export default SearchComponent