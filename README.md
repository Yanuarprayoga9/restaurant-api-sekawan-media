# Restaurant API Documentation

## Introduction
Welcome to the Restaurant API! This API allows you to access information about various restaurants, including details, categories, and more. It also includes authentication via JWT for accessing protected routes.

## Base URL
The base URL for the API is:
https://restaurant-api-sekawan-media-yanuar.vercel.app/

## Authentication
The API uses JWT for authentication. To access protected routes, you need to obtain a token by logging in.

### Login
#### Endpoint
POST /api/login

#### Request Body
```json
{
  "username": "admin",
  "password": "admin"
}
```
Response
```json
{
  "accessToken": "your_jwt_token_here"
}
```
Protected Routes
To access the protected routes, you need to include the JWT token in the Authorization header:

Authorization: Bearer your_jwt_token_here
Get Protected Route
Endpoint
GET /api/protected
Response
```json
{
  "message": "This is a protected route!"
}
```
## Restaurants
### Get All Restaurants
Endpoint
GET /api/restaurants
Query Parameters
category (optional): Filter restaurants by category.
page (optional): Page number for pagination. Default is 1.
limit (optional): Number of restaurants per page. Default is 10.
Response
``` json 
{
  "total": 1,
  "page": 1,
  "limit": 10,
  "data": [
    {
      "id": 1,
      "name": "Pasta Place",
      "category": "Italian",
      "rating": 4.5,
      "priceRange": "$$",
      "image": "https://images.unsplash.com/photo-1717457782058-d8c50bfedc3a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
      "isOpen": true,
      "reviews": [
        {
          "image": "https://images.unsplash.com/profile-1519224159801-4a1b9b7cbd6eimage?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&crop=faces&fit=crop&h=32",
          "name": "Alice Smith",
          "rating": 4,
          "text": "Great place with a cozy atmosphere. Food was delicious!"
        },
        {
          "image": "https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
          "name": "Bob Johnson",
          "rating": 3,
          "text": "The service was slow, but the food made up for it."
        },
        {
          "image": "https://images.unsplash.com/profile-1519165457400-76a3d9b62032image?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&crop=faces&fit=crop&h=32",
          "name": "Clara Williams",
          "rating": 5,
          "text": "Best dining experience I've had in a while!"
        },
        {
          "image": "https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
          "name": "David Brown",
          "rating": 2,
          "text": "The food was bland and overpriced. Not coming back."
        },
        {
          "image": "https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
          "name": "Emily Davis",
          "rating": 4,
          "text": "Lovely ambiance and friendly staff. Will visit again!"
        }
      ]
    }
  ]
}
```
###  Get Restaurant by ID
Endpoint
GET /api/restaurants/:id
Response
```json
{
  "id": 1,
  "name": "Pasta Place",
  "category": "Italian",
  "rating": 4.5,
  "priceRange": "$$",
  "image": "https://images.unsplash.com/photo-1717457782058-d8c50bfedc3a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
  "isOpen": true,
  "reviews": [
    {
      "image": "https://images.unsplash.com/profile-1519224159801-4a1b9b7cbd6eimage?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&crop=faces&fit=crop&h=32",
      "name": "Alice Smith",
      "rating": 4,
      "text": "Great place with a cozy atmosphere. Food was delicious!"
    },
    {
      "image": "https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Bob Johnson",
      "rating": 3,
      "text": "The service was slow, but the food made up for it."
    },
    {
      "image": "https://images.unsplash.com/profile-1519165457400-76a3d9b62032image?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&crop=faces&fit=crop&h=32",
      "name": "Clara Williams",
      "rating": 5,
      "text": "Best dining experience I've had in a while!"
    },
    {
      "image": "https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
      "name": "David Brown",
      "rating": 2,
      "text": "The food was bland and overpriced. Not coming back."
    },
    {
      "image": "https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Emily Davis",
      "rating": 4,
      "text": "Lovely ambiance and friendly staff. Will visit again!"
    }
  ]
} 
```
###  Get Categories
Endpoint
GET /api/category
Response
```json
{
  "categories": ["Italian", "Chinese", "Mexican"]
}
```
Error Handling
The API returns appropriate HTTP status codes and error messages:

401 Unauthorized: Invalid or missing token.
403 Forbidden: Invalid token.
404 Not Found: Resource not found.
Running the Server
To run the server locally, execute the following command:

node server.js
The server will start on port 5555.

Conclusion
This API provides a simple way to access restaurant