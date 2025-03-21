import React from 'react'; 

import Business from './Business';

// this BusinessList component should use the Business component multiple times 
// to generate a list of businesses. 
function BusinessList(props) {
  return (
    <div className="BusinessList">
      {props.businesses.map(business => {
        return <Business key={business.id} business={business} />;
      })}
    </div>
  );
}