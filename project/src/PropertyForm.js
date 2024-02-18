import React, { useState } from 'react';
import { TextField, Grid, Button, Snackbar } from '@mui/material';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const PropertyForm = ({ property, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: property?.title || '',
    address: property?.address || '',
    price: property?.price || '',
    description: property?.description || '',
    thumbnail: property?.thumbnail || '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://65cd2742dd519126b840305e.mockapi.io/v1/hotels', formData);
      onSubmit(response.data);
      history.push('/');
      setFormData({
        title: '',
        address: '',
        price: '',
        description: '',
        thumbnail: '',
      });
    } catch (error) {
      console.error('Error submitting form: ', error);
    }
  };
  

  
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Thumbnail :Url"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained">Submit</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default PropertyForm;
