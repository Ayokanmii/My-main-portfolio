import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-800 shadow-lg z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-red-600 dark:text-red-400">
          Olatunji Ayokanmi
        </h1>
        <div className="flex space-x-4 sm:space-x-6">
          <Link
            to="/"
            className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            aria-label="Navigate to Home section"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            aria-label="Navigate to About section"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            aria-label="Navigate to Projects section"
          >
            Projects
          </Link>
          <Link
            to="/resume"
            className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            aria-label="Navigate to Resume section"
          >
            Resume
          </Link>
          <Link
            to="/contact"
            className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            aria-label="Navigate to Contact section"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}