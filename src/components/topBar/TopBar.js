import React from 'react';

function TopBar({title}) {
  return (
    <div data-testid="topBar-content" className="topBar">
      {title}
    </div>
  )
}

export default TopBar;