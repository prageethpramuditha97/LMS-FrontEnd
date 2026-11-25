// src/Errors/NotAuthorized.tsx
import { Link } from 'react-router-dom';

function NotAuthorized() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-4">
        <img
            src="https://media.istockphoto.com/id/2158752058/vector/403-error-access-denied-server-message-about-web-page-denial-to-load-and-tiny-people.jpg?s=612x612&w=0&k=20&c=01ZpcPLHEViBX_KpROswqRwPIwxcC2FdXdIXW9_fw4Q=" // Replace with your actual image path or import
            alt="403 Forbidden"
            className="mx-auto w-full max-w-md"
        />
      <h2 className="text-2xl font-semibold mb-2">Access Denied</h2>
      <p className="mb-6 text-center max-w-md">
        The page you’re trying to access has restricted access.
        <br />
        Please refer to your system administrator.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
}

export default NotAuthorized;