// src/pages/Home.jsx
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-6">
          Appointment Management System
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          A modern appointment booking system with user and admin features
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/shaugnjs/appointment-management-api"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
          <Link
            to="/installation"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Features Sections */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* For Users */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">For Users</h2>
          <ul className="space-y-3 text-gray-600">
            {[
              'Easy appointment booking',
              'Service browsing',
              'Appointment management',
              'Real-time status updates',
              'Personal appointment history'
            ].map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* For Admins */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">For Admins</h2>
          <ul className="space-y-3 text-gray-600">
            {[
              'Complete dashboard',
              'Service management',
              'Appointment oversight',
              'Customer management',
              'Analytics and reporting'
            ].map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Introduction',
              description: 'Learn about the system features',
              link: '/introduction'
            },
            {
              title: 'API Reference',
              description: 'Explore the API endpoints',
              link: '/api'
            },
            {
              title: 'Frontend Guide',
              description: 'View interface examples',
              link: '/frontend'
            }
          ].map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="block p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;