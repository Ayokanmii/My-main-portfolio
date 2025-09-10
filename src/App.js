import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => (
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

const Footer = () => (
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
        <Link
          to="https://wa.me/+2348103106438"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          aria-label="Message Olatunji Ayokanmi on WhatsApp"
        >
          WhatsApp
        </Link>
      </div>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Olatunji Ayokanmi Damilola. All rights reserved.
      </p>
    </div>
  </footer>
);

const Home = () => (
  <header className="py-16 sm:py-20 bg-black text-white text-center">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
        Olatunji Ayokanmi Damilola
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
        Frontend & Full-Stack Developer and Software Tester specializing in React, Node.js, PostgreSQL, AI integration with OpenAI/n8n, and manual/web/mobile app testing.
      </p>
    </div>
  </header>
);

const About = () => (
  <section id="about" className="py-12 sm:py-16 bg-gray-950">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-red-600 dark:text-red-400 mb-2">
        Olatunji Ayokanmi Damilola
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-6">
        Frontend & Full-Stack Developer | Software Tester
      </h2>
      <p className="text-base sm:text-lg text-gray-100 leading-relaxed mb-4">
        I am a passionate and detail-oriented Frontend & Full-Stack Developer with hands-on experience in building dynamic, responsive, and AI-powered applications.
      </p>
      <p className="text-base sm:text-lg text-gray-100 leading-relaxed mb-4">
        Skilled in React, Tailwind CSS, Node.js, Express, PostgreSQL, and OpenAI API, I specialize in creating scalable solutions with clean, mobile-first UIs. Alongside development, I bring strong expertise in Software Testing (Manual, Web, and Mobile App Testing), ensuring product quality, usability, and reliability.
      </p>
      <p className="text-base sm:text-lg text-gray-100 leading-relaxed mb-6">
        ✨ I am a proud 3MTT Graduate and hold the ALX Professional Foundation Certificate in Software Development, further strengthening my technical foundation and collaborative skills.
      </p>
      <h3 className="text-xl sm:text-2xl font-semibold text-red-600 dark:text-red-400 mb-4">
        Recent Projects
      </h3>
      <ul className="list-disc list-inside text-base sm:text-lg text-gray-100 mb-6 space-y-2">
        <li>
          <strong>ShopWise</strong> – AI-powered e-commerce platform with secure JWT authentication, cart management, and admin dashboard.{' '}
          <a
            href="https://github.com/Ayokanmii/ShopWise"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 dark:text-red-400 hover:underline"
            aria-label="View ShopWise on GitHub"
          >
            GitHub
          </a>
          {' | '}
          <a
            href="https://damishopwise.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 dark:text-red-400 hover:underline"
            aria-label="View ShopWise live demo"
          >
            Live Demo
          </a>
          {' | '}
          <a
            href="https://youtu.be/OdTeS47qF9Q"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 dark:text-red-400 hover:underline"
            aria-label="View ShopWise video demo"
          >
            Video Demo
          </a>
        </li>
        <li>
          <strong>WatchWise</strong> – Movie recommendation app integrating OpenAI for personalized suggestions, with protected routes and watchlist functionality.{' '}
          <a
            href="https://github.com/Ayokanmii/WatchWise"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 dark:text-red-400 hover:underline"
            aria-label="View WatchWise on GitHub"
          >
            GitHub
          </a>
          {' | '}
          <a
            href="https://youtu.be/jYt-fKd6vp0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 dark:text-red-400 hover:underline"
            aria-label="View WatchWise video demo"
          >
            Video Demo
          </a>
        </li>
        <li>
          <strong>Fraud Detection Automation (n8n)</strong> – Advanced workflow leveraging AI + n8n automation to detect fraudulent patterns in transactions.{' '}
          <a
            href="https://github.com/Ayokanmii/Advanced-Fraud-Detection"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 dark:text-red-400 hover:underline"
            aria-label="View Fraud Detection Automation on GitHub"
          >
            GitHub
          </a>
          {' | '}
          <a
            href="https://youtu.be/6eE-1OU0z8k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 dark:text-red-400 hover:underline"
            aria-label="View Fraud Detection Automation demo"
          >
            Demo
          </a>
        </li>
        <li>
          <strong>React Hello World App</strong> – Demonstration of component rendering and state management fundamentals.{' '}
          <a
            href="https://github.com/Ayokanmii/react-hello-world"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 dark:text-red-400 hover:underline"
            aria-label="View React Hello World on GitHub"
          >
            GitHub
          </a>
        </li>
        <li>
          <strong>Profile HTML Page</strong> – Static responsive landing page showcasing clean HTML/CSS design.{' '}
          <a
            href="https://github.com/Ayokanmii/profile-page"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 dark:text-red-400 hover:underline"
            aria-label="View Profile HTML Page on GitHub"
          >
            GitHub
          </a>
        </li>
      </ul>
      <h3 className="text-xl sm:text-2xl font-semibold text-red-600 dark:text-red-400 mb-4">
        Career Goal
      </h3>
      <p className="text-base sm:text-lg text-gray-100 mb-6">
        To contribute as a Frontend / Full-Stack Developer within innovative, product-driven teams while leveraging my software testing experience to improve user experience and product reliability.
      </p>
      <h3 className="text-xl sm:text-2xl font-semibold text-red-600 dark:text-red-400 mb-4">
        Technical Skills & Tools
      </h3>
      <ul className="list-disc list-inside text-base sm:text-lg text-gray-100 space-y-2">
        <li><strong>Languages & Frameworks:</strong> JavaScript (ES6+), HTML5, CSS3, React.js, Tailwind CSS, Node.js, Express.js, PostgreSQL</li>
        <li><strong>Tools & Workflow:</strong> Git, GitHub, RESTful APIs, n8n, OpenRouter API, Postman, Netlify, Render, Agile methodologies, mobile-first & responsive design, UI/UX best practices</li>
        <li><strong>Testing:</strong> Manual testing, web & mobile app testing, API testing (Postman), test case design</li>
        <li><strong>Specialties:</strong> AI integration (OpenAI, OpenRouter), authentication & authorization (JWT), protected routes, secure API handling, workflow automation (n8n)</li>
      </ul>
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
            A full-stack e-commerce platform built with React, Tailwind CSS, Node.js, Express, and PostgreSQL. Features AI-powered clothing recommendations via OpenRouter API, cart management, order tracking, and an admin dashboard.
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
            <a
              href="https://youtu.be/OdTeS47qF9Q"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 dark:text-red-400 hover:underline font-medium"
              aria-label="View ShopWise video demo"
            >
              Video Demo
            </a>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-3">
            🎬 WatchWise
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4">
            An AI-powered movie recommender app using the OpenAI API, Node.js backend, and PostgreSQL. Features include authentication, protected routes, and a modern Tailwind CSS interface.
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
            <a
              href="https://youtu.be/jYt-fKd6vp0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 dark:text-red-400 hover:underline font-medium"
              aria-label="View WatchWise video demo"
            >
              Video Demo
            </a>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-3">
            🛡️ Fraud Detection Automation (n8n)
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4">
            Advanced workflow leveraging AI + n8n automation to detect fraudulent patterns in transactions.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Ayokanmii/Advanced-Fraud-Detection"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 dark:text-red-400 hover:underline font-medium"
              aria-label="View Fraud Detection Automation on GitHub"
            >
              GitHub
            </a>
            <a
              href="https://youtu.be/6eE-1OU0z8k"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 dark:text-red-400 hover:underline font-medium"
              aria-label="View Fraud Detection Automation demo"
            >
              Demo
            </a>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-3">
            📩 AI Marketing Campaign Automation
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4">
            AI-powered automated email campaign system built with n8n. Generates personalized emails, segments customers, delivers via Gmail API, and logs results in Google Sheets.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Ayokanmii/Marketing_compaign"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 dark:text-red-400 hover:underline font-medium"
              aria-label="View AI Marketing Campaign Automation on GitHub"
            >
              GitHub
            </a>
            <a
              href="https://youtu.be/5kwYrjb8zFg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 dark:text-red-400 hover:underline font-medium"
              aria-label="View AI Marketing Campaign Automation demo"
            >
              Demo
            </a>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-3">
            📊 Amazon Review Sentiment Analyzer
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4">
            Automated n8n workflow that scrapes Amazon reviews, classifies sentiment with AI, logs to Google Sheets, and emails daily summaries. Helps track customer satisfaction trends.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Ayokanmii/Analyze-Sentiment"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 dark:text-red-400 hover:underline font-medium"
              aria-label="View Amazon Review Sentiment Analyzer on GitHub"
            >
              GitHub
            </a>
            <a
              href="https://youtube.com/shorts/WDxzv2CmGuo?si=mv_GFlf5-QhC9HRn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 dark:text-red-400 hover:underline font-medium"
              aria-label="View Amazon Review Sentiment Analyzer demo"
            >
              Demo
            </a>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-3">
            🤖 Wokkathon AI Agents
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4">
            Built for Wokkathon 1.0 challenge — a collection of 20 AI-powered agents (summarizer, email assistant, translator, etc.) using n8n + OpenAI. Focused on productivity and automation.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Ayokanmii/Customer-support-auto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 dark:text-red-400 hover:underline font-medium"
              aria-label="View Wokkathon AI Agents on GitHub"
            >
              GitHub
            </a>
            <a
              href="https://youtube.com/shorts/zxfP8SzOdTA?si=Wd1iHi7msWo4PmBF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 dark:text-red-400 hover:underline font-medium"
              aria-label="View Wokkathon AI Agents demo"
            >
              Demo
            </a>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-3">
            ⚛️ React Hello World App
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4">
            An introductory React project demonstrating component rendering and state management fundamentals.
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
            🌐 Profile HTML Page
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4">
            A static HTML/CSS personal landing page showcasing foundational web development skills and responsive design.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Ayokanmii/profile-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 dark:text-red-400 hover:underline font-medium"
              aria-label="View Profile HTML Page on GitHub"
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
  <section id="resume" className="py-12 sm:py-16 bg-gray-950">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400 mb-6">
        📄 Resume
      </h2>
      <p className="text-base sm:text-lg text-gray-100 mb-4">
        Download my resume to learn more about my skills, experience, and education.
      </p>
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <a
          href="https://drive.google.com/uc?export=download&id=1xTv5yGOo0ypwQF6ITw6sSL-SUklE5VMR"
          className="inline-block bg-red-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
          aria-label="Download Olatunji Ayokanmi's resume"
        >
          Download Resume (PDF)
        </a>
        <a
          href="https://drive.google.com/file/d/1xTv5yGOo0ypwQF6ITw6sSL-SUklE5VMR/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-700 text-gray-100 font-medium py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
          aria-label="View Olatunji Ayokanmi's resume on Google Docs"
        >
          View Resume on Google Docs
        </a>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-12 sm:py-16 bg-gray-950">
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
        <p>
          WhatsApp:{' '}
          <a
            href="https://wa.me/+2348103106438"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
            aria-label="Message Olatunji Ayokanmi on WhatsApp"
          >
            Message on WhatsApp
          </a>
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-4">
          <a
            href="https://drive.google.com/uc?export=download&id=1xTv5yGOo0ypwQF6ITw6sSL-SUklE5VMR"
            className="inline-block bg-red-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
            aria-label="Download Olatunji Ayokanmi's resume"
          >
            Download Resume
          </a>
          <a
            href="https://drive.google.com/file/d/1xTv5yGOo0ypwQF6ITw6sSL-SUklE5VMR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-700 text-gray-100 font-medium py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
            aria-label="View Olatunji Ayokanmi's resume on Google Docs"
          >
            View Resume on Google Docs
          </a>
        </div>
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
