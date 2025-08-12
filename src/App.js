import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = () => (
  <header className="py-16 sm:py-20 bg-gradient-to-r from-red-600 to-red-800 text-white text-center">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
        Olatunji Ayokanmi Damilola
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
        Full-Stack JavaScript Developer Specializing in React, Node.js, Express,PostgreSQL, AI integration with OpenAI, Git & REST APIs
      </p>
    </div>
  </header>
);

const About = () => (
  <section id="about" className="py-12 sm:py-16">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400 mb-6">
        👨‍💻 About Me
      </h2>
      <p className="text-base sm:text-lg text-gray-100 leading-relaxed">
        I’m a passionate and detail-oriented Frontend & Fullstack Developer with hands-on experience building dynamic, responsive, and AI-powered applications using modern technologies such as React, Node.js, PostgreSQL, and OpenAI. I am a proud 3MTT Graduate and hold the ALX Professional Foundation Certificate in Software Development.
      </p>
      <p className="text-base sm:text-lg text-gray-100 leading-relaxed mt-4">
        My recent projects demonstrate my ability to design and deliver functional, user-focused products:
      </p>
      <ul className="list-disc list-inside text-base sm:text-lg text-gray-100 mt-4 space-y-2">
        <li>
          <strong>ShopWise</strong> – A fullstack e-commerce platform featuring product browsing, cart management, secure checkout, and AI-based product recommendations. Built with React, PostgreSQL, and Node.js, with a mobile-first, responsive UI.
        </li>
        <li>
          <strong>WatchWise</strong> – An AI-powered movie recommender app using the OpenAI API, Node.js backend, and PostgreSQL. Features include authentication, protected routes, and a modern Tailwind CSS interface.
        </li>
      </ul>
      <h3 className="text-xl sm:text-2xl font-semibold text-red-600 dark:text-red-400 mt-6 mb-4">
        Technical Skills & Tools
      </h3>
      <p className="text-base sm:text-lg text-gray-100">
        <strong>Languages & Frameworks:</strong> JavaScript, HTML5, CSS3, React.js, Tailwind CSS, Node.js, Express.js, PostgreSQL
      </p>
      <p className="text-base sm:text-lg text-gray-100 mt-2">
        <strong>Tools & Workflow:</strong> Git, GitHub, RESTful APIs, Agile, Netlify, Render, mobile-first & responsive design, UI/UX best practices
      </p>
      <p className="text-base sm:text-lg text-gray-100 mt-2">
        <strong>Specialties:</strong> AI integration, authentication & authorization, protected routes, secure API handling
      </p>
      <h3 className="text-xl sm:text-2xl font-semibold text-red-600 dark:text-red-400 mt-6 mb-4">
        Career Objective
      </h3>
      <p className="text-base sm:text-lg text-gray-100">
        I’m seeking remote or hybrid Frontend or Fullstack Developer roles in innovative, product-driven companies.
      </p>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-12 sm:py-16 bg-gray-900">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400 mb-8">
        📂 Projects
      </h2>
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-3">
            🛒 ShopWise E-Commerce
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4">
            A full-stack e-commerce platform built with React, Tailwind CSS, Node.js,
            Express, and PostgreSQL. Features AI-powered clothing recommendations via
            OpenRouter API, cart management, order tracking, and an admin dashboard.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Ayokanmii/ShopWise"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 dark:text-red-400 hover:underline font-medium"
              aria-label="View ShopWise on GitHub"
            >
              GitHub
            </a>
            <a
              href="https://damishopwise.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 dark:text-red-400 hover:underline font-medium"
              aria-label="View ShopWise live demo"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-3">
            🎬 WatchWise
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4">
            An AI-powered movie recommender app using the OpenAI API, Node.js backend,
            and PostgreSQL. Features include authentication, protected routes, and a
            modern Tailwind CSS interface.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Ayokanmii/WatchWise"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 dark:text-red-400 hover:underline font-medium"
              aria-label="View WatchWise on GitHub"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-3">
            ⚛️ React Hello World
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4">
            An introductory React project demonstrating component rendering and
            state management fundamentals.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Ayokanmii/react-hello-world"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 dark:text-red-400 hover:underline font-medium"
              aria-label="View React Hello World on GitHub"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-3">
            🌐 Profile Landing Page
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4">
            A static HTML/CSS personal landing page showcasing foundational web
            development skills and responsive design.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Ayokanmii/profile-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 dark:text-red-400 hover:underline font-medium"
              aria-label="View Profile Landing Page on GitHub"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Resume = () => (
  <section id="resume" className="py-12 sm:py-16">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400 mb-6">
        📄 Resume
      </h2>
      <p className="text-base sm:text-lg text-gray-100 mb-4">
        Download my resume to learn more about my skills, experience, and education.
      </p>
      <div className="flex space-x-4">
        <a
          href="/Olatunji_Ayokanmi_Resume.pdf"
          download
          className="inline-block bg-red-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
          aria-label="Download Olatunji Ayokanmi's resume"
        >
          Download Resume (PDF)
        </a>
        <a
          href="https://docs.google.com/document/d/1gLAIbslIuzrV_VyuGs2tgtAWEiwX0o7wpddgdQyna5Y/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-700 text-gray-100 font-medium py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
          aria-label="View Olatunji Ayokanmi's resume on Google Docs"
        >
          View on Google Docs
        </a>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-12 sm:py-16">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400 mb-6">
        📬 Contact
      </h2>
      <div className="text-base sm:text-lg text-gray-100 space-y-3">
        <p>
          Email:{' '}
          <a
            href="mailto:olatunjiayokanmii@gmail.com"
            className="text-red-600 dark:text-red-400 hover:underline"
            aria-label="Email Olatunji Ayokanmi"
          >
            olatunjiayokanmii@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/olatunjiayokanmi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 dark:text-red-400 hover:underline"
            aria-label="Visit Olatunji Ayokanmi's LinkedIn profile"
          >
            linkedin.com/in/olatunjiayokanmi
          </a>
        </p>
        <p>
          GitHub:{' '}
          <a
            href="https://github.com/Ayokanmii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 dark:text-red-400 hover:underline"
            aria-label="Visit Olatunji Ayokanmi's GitHub profile"
          >
            github.com/Ayokanmii
          </a>
        </p>
      </div>
    </div>
  </section>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;