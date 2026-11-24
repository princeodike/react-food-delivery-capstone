import React from 'react';
import { CartIcon } from './Icons';

function FoodCard({ item, cartQuantity, onAddToCart, onUpdateQuantity }) {
  const isInCart = cartQuantity > 0;

  return (
    <div className={`food-card ${isInCart ? 'active-card' : ''}`}>
      <div className="food-img-wrap">
        <img src={item.image} alt={item.name} />
      </div>

      <h3 className="food-name">{item.name}</h3>
      <p className="food-weight">{item.weight}</p>
      <p className="food-price">${item.price.toFixed(2)}</p>

      <div className="food-card-actions">
        {isInCart ? (
          <div className="qty-row">
            <div className="qty-controls">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => onUpdateQuantity(item.id, -1)}
              >
                -
              </button>
              <span>{cartQuantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => onUpdateQuantity(item.id, 1)}
              >
                +
              </button>
            </div>
            <button
              type="button"
              className="card-cart-badge"
              aria-label="Added to cart"
              onClick={() => onUpdateQuantity(item.id, 1)}
            >
              <CartIcon size={16} />
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="add-to-cart-btn"
            onClick={() => onAddToCart(item)}
          >
            <CartIcon size={16} />
            <span>Add to Cart</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default FoodCard;