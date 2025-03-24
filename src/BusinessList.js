import React from 'react'; 
import './BusinessList.css';

import Business from './Business';

/*Create a BusinessList component that displays a collection of businesses. 
The BusinessList component should utilize
 the Business component multiple times to generate the list. */
 // can use an array to store the businesses 
 // and then use the map method to render each business in the array.
function BusinessList(props) {
  return (
    <div className="BusinessList">
      {props.businesses.map(business => {
        return <Business key={business.id} business={business} />;
      })}
    </div>
  );
}

export default BusinessList; 