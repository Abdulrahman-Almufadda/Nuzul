import './App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <div className="property-listings">
      <h1 style={{paddingLeft:875}}>welcome</h1>
      <div style={{paddingLeft:890}}>
      <Link to="/property-form" className="btn-add-property">Add Property</Link>
      </div>
      {listings.map((listing, index) => (
        <div key={listing.id} className="property-listing" style={{ width: '50%', display: 'inline-block', boxSizing: 'border-box', padding: '10px',paddingLeft:150 }}>
          {listing.thumbnail && (
            <img src={listing.thumbnail} alt="Property Thumbnail" style={{ maxWidth: '100%', height: 'auto' }} />
          )}
          <div className="property-details" style={{ fontSize: '0.8rem' }}>
            <h2>{listing.title}</h2>
            <p>{listing.address}</p>
            <p>Price: ${listing.price}</p>
            <Link to={`/property/${listing.id}`} className="btn-view-details">View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyListings;
