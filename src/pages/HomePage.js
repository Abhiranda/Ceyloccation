import React from 'react';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';

function HomePage() {
  // Placeholder for products, replace with actual data fetching later
  const mockProducts = [{name: "Service 1", description: "Description here", image: "image-link.jpg"}];

  return (
    <div>
      <Banner />
      <div className="products-list">
        {mockProducts.map(product => <ProductCard key={product.name} product={product} />)}
      </div>
    </div>
  );
}

export default HomePage;
