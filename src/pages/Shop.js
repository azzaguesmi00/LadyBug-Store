import React from 'react';
import '../Styles/Shop.css';

const products = [
  { id: 1, name: 'Ladybug Mug', price: '$15', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Polka Dot Dress', price: '$40', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Ladybug Notebook', price: '$10', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Red Sneakers', price: '$50', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Ladybug Earrings', price: '$25', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Black & Red Bag', price: '$35', image: 'https://via.placeholder.com/150' }
];

const Shop = () => {
  return (
    <div className="shop">
      <h2>Our Products</h2>
      <div className="shop-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
