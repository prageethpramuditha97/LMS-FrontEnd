import { Link } from "react-router-dom";

export default function PageNoFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-4">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 text-center max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
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