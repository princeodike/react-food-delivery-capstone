import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Menu from '../components/Menu';
import Testimonials from '../components/Testimonials';
import AppPromotion from '../components/AppPromotion';
import Footer from '../components/Footer';

function Home({
  cartItems,
  totalCartCount,
  onAddToCart,
  onUpdateQuantity,
  onOpenCart,
  searchQuery,
  onSearchChange,
  currentUser,
  onLogout,
}) {
  return (
    <>
      <Navbar
        totalCartCount={totalCartCount}
        onOpenCart={onOpenCart}
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        currentUser={currentUser}
        onLogout={onLogout}
      />
      <main>
        <Hero />
        <Services />
        <Menu
          cartItems={cartItems}
          onAddToCart={onAddToCart}
          onUpdateQuantity={onUpdateQuantity}
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
        />
        <Testimonials />
        <AppPromotion />
      </main>
      <Footer />
    </>
  );
}

export default Home;