// src/components/layout/Sidebar.jsx
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Introduction', href: '/introduction' },
    { name: 'Installation', href: '/installation' },
    { name: 'Frontend Overview', href: '/frontend' },
    { name: 'API Reference', href: '/api' },
    { name: 'About', href: '/about' }
  ];

  return (
    <div className="fixed left-0 top-0 w-64 h-screen bg-white shadow-lg overflow-y-auto">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">API Documentation</h1>
      </div>
      <nav className="p-4 space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`block px-4 py-2 rounded-md ${
              location.pathname === item.href
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

// Add this line to export the component
export default Sidebar;