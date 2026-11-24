import React from 'react';
import { ServiceIllustration } from './Icons';

function ServiceCard({ type, title, description, highlighted }) {
  return (
    <div className={`service-card ${highlighted ? 'highlighted' : ''}`}>
      <div className="service-icon-wrap">
        <ServiceIllustration type={type} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;