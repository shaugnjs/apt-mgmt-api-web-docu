// src/components/common/PageHeader.jsx
const PageHeader = ({ title, description }) => {
    return (
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        {description && (
          <p className="text-gray-600 text-lg">{description}</p>
        )}
      </div>
    );
  };
  
  export default PageHeader;