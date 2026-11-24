import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SearchIcon,
  CartIcon,
  MenuHamburgerIcon,
  CloseIcon,
} from './Icons';

function Navbar({
  totalCartCount,
  onOpenCart,
  searchQuery,
  onSearchChange,
  currentUser,
  onLogout,
}) {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchInput = (e) => {
    onSearchChange(e.target.value);
    const menuEl = document.getElementById('menu');
    if (menuEl && e.target.value.trim().length === 1) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-wrapper">
      <div className="container navbar">
        <a href="#home" className="brand-logo">
          F<span>OO</span>D
        </a>

        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" className="active" onClick={() => setMobileMenuOpen(false)}>
            Home
          </a>
          <a href="#menu" onClick={() => setMobileMenuOpen(false)}>
            Menu
          </a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>
            Service
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </a>
        </nav>

        <div className="nav-actions">
          {showSearch && (
            <input
              type="text"
              className="nav-search-input"
              placeholder="Search food..."
              value={searchQuery}
              onChange={handleSearchInput}
              autoFocus
            />
          )}

          <button
            type="button"
            className="icon-btn"
            aria-label="Search menu"
            onClick={() => setShowSearch((prev) => !prev)}
          >
            <SearchIcon />
          </button>

          <button
            type="button"
            className="icon-btn cart-btn"
            aria-label="Open cart"
            onClick={onOpenCart}
          >
            <CartIcon />
            {totalCartCount > 0 && (
              <span className="cart-badge">{totalCartCount}</span>
            )}
          </button>

          {currentUser ? (
            <div className="user-pill">
              <span className="user-email">{currentUser.email.split('@')[0]}</span>
              <button type="button" className="btn-outline btn-sm" onClick={onLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-nav-buttons">
              <Link to="/login" className="login-link">
                Login
              </Link>
              <Link to="/signup" className="btn-primary btn-sm">
                Sign Up &rarr;
              </Link>
            </div>
          )}

          <button
            type="button"
            className="mobile-toggle"
            aria-label="Toggle navigation"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuHamburgerIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;