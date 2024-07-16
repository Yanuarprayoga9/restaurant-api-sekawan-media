import express from 'express';
import cors from 'cors';
import { restaurants } from './data.js';


const app = express();

app.use(cors());
app.use(express.json());



app.get('/api/restaurants', (req, res) => {
  const { category, page = 1, limit = 10 } = req.query;
  let filteredRestaurants = restaurants;

  if (category) {
    filteredRestaurants = restaurants.filter((r) => r.category.toLowerCase() === category.toLowerCase());
  }

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedRestaurants = filteredRestaurants.slice(startIndex, endIndex);

  res.json({
    total: filteredRestaurants.length,
    page: parseInt(page, 10),
    limit: parseInt(limit, 10),
    data: paginatedRestaurants,
  });
});

app.get('/api/category', (req, res) => {
  const categories = [...new Set(restaurants.map(r => r.category))];

  res.json({
    categories: categories,
  });
});

app.get('/api/restaurants/:id', (req, res) => {
  const restaurant = restaurants.find((r) => r.id === parseInt(req.params.id, 10));
  if (!restaurant) return res.status(404).send('Restaurant not found');
  res.json(restaurant);
});

app.listen(5555, () => {
  console.log(`Server is running on port ${5555}`);
});
