
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-mint-deep text-mint-light">
      <div className="container mx-auto px-6 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} VegFresh. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
