import React from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { Button, Typography, Container, Grid, Paper } from '@mui/material';
import axios from 'axios';

const PropertyDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const [property, setProperty] = React.useState(null);

  React.useEffect(() => {
    axios.get(`https://65cd2742dd519126b840305e.mockapi.io/v1/hotels/${id}`)
      .then(response => {
        setProperty(response.data);
      })
      .catch(error => {
        console.error('Error fetching property details: ', error);
      });
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      try {
        await axios.delete(`https://65cd2742dd519126b840305e.mockapi.io/v1/hotels/${id}`);
        history.push('/');
      } catch (error) {
        console.error('Error deleting property: ', error);
      }
    }
  };

  if (!property) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', margin: '20px 0' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {property.thumbnail && (
              <img src={property.thumbnail} alt={`Thumbnail for ${property.title}`} style={{ maxWidth: '100%' }} />
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">{property.title}</Typography>
            <Typography variant="body1">{property.address}</Typography>
            <Typography variant="body1">Price: ${property.price}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button component={Link} to={`/edit-property/${property.id}`} variant="contained" style={{ marginRight: '10px' }}>Edit</Button>
            <Button onClick={handleDelete} variant="contained">Delete</Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default PropertyDetail;
