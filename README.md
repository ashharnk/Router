# React Cart and Product Application

## Overview

This project is a React-based application that showcases a list of products fetched from the Fake Store API. Users can add or remove products to/from their cart, update quantities, and view the final total with a 10% discount applied. The app uses React Router for navigation and is styled with custom CSS.

## Features

1. **Product Listing**:
   - Fetch products dynamically from the Fake Store API.
   - Display products with key details (image, title, price, and description).
   - Responsive layout for a better user experience.

2. **Cart Functionality**:
   - Add or remove products from the cart.
   - Update product quantities in the cart.
   - Calculate and display the subtotal, discount, and final total price.
   - Display a message if the cart is empty.

3. **Navigation**:
   - Use React Router for seamless navigation between the product and cart pages.

4. **State Management**:
   - Manage the cart state locally using React's `useState` hook.

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd react-cart-product-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## Project Structure

```
react-cart-product-app/
├── src/
│   ├── App.js          # Main application component
│   ├── ProductPage.js  # Product listing page
│   ├── CartPage.js     # Cart functionality page
│   ├── App.css         # Global CSS
│   ├── ProductPage.css # Styles for the product page
│   ├── CartPage.css    # Styles for the cart page
├── public/
│   ├── index.html      # HTML template
├── package.json        # Project configuration and dependencies
└── README.md           # Project documentation
```

## Usage

1. On the homepage, view a list of products fetched from the Fake Store API.
2. Click on "Add to Cart" to add a product to your cart. If the product is already in the cart, the button changes to "Remove from Cart."
3. Navigate to the cart page by clicking the "Cart" link in the navigation bar.
4. On the cart page, adjust product quantities using the `+` and `-` buttons or remove products entirely.
5. View the updated subtotal, discount, and total price dynamically.

## API Details
This application uses the [Fake Store API](https://fakestoreapi.com/):
- Endpoint: `https://fakestoreapi.com/products`
- Returns a list of products with details like `id`, `title`, `price`, `description`, `image`, etc.

## Technologies Used

- **React**: Frontend framework.
- **React Router**: For page navigation.
- **CSS**: Custom styles for the application.
- **JavaScript**: Application logic.

## Future Enhancements

- Add user authentication.
- Implement persistent cart storage using local storage or a backend.
- Add filters and sorting options on the product page.
- Include unit tests with Jest.

## License
This project is open-source and available under the MIT License.

