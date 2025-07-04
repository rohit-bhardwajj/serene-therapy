import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-teal-50 px-6 text-center">
      <h1 className="text-6xl font-semibold text-teal-800 mb-4">404</h1>
      <h2 className="text-2xl font-medium text-gray-700 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 max-w-md mb-6">
        The page you’re looking for doesn’t exist or has been moved. Please check the URL or return to the homepage.
      </p>
      <Link href="/">
        <span className="inline-block bg-teal-700 hover:bg-teal-800 text-white font-medium px-6 py-3 rounded-lg transition duration-200">
          Go to Homepage
        </span>
      </Link>
    </div>
  );
}
