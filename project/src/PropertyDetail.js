import './App.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios.get(`https://65cd2742dd519126b840305e.mockapi.io/v1/hotels/${id}`)
      .then(response => {
        setProperty(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [id]);

  if (!property) {
    return <p>Loading...</p>;
  }

  return (
    
    <div>
      <h1 style={{paddingLeft:850}}>detailed page</h1>
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p>Address: {property.address}</p>
      <p>Price: ${property.price}</p>

      <h1>here is detailed part</h1>
    </div>
  );
};

export default PropertyDetail;
