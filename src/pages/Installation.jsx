// src/pages/Installation.jsx
import CodeBlock from '../components/common/CodeBlock';
const Installation = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h1>Installation</h1>
      <br></br>

      <section className="mb-12">
        <h2>Prerequisites</h2><br></br>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul>
            <li>Node.js (v14 or higher)</li>
            <li>MongoDB</li>
            <li>npm or yarn</li>
            <li>Git</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2>Project Structure</h2>
        <CodeBlock
          language="bash"
          code={`
  appointment-system/
  ├── src/
  │   ├── config/
  │   ├── controllers/
  │   ├── middleware/
  │   ├── models/
  │   ├── routes/
  │   ├── utils/
  │   └── app.js
  ├── tests/
  ├── .env
  └── package.json
            `}
        />
      </section>

      <section className="mb-12">
        <h2>Installation Steps</h2> <br></br>
        <div className="space-y-6">
          <div>
            <h3>1. Clone the Repository</h3>
            <CodeBlock
              language="bash"
              code="git clone https://github.com/shaugnjs/appointment-management-api"
            />
          </div>

          <div>
            <h3>2. Install Dependencies</h3>
            <CodeBlock
              language="bash"
              code={`
  cd appointment-system
  npm install
              `}
            />
          </div>

          <div>
            <h3>3. Configure Environment Variables</h3>
            <CodeBlock
              language="bash"
              code={`
  PORT=3000
  MONGODB_URI=mongodb://localhost:27017/appointment-system
  JWT_SECRET=your_jwt_secret_key
  JWT_EXPIRE=24h
              `}
            />
          </div>

          <div>
            <h3>4. Start the Development Server</h3>
            <CodeBlock
              language="bash"
              code="npm run dev"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2>Troubleshooting</h2><br></br>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3>Common Issues</h3><br></br>
          <div className="space-y-4">
            <div>
              <h4>MongoDB Connection Issues</h4>
              <p>Ensure MongoDB is running and the connection string is correct in your .env file.</p>
            </div>
            <div>
              <h4>JWT Configuration</h4>
              <p>Make sure JWT_SECRET is properly set and JWT_EXPIRE is in valid format (e.g., "24h", "7d").</p>
            </div>
            <div>
              <h4>CORS Errors</h4>
              <p>Check your frontend origin matches the allowed origins in the backend CORS configuration.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Installation;