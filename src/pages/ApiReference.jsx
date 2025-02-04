// src/pages/ApiReference.jsx
import CodeBlock from '../components/common/CodeBlock';


const ApiReference = () => {
    const endpoints = [
        {
            category: "Authentication",
            endpoints: [
                {
                    method: "POST",
                    path: "/api/auth/register",
                    title: "Register New User",
                    description: "Create a new customer account",
                    request: {
                        body: {
                            name: "John Doe",
                            email: "john@example.com",
                            password: "123456"
                        }
                    },
                    response: {
                        success: {
                            status: "success",
                            data: {
                                _id: "user_id",
                                name: "John Doe",
                                email: "john@example.com",
                                role: "customer",
                                token: "jwt_token_here"
                            }
                        },
                        error: {
                            status: "error",
                            message: "User already exists"
                        }
                    }
                },
                {
                    method: "POST",
                    path: "/api/auth/login",
                    title: "User Login",
                    description: "Authenticate user (both customers and admins)",
                    request: {
                        body: {
                            email: "john@example.com",
                            password: "123456"
                        }
                    },
                    response: {
                        success: {
                            status: "success",
                            data: {
                                _id: "user_id",
                                name: "John Doe",
                                email: "john@example.com",
                                role: "customer",
                                token: "jwt_token_here"
                            }
                        },
                        error: {
                            status: "error",
                            message: "Invalid email or password"
                        }
                    }
                },
                {
                    method: "POST",
                    path: "/api/auth/logout",
                    title: "User Logout",
                    description: "Logout current user",
                    headers: {
                        Authorization: "Bearer {token}"
                    },
                    response: {
                        success: {
                            status: "success",
                            message: "Logged out successfully"
                        }
                    }
                }
            ]
        },
        {
            category: "Services",
            endpoints: [
                {
                    method: "GET",
                    path: "/api/services",
                    title: "Get All Services",
                    description: "Retrieve list of all available services",
                    response: {
                        success: {
                            status: "success",
                            data: [
                                {
                                    _id: "service_id",
                                    name: "Haircut",
                                    duration: 30,
                                    price: 25.00,
                                    description: "Basic haircut service",
                                    isActive: true
                                }
                            ]
                        }
                    }
                }
            ]
        },
        {
            category: "Customer Appointments",
            endpoints: [
                {
                    method: "GET",
                    path: "/api/appointments",
                    title: "Get User Appointments",
                    description: "Get all appointments for logged-in customer",
                    headers: {
                        Authorization: "Bearer {token}"
                    },
                    response: {
                        success: {
                            status: "success",
                            data: [
                                {
                                    _id: "appointment_id",
                                    userId: {
                                        _id: "user_id",
                                        name: "John Doe",
                                        email: "john@example.com"
                                    },
                                    serviceId: {
                                        _id: "service_id",
                                        name: "Haircut",
                                        duration: 30,
                                        price: 25.00
                                    },
                                    status: "pending",
                                    appointmentDate: "2024-02-10T10:00:00.000Z",
                                    timeSlot: "10:00 AM",
                                    notes: "First time customer",
                                    dateBooked: "2024-02-01T08:00:00.000Z"
                                }
                            ]
                        }
                    }
                },
                {
                    method: "POST",
                    path: "/api/appointments",
                    title: "Create Appointment",
                    description: "Book a new appointment",
                    headers: {
                        Authorization: "Bearer {token}"
                    },
                    request: {
                        body: {
                            serviceId: "service_id",
                            appointmentDate: "2024-02-10T10:00:00.000Z",
                            timeSlot: "10:00 AM",
                            notes: "First time customer"
                        }
                    },
                    response: {
                        success: {
                            status: "success",
                            data: {
                                _id: "appointment_id",
                                status: "pending",
                                appointmentDate: "2024-02-10T10:00:00.000Z",
                                timeSlot: "10:00 AM",
                                notes: "First time customer"
                            }
                        },
                        error: {
                            status: "error",
                            message: "Invalid service ID or time slot not available"
                        }
                    }
                },
                {
                    method: "DELETE",
                    path: "/api/appointments/:id",
                    title: "Cancel Appointment",
                    description: "Cancel a specific appointment",
                    headers: {
                        Authorization: "Bearer {token}"
                    },
                    response: {
                        success: {
                            status: "success",
                            message: "Appointment cancelled successfully"
                        },
                        error: {
                            status: "error",
                            message: "Appointment not found or unauthorized"
                        }
                    }
                }
            ]
        },
        {
            category: "Admin Routes",
            endpoints: [
                {
                    method: "GET",
                    path: "/api/admin/appointments",
                    title: "Get All Appointments (Admin)",
                    description: "Get all appointments with sorting options",
                    headers: {
                        Authorization: "Bearer {token}"
                    },
                    query: {
                        sortBy: "date",
                        order: "desc"
                    },
                    response: {
                        success: {
                            status: "success",
                            data: [
                                {
                                    _id: "appointment_id",
                                    userId: {
                                        _id: "user_id",
                                        name: "John Doe"
                                    },
                                    serviceId: {
                                        _id: "service_id",
                                        name: "Haircut"
                                    },
                                    status: "pending",
                                    appointmentDate: "2024-02-10T10:00:00.000Z",
                                    timeSlot: "10:00 AM"
                                }
                            ]
                        }
                    }
                },
                {
                    method: "PATCH",
                    path: "/api/admin/appointments/:id",
                    title: "Update Appointment Status",
                    description: "Update the status of an appointment",
                    headers: {
                        Authorization: "Bearer {token}"
                    },
                    request: {
                        body: {
                            status: "accepted" // or "cancelled" or "completed"
                        }
                    },
                    response: {
                        success: {
                            status: "success",
                            data: {
                                _id: "appointment_id",
                                status: "accepted",
                                lastUpdated: "2024-02-01T08:00:00.000Z"
                            }
                        }
                    }
                },
                {
                    method: "POST",
                    path: "/api/admin/services",
                    title: "Add New Service",
                    description: "Create a new service",
                    headers: {
                        Authorization: "Bearer {token}"
                    },
                    request: {
                        body: {
                            name: "Haircut",
                            duration: 30,
                            price: 25.00,
                            description: "Basic haircut service"
                        }
                    },
                    response: {
                        success: {
                            status: "success",
                            data: {
                                _id: "service_id",
                                name: "Haircut",
                                duration: 30,
                                price: 25.00,
                                description: "Basic haircut service",
                                isActive: true
                            }
                        }
                    }
                },
                {
                    method: "PUT",
                    path: "/api/admin/services/:id",
                    title: "Update Service",
                    description: "Update an existing service",
                    headers: {
                        Authorization: "Bearer {token}"
                    },
                    request: {
                        body: {
                            name: "Haircut Deluxe",
                            duration: 45,
                            price: 35.00,
                            description: "Premium haircut service"
                        }
                    },
                    response: {
                        success: {
                            status: "success",
                            data: {
                                _id: "service_id",
                                name: "Haircut Deluxe",
                                duration: 45,
                                price: 35.00,
                                description: "Premium haircut service",
                                isActive: true
                            }
                        }
                    }
                },
                {
                    method: "DELETE",
                    path: "/api/admin/services/:id",
                    title: "Delete Service",
                    description: "Delete a service (soft delete - sets isActive to false)",
                    headers: {
                        Authorization: "Bearer {token}"
                    },
                    response: {
                        success: {
                            status: "success",
                            message: "Service deleted successfully"
                        }
                    }
                }
            ]
        }
    ];

    return (
        <div className="prose prose-lg max-w-none">
            <h1>API Reference</h1><br></br>

            {endpoints.map((category) => (
                <section key={category.category} className="mb-12">
                    <h2>{category.category}</h2> <br></br>

                    <div className="space-y-8">
                        {category.endpoints.map((endpoint) => (
                            <div key={endpoint.path} className="bg-white rounded-lg shadow-sm overflow-hidden">
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <span className={`px-2 py-1 text-sm font-semibold rounded-md ${endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                                                endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                                                    endpoint.method === 'DELETE' ? 'bg-red-100 text-red-800' :
                                                        'bg-gray-100 text-gray-800'
                                            }`}>
                                            {endpoint.method}
                                        </span>
                                        <code className="ml-2 text-sm">{endpoint.path}</code>
                                    </div>

                                    <h3 className="text-lg font-semibold mb-2">{endpoint.title}</h3>
                                    <p className="text-gray-600 mb-4">{endpoint.description}</p>

                                    {endpoint.request && (
                                        <div className="mb-4">
                                            <h3>Request</h3>
                                            <CodeBlock
                                                language="json"
                                                code={JSON.stringify(endpoint.request, null, 2)}
                                            />
                                        </div>
                                    )}

                                    <div>
                                        <h3>Response</h3><br></br>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <h5>Success</h5>
                                                <CodeBlock
                                                    language="json"
                                                    code={JSON.stringify(endpoint.response.success, null, 2)}
                                                />
                                            </div>
                                            {endpoint.response.error && (
                                                <div>
                                                    <h5>Error</h5>
                                                    <CodeBlock
                                                        language="json"
                                                        code={JSON.stringify(endpoint.response.error, null, 2)}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default ApiReference;