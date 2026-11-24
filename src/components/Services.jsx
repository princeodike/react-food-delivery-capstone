import React from 'react';
import ServiceCard from './ServiceCard';
import { servicesData } from '../data/foodData';

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header-center">
          <p className="section-subtitle">What we Serve</p>
          <h2 className="section-title">
            Your Favorite Food <br />
            Delivery Partner
          </h2>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              type={service.type}
              title={service.title}
              description={service.description}
              highlighted={service.highlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;