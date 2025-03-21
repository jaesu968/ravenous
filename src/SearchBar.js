import React from 'react';

/*Create a SearchBar component that 
users can use to search for businesses on the Yelp platform.
 The search bar should contain two inputs, 
 one for the user’s search terms and the selected location. 
 Don’t forget a search button as well.
 The search bar should also offer sorting options such as Best Match,
  Highest Rated, and Most Reviewed. 
  This functionality will be fully incorporated in a later part of the project,
   but for now, 
   concentrate on building the buttons and the structure needed to 
   communicate with the Yelp API.
 */
function SearchBar() {
  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          <li className="active">Best Match</li>
          <li>Highest Rated</li>
          <li>Most Reviewed</li>
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <a>Let's Go</a>
      </div>
    </div>
  );
}

export default SearchBar;