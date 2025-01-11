import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Brand Identity Design',
    category: 'Branding',
    color: 'from-accent1 to-accent3'
  },
  {
    id: 2,
    title: 'Mobile App Design',
    category: 'UI/UX Design',
    color: 'from-accent4 to-accent1'
  },
  {
    id: 3,
    title: 'Web Development',
    category: 'Development',
    color: 'from-accent2 to-accent3'
  }
];

const Projects = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Check out some of our<br />recent projects below.
          </h2>
          <p className="text-lg text-secondary">
            We take pride in delivering exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-64"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}></div>
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative h-full p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-white/90">
                  {project.category}
                </p>
                <div className="mt-4 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-sm text-white font-medium"
                  >
                    View Project
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
