import React, { useState } from 'react';
import axios from 'axios';

const PropertyForm = ({ property, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: property?.title || '',
    address: property?.address || '',
    price: property?.price || '',
    thumbnail: property?.thumbnail || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (property.id) {
        // Edit existing property
        await axios.put(`https://65cd2742dd519126b840305e.mockapi.io/v1/hotels/${property.id}`, formData);
      } else {
        // Add new property
        await axios.post('https://65cd2742dd519126b840305e.mockapi.io/v1/hotels', formData);
      }
      onSubmit(formData);
    } catch (error) {
      console.error('Error submitting form: ', error);
    }
  };

  return (
    <form style={{marginLeft:700}} onSubmit={handleSubmit}>
      <div style={{margin:20}}>
        <label>Title</label>
        <input
          style={{marginLeft:70}}
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div style={{margin:20}}>
        <label>Address</label>
        <input
          style={{marginLeft:44}}
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div style={{margin:20}}>
        <label>Price</label>
        <input
          style={{marginLeft:66}}
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <div style={{margin:20}}>
        <label>Thumbnail</label>
        <input
          style={{marginLeft:25}}
          type="url"
          name="thumbnail"
          value={formData.thumbnail}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" style={{marginTop:10, marginLeft:175}}>Add</button>
    </form>
  );
};

export default PropertyForm;
