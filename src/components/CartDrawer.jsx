import React, { useState } from 'react';
import { CloseIcon } from './Icons';

function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setOrderPlaced(true);
    onClearCart();
    setTimeout(() => {
      setOrderPlaced(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="cart-overlay" onClick={onClose}>
      <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-drawer-header">
          <h3>Your Food Cart</h3>
          <button type="button" onClick={onClose} aria-label="Close cart">
            <CloseIcon />
          </button>
        </div>

        <div className="cart-drawer-body">
          {orderPlaced ? (
            <div className="cart-success">
              <h4>Order Placed Successfully!</h4>
              <p>Your food is being prepared and will arrive in 30 minutes.</p>
            </div>
          ) : cartItems.length === 0 ? (
            <p className="cart-empty">Your cart is empty. Add some delicious food!</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <strong>{item.name}</strong>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <div className="cart-item-controls">
                  <button
                    type="button"
                    onClick={() => onUpdateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => onUpdateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="remove-item-btn"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    &times;
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && !orderPlaced && (
          <div className="cart-drawer-footer">
            <div className="cart-total-row">
              <span>Total</span>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>
            <button
              type="button"
              className="btn-primary full-width"
              onClick={handleCheckout}
            >
              Place Order
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

export default CartDrawer;