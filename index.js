import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { restaurants } from './data.js';

const app = express();

app.use(cors());
app.use(express.json());


const jwtSecretKey = 'awikwok';


const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, jwtSecretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403); 
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401); 
  }
};


app.post('/api/login', (req, res) => {

  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin') {
    const user = { username };
    const accessToken = jwt.sign(user, jwtSecretKey);
    res.json({ accessToken });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

app.get('/api/protected', verifyToken, (req, res) => {
  res.json({ message: 'This is a protected route!' });
});

app.get('/api/restaurants', verifyToken, (req, res) => {
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

app.get('/api/category', verifyToken, (req, res) => {
  const categories = [...new Set(restaurants.map(r => r.category))];

  res.json({
    categories: categories,
  });
});


app.get('/api/restaurants/:id', verifyToken, (req, res) => {
  const restaurant = restaurants.find((r) => r.id === parseInt(req.params.id, 10));
  if (!restaurant) return res.status(404).send('Restaurant not found');
  res.json(restaurant);
});

app.listen(5555, () => {
  console.log(`Server is running on port ${5555}`);
});
