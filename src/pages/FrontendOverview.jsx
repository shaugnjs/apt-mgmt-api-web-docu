// src/pages/FrontendOverview.jsx

const FrontendOverview = () => {
  const screenshots = [
    {
      title: "Login Page",
      description: "User authentication interface with email and password fields",
      image: "public/screenshots/login.png", // You'll need to add these images
      details: [
        "Secure login system",
        "Form validation",
        "Error handling",
        "Remember me functionality"
      ]
    },
    {
      title: "Register Page",
      description: "New user registration with required fields",
      image: "/screenshots/register.png",
      details: [
        "Email verification",
        "Password strength indicator",
        "Real-time validation",
        "Success feedback"
      ]
    },
    {
      title: "Services Page",
      description: "Browse and select available services",
      image: "/screenshots/services.png",
      details: [
        "Service listings",
        "Pricing information",
        "Duration details",
        "Booking functionality"
      ]
    },

    {
      title: "Appointments Page",
      description: "View upcoming bookings and statuses",
      image: "/screenshots/appointments.png",
      details: [
        "Personalized overview",
        "Status tracking",
        "Booking confirmation",
        "Booking history"
      ]
    },

    {
      title: "Booking Page",
      description: "Book new appointments for selected services",
      image: "/screenshots/book-appointments.png",
      details: [
        "Service selection",
        "Date and time picker",
        "Confirmation screen",
        "Cancellation option"
      ]
    },

    {
      title: "Admin Dashboard",
      description: "Complete overview of appointments and services",
      image: "/screenshots/dashboard.png",
      details: [
        "Appointment calendar",
        "Service management",
        "Customer overview",
        "Status tracking and updates"
      ]
    },
    // Add more screenshots as needed
  ];

  return (
    <div className="prose prose-lg max-w-none">
      <h1>Frontend Overview</h1><br></br>

      <div className="space-y-12">
        {screenshots.map((screen) => (
          <section key={screen.title} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{screen.title}</h2>
              <p className="text-gray-600 mb-4">{screen.description}</p>
              <div className="border rounded-lg overflow-hidden mb-4">
                <img
                  src={screen.image}
                  alt={screen.title}
                  className="w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {screen.details.map((detail, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default FrontendOverview;