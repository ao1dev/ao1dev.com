import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Check Ideas',
    description: 'We start by gathering all your ideas and requirements to create a solid project foundation.'
  },
  {
    id: 2,
    title: 'Data Analysis',
    description: 'Our team analyzes the data and creates a comprehensive strategy for your project.'
  },
  {
    id: 3,
    title: 'Finalize Product',
    description: 'We develop and refine your product until it meets our high quality standards.'
  }
];

const Process = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our three process steps on<br />creating awesome projects.
          </h2>
          <p className="text-lg text-gray-600">
            We follow a simple but effective process to bring your ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-gray-50 rounded-lg p-6 relative hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-primary text-lg font-semibold mb-2">
                Step {step.id}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
