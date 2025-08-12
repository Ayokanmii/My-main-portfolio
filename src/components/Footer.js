import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-200 dark:bg-gray-800 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-4">
          <Link
            to="https://github.com/Ayokanmii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            aria-label="Visit Olatunji Ayokanmi's GitHub profile"
          >
            GitHub
          </Link>
          <Link
            to="https://www.linkedin.com/in/olatunjiayokanmi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            aria-label="Visit Olatunji Ayokanmi's LinkedIn profile"
          >
            LinkedIn
          </Link>
          <Link
            to="mailto:olatunjiayokanmii@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            aria-label="Email Olatunji Ayokanmi"
          >
            Email
          </Link>
        </div>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Olatunji Ayokanmi Damilola. All rights reserved.
        </p>
      </div>
    </footer>
  );
}