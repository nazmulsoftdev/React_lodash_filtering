import React from 'react'
import RangeComponent from '../Range';
import SearchComponent from '../Search';
import TitleComponent from '../Title';

function HeaderComponent({
  selectRequest,
  HandlerRequest,
  SearchHandler,
  search,
}) {
  return (
    <div className="HeaderWrapper">
      <div className="HeaderContainer">
        <RangeComponent
          className="SelectionRage"
          selectRequest={selectRequest}
          HandlerRequest={HandlerRequest}
        />
        <TitleComponent className="Title" selectRequest={selectRequest} />
        <SearchComponent
          className="Search"
          SearchHandler={SearchHandler}
          search={search}
        />
      </div>
    </div>
  );
}

export default HeaderComponent;