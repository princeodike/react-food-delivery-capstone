import React, { useState } from 'react';
import FoodCard from './FoodCard';
import { categories, foodItems } from '../data/foodData';
import { FilterIcon } from './Icons';

function Menu({
  cartItems,
  onAddToCart,
  onUpdateQuantity,
  searchQuery,
  onSearchChange,
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  // Filter by category and navbar search query
  const filteredItems = foodItems.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 8);

  const getCartQuantity = (id) => {
    const found = cartItems.find((c) => c.id === id);
    return found ? found.quantity : 0;
  };

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="section-header-center">
          <p className="section-subtitle">Our Menu</p>
          <h2 className="section-title">
            Menu That Always Make You <br />
            To Fall In Love
          </h2>
        </div>

        {/* Category Filters */}
        <div className="category-bar">
          <button
            type="button"
            className="filter-reset-btn"
            title="Reset all filters"
            onClick={() => {
              setSelectedCategory('All');
              onSearchChange('');
            }}
          >
            <FilterIcon />
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(cat);
                setShowAll(false);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {searchQuery && (
          <p className="search-status">
            Showing results for: <strong>"{searchQuery}"</strong>{' '}
            <button type="button" onClick={() => onSearchChange('')}>
              Clear
            </button>
          </p>
        )}

        {/* Food Grid */}
        {visibleItems.length === 0 ? (
          <p className="empty-menu-msg">
            No dishes found matching your filter. Try another category!
          </p>
        ) : (
          <div className="menu-grid">
            {visibleItems.map((item) => (
              <FoodCard
                key={item.id}
                item={item}
                cartQuantity={getCartQuantity(item.id)}
                onAddToCart={onAddToCart}
                onUpdateQuantity={onUpdateQuantity}
              />
            ))}
          </div>
        )}

        {/* Show More Button */}
        {filteredItems.length > 8 && (
          <div className="show-more-wrap">
            <button
              type="button"
              className="btn-outline show-more-btn"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Menu;