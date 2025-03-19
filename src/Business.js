import React from 'react';

// A busines component to render a single business.
// it should display 
// the business's name, address, city, state, zip code, category, rating, and review count. 

function Business(props) {
  const { business } = props;
  
  return (
    <div className="Business">
      <div className="image-container">
        <img src={business.imageSrc} alt={business.name}/>
      </div>
      <h2>{business.name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{business.address}</p>
          <p>{business.city}, {business.state} {business.zipCode}</p>
        </div>
        <div className="Business-reviews">
          <h3>{business.category}</h3>
          <h3 className="rating">{business.rating} stars</h3>
          <p>{business.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
}

export default Business;
