import React from 'react';

const Hero = () => {
  return (
    <div className="bg-accent2/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Creative. Smart.<br />
              Awesome.
            </h1>
            <p className="text-lg text-secondary mb-8">
              We help bring your ideas to life through modern design and technology.
              Let us help you build the future, today.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                Get Started
              </a>
              <a
                href="#about"
                className="inline-flex items-center px-6 py-3 border border-accent1 text-base font-medium rounded-md text-secondary bg-white hover:bg-accent2/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative h-[400px] w-full bg-gradient-to-br from-accent1/20 to-accent4/20 rounded-2xl p-8">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-24 h-24 bg-accent3 rounded-xl transform rotate-6"></div>
                  <div className="w-24 h-24 bg-accent4 rounded-xl transform -rotate-6"></div>
                  <div className="w-24 h-24 bg-accent1 rounded-xl transform -rotate-12"></div>
                  <div className="w-24 h-24 bg-accent2 rounded-xl transform rotate-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
