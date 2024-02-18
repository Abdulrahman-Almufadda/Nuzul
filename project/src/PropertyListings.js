import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
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
    <Grid container spacing={2}>
      {listings.map(listing => (
        <Grid item key={listing.id} xs={12} sm={6} md={4} lg={3}>
          <Card>
            {listing.thumbnail && (
              <CardMedia
                component="img"
                height="200"
                image={listing.thumbnail}
                alt={`Thumbnail for ${listing.title}`}
              />
            )}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {listing.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {listing.address}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Price: ${listing.price}
              </Typography>
              <Button component={Link} to={`/property/${listing.id}`} variant="contained">View Details</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PropertyListings;
