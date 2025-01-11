import React from 'react';
import { DocumentTextIcon, UserGroupIcon, ChartBarIcon, CogIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Website Building',
    description: 'Create beautiful and responsive websites that work seamlessly across all devices.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Social Engagement',
    description: 'Build and grow your online presence with our social media integration tools.',
    icon: UserGroupIcon,
  },
  {
    name: 'Business Branding',
    description: 'Develop a strong brand identity that resonates with your target audience.',
    icon: ChartBarIcon,
  },
  {
    name: 'Cloud Storage',
    description: 'Secure and scalable cloud storage solutions for your business needs.',
    icon: CogIcon,
  },
];

const Features = () => {
  return (
    <div className="bg-accent2/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-12 w-12 text-accent3 mb-4">
                <feature.icon />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {feature.name}
              </h3>
              <p className="text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
