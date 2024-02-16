import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PropertyListings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get('https://65cd2742dd519126b840305e.mockapi.io/v1/hotels')
      .then(response => {
        setListings(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      {listings.map(listing => (
        <div key={listing.id}>
        </div>
      ))}
    </div>
  );
};

export default PropertyListings;
