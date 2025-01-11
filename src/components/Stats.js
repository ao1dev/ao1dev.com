import React from 'react';

const stats = [
  {
    id: 1,
    number: '7518',
    label: 'Projects Completed'
  },
  {
    id: 2,
    number: '3472',
    label: 'Happy Clients'
  },
  {
    id: 3,
    number: '2184',
    label: 'Expert Members'
  }
];

const Stats = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            We are proud of<br />our work
          </h2>
          <p className="text-lg text-gray-600">
            Our achievements in numbers speak for themselves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center p-6"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
