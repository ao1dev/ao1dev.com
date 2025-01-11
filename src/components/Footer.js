import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="/" className="text-xl font-bold text-primary">
              ao1dev
            </a>
            <p className="mt-4 text-secondary">
              A creative and innovative digital agency focused on growth and success.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#about" className="text-secondary hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="text-secondary hover:text-primary">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#privacy" className="text-secondary hover:text-primary">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-secondary hover:text-primary">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
              Newsletter
            </h3>
            <p className="mt-4 text-secondary">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  className="min-w-0 flex-1 rounded-l-md border border-accent1 px-4 py-2 text-secondary focus:border-accent3 focus:ring-accent3"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="inline-flex items-center rounded-r-md border border-l-0 border-primary bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-accent1 pt-8">
          <p className="text-center text-secondary">
            {new Date().getFullYear()} ao1dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
