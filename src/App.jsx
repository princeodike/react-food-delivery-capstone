import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import CartDrawer from './components/CartDrawer';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  const handleAddToCart = (foodItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === foodItem.id);
      if (existing) {
        return prev.map((item) =>
          item.id === foodItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...foodItem, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cartItems={cartItems}
              totalCartCount={totalCartCount}
              onAddToCart={handleAddToCart}
              onUpdateQuantity={handleUpdateQuantity}
              onOpenCart={() => setIsCartOpen(true)}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              currentUser={currentUser}
              onLogout={() => setCurrentUser(null)}
            />
          }
        />
        <Route
          path="/signup"
          element={<Signup onAuthSuccess={(user) => setCurrentUser(user)} />}
        />
        <Route
          path="/login"
          element={<Login onAuthSuccess={(user) => setCurrentUser(user)} />}
        />
      </Routes>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />
    </BrowserRouter>
  );
}

export default App;