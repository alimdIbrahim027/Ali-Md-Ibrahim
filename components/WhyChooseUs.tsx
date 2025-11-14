
import React from 'react';
import { LeafIcon, TruckIcon, HeartIcon } from './icons';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="text-center p-6 bg-mint-light rounded-lg">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-mint mx-auto mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-mint-deep mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-mint-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-mint-deep font-serif">Why Choose VegFresh?</h2>
          <p className="text-lg text-gray-600 mt-2">We are committed to bringing you the best.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<LeafIcon className="h-8 w-8 text-mint-deep" />}
            title="100% Organic"
            description="Our vegetables are grown without synthetic pesticides or fertilizers, ensuring pure, natural goodness."
          />
          <FeatureCard
            icon={<TruckIcon className="h-8 w-8 text-mint-deep" />}
            title="Fast Delivery"
            description="Get your farm-fresh produce delivered to your doorstep quickly and reliably, preserving its freshness."
          />
          <FeatureCard
            icon={<HeartIcon className="h-8 w-8 text-mint-deep" />}
            title="Healthy & Nutritious"
            description="Packed with vitamins and minerals, our vegetables are the perfect choice for a healthy lifestyle."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
