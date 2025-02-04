// src/pages/Introduction.jsx
const Introduction = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h1>Introduction</h1> <br></br>

      <section className="mb-12">
        <h2>What is this API?</h2>
        <p>
          The Appointment Management System API is a comprehensive solution for managing service appointments.
          It provides a robust backend for handling user authentication, appointment scheduling, and service
          management with separate interfaces for customers and administrators.
        </p>
      </section>

      <section className="mb-12">
        <h2>Key Features for Users</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="space-y-2">
            <li>User account creation and management</li>
            <li>Browse available services</li>
            <li>Book appointments for services</li>
            <li>View personal appointment history</li>
            <li>Cancel or reschedule appointments</li>
            <li>Real-time appointment status tracking</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2>Key Features for Admins</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="space-y-2">
            <li>Complete appointment oversight</li>
            <li>Service management (add, edit, remove)</li>
            <li>Appointment status management</li>
            <li>Customer overview</li>
            <li>Sorting and filtering capabilities</li>
            <li>Dashboard with key metrics</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Introduction;