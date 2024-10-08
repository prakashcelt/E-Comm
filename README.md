# E-Comm

Features

    User Authentication:
        User login with JWT-based authentication.
        User registration with JWT token generation.
        Middleware to fetch user data from the token for authenticated routes.

    Product Management:
        Add products with details like name, description, image, category, new price, and old price.
        Remove products using the admin panel.
        Fetch all products data.
        Fetch the latest products.
        Fetch products by category (e.g., popular in women).
        Fetch related products based on category.

    Image Upload:
        Upload product images using multer and save them to the server.
        Serve static images from the upload directory.

    Shopping Cart:
        Add products to the user's cart.
        Remove products from the user's cart.
        Fetch the user's cart data.

    Product Display:
        Endpoint to fetch all products.
        Endpoint to fetch new collections.
        Endpoint to fetch popular products in a specific category (e.g., women).

API Endpoints

    Root API: / (for testing)
    User Authentication:
        POST /login: Login user and return auth token.
        POST /signup: Register user and return auth token.
    Product Management:
        POST /addproduct: Add a new product (admin).
        POST /removeproduct: Remove a product (admin).
        GET /allproducts: Get all products.
        GET /newcollections: Get the latest products.
        GET /popularinwomen: Get popular products in the "women" category.
        POST /relatedproducts: Get related products based on the category.
    Image Upload:
        POST /upload: Upload product images.
        /images: Serve static images.
    Shopping Cart:
        POST /addtocart: Add a product to the user's cart (authenticated).
        POST /removefromcart: Remove a product from the user's cart (authenticated).
        POST /getcart: Get the user's cart data (authenticated).

Technical Stack

    Backend: Node.js, Express.js
    Database: MongoDB
    Authentication: JWT
    Image Handling: Multer
    Others: CORS for cross-origin resource sharing, dotenv for environment variables, and cookie-parser for handling cookies.

Installation and Setup

    Clone the repository.
    Install dependencies using npm install.
    Set up environment variables in a .env file.
    Start the server using npm start.
    The server will run on the specified port (default is 4000).

Usage

    Use the provided API endpoints to interact with the e-commerce platform.
    Ensure to handle authentication tokens for protected routes.
    Utilize the admin panel for adding and removing products.

Directory Structure

    routes/: Contains route handlers for authentication, messages, and user-related operations.
    db/: Contains the database connection setup.
    socket/: Contains the Socket.io setup for real-time features.
    upload/images/: Directory for storing uploaded images.
    frontend/: Frontend application directory.