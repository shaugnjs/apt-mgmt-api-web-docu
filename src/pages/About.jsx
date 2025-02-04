// src/pages/About.jsx
const About = () => {
    const teamMembers = [
      {
        name: "Sean Johnson Saulog",
        role: "Developer",
        image: "/team/sean.jpg"
      },
      {
        name: "Dean Allen Dela Cruz",
        role: "Developer",
        image: "/team/dean.jpg"
      },
      {
        name: "Irine Mae Ompaling",
        role: "Developer",
        image: "/team/irine.png"
      },
      {
        name: "Mikaela Lim",
        role: "Developer",
        image: "/team/mikaela.jpg"
      },
      {
        name: "Lui Ranz Sinlao",
        role: "Developer",
        image: "/team/luiranz.jpg"
      },
      {
        name: "Zyrell Rezano",
        role: "Developer",
        image: "/team/zyrell.jpg"
      }
    ];
  
    return (
      <div className="prose prose-lg max-w-none">
        <h1>About the Developers</h1><br></br>
  
        <section className="mb-12">
          <h2>Project Information</h2><br></br>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <ul className="list-none p-0">
              <li className="mb-2"><strong>Course:</strong> ITEC 116 Final Project</li>
              <li className="mb-2"><strong>Section:</strong> BSIT 4-2</li>
              <li className="mb-2"><strong>School:</strong> Cavite State University - Main Campus</li>
            </ul>
          </div>
        </section>
  
        <section className="mb-12">
          <h2>Development Team</h2><br></br>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        <section className="mb-12">
          <h2>Technologies Used</h2><br></br>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'React', 'Node.js', 'MongoDB', 'Express',
              'JWT', 'Tailwind CSS', 'Axios', 'Git'
            ].map((tech) => (
              <div key={tech} className="bg-white p-4 rounded-lg shadow-sm text-center">
                {tech}
              </div>
            ))}
          </div>
        </section>
  
        <section className="mb-12">
          <h2>Contact Information</h2><br></br>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p>For inquiries about this project, please contact:</p>
            <div className="mt-4">
              <a 
                href="mailto:saulogsj@gmail.com"
                className="text-blue-600 hover:text-blue-800"
              >
                saulogsj@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default About;