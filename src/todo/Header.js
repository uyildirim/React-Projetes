import React from 'react';

function Header({title,...props}) {
  return (
    <div className="card-header-tab card-header">
      <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
        <i className="fa fa-tasks"/>&nbsp;{title}
      </div>
    </div>
  );
}

export default Header;