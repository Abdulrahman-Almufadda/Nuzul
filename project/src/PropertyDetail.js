import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const history = useHistory();

  useEffect(() => {
    axios.get(`https://65cd2742dd519126b840305e.mockapi.io/v1/hotels/${id}`)
      .then(response => {
        setProperty(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [id]);

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this property?');
    if (confirmDelete) {
      axios.delete(`https://65cd2742dd519126b840305e.mockapi.io/v1/hotels/${id}`)
        .then(() => {
          history.push('/');
        })
        .catch(error => {
          console.error('Error deleting property: ', error);
        });
    }
  };

  if (!property) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p>Address: {property.address}</p>
      <p>Price: ${property.price}</p>
      
      <h3>Here is the detailed Part</h3>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default PropertyDetail;
