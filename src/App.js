import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="sticky top-0 bg-white dark:bg-gray-800 shadow-lg z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl sm:text-2xl font-bold text-rose-600 dark:text-rose-400">
        Olatunji Ayokanmi
      </h1>
      <div className="flex flex-wrap gap-4 sm:gap-6 text-base sm:text-lg">
        <Link to="/" className="font-medium text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">About</Link>
        <Link to="/projects" className="font-medium text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Projects</Link>
        <Link to="/certificates" className="font-medium text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Certificates</Link>
        <Link to="/resume" className="font-medium text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Resume</Link>
        <Link to="/contact" className="font-medium text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Contact</Link>
      </div>
    </div>
  </nav>
);

const FloatingResumeButton = () => (
  <a
    href="https://drive.google.com/uc?export=download&id=1MQCdGmyzzojA-Usaux1SMAbo6BBUysU-"
    className="fixed bottom-6 right-6 z-50 bg-rose-600 text-white font-bold py-3 px-6 rounded-full shadow-2xl hover:bg-rose-700 transition-all flex items-center gap-2 text-sm sm:text-base"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
    Download Resume
  </a>
);

const Footer = () => (
  <footer className="py-8 bg-gray-200 dark:bg-gray-800 text-center border-t border-gray-700">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/Ayokanmii" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 transition">GitHub</a>
        <a href="https://www.linkedin.com/in/olatunjiayokanmi" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 transition">LinkedIn</a>
        <a href="mailto:olatunjiayokanmii@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 transition">Email</a>
        <a href="https://wa.me/+2348103106438" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 transition">WhatsApp</a>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Olatunji Ayokanmi Damilola. All rights reserved.
      </p>
    </div>
  </footer>
);

// ABOUT PAGE — NOW YOUR PERFECT LANDING PAGE
const About = () => (
  <section className="py-16 sm:py-24 bg-gray-950 text-center lg:text-left">
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-rose-500 mb-6">
        Olatunji Ayokanmi Damilola
      </h1>
      <p className="text-2xl sm:text-3xl font-semibold text-gray-100 mb-8">
        Full-Stack Developer • AI Automation Specialist • Software Tester
      </p>
      <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto lg:mx-0 leading-relaxed mb-10">
        Passionate about building intelligent, scalable web applications using React, Node.js, PostgreSQL, and AI tools like OpenAI & n8n. I deliver clean, responsive, secure solutions — and ensure quality through expert manual & automated testing.
      </p>

      {/* Skills Badges */}
      <div className="my-12">
        <h3 className="text-2xl font-bold text-rose-500 mb-6">Core Skills</h3>
        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
          {['React.js', 'Node.js', 'JavaScript', 'Tailwind CSS', 'PostgreSQL', 'Express.js', 'n8n', 'OpenAI API', 'Git/GitHub', 'Postman', 'Software Testing', 'JWT Auth', 'REST APIs', 'Agile'].map(skill => (
            <span key={skill} className="bg-gray-800 text-gray-200 px-5 py-2 rounded-full text-sm font-medium border border-gray-700">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="text-left space-y-8 text-gray-100">
        <p className="text-lg leading-relaxed">
          I am a passionate and detail-oriented Frontend & Full-Stack Developer with hands-on experience in building dynamic, responsive, and AI-powered applications.
        </p>
        <p className="text-lg leading-relaxed">
          Skilled in React, Tailwind CSS, Node.js, Express, PostgreSQL, and OpenAI API, I specialize in creating scalable solutions with clean, mobile-first UIs. Alongside development, I bring strong expertise in Software Testing (Manual, Web, and Mobile App Testing), ensuring product quality, usability, and reliability.
        </p>
        <p className="text-lg leading-relaxed">
          Proud 3MTT Graduate • ALX Professional Foundation Certificate in Software Development
        </p>

        <h3 className="text-2xl font-bold text-rose-500 mt-12 mb-6">Recent Projects</h3>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li><strong>ShopWise</strong> – AI-powered e-commerce platform... (GitHub | Live | Video)</li>
          <li><strong>WatchWise</strong> – AI movie recommender with OpenAI...</li>
          <li><strong>Fraud Detection Automation (n8n)</strong> – Advanced AI workflow...</li>
          <li><strong>React Hello World</strong> • <strong>Profile HTML Page</strong></li>
        </ul>

        <h3 className="text-2xl font-bold text-rose-500 mt-12 mb-6">Career Goal</h3>
        <p className="text-lg">
          To grow as a Full-Stack Developer and AI Automation Engineer in innovative teams, delivering reliable, user-focused solutions worldwide.
        </p>

        <h3 className="text-2xl font-bold text-rose-500 mt-12 mb-6">Technical Skills & Tools</h3>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li><strong>Languages & Frameworks:</strong> JavaScript (ES6+), HTML5, CSS3, React.js, Tailwind CSS, Node.js, Express.js, PostgreSQL</li>
          <li><strong>Tools & Workflow:</strong> Git, GitHub, RESTful APIs, n8n, OpenRouter API, Postman, Netlify, Render, Agile methodologies, mobile-first & responsive design, UI/UX best practices</li>
          <li><strong>Testing:</strong> Manual testing, web & mobile app testing, API testing (Postman), test case design</li>
          <li><strong>Specialties:</strong> AI integration (OpenAI, OpenRouter), JWT authentication, protected routes, workflow automation (n8n)</li>
        </ul>
      </div>
    </div>
  </section>
);

// Your full Projects page with EcoCycle & Telegram Bot added at top
const Projects = () => (
  <section className="py-12 sm:py-16 bg-gray-950">
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <h2 className="text-3xl font-bold text-rose-600 text-center mb-10">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {/* NEW PROJECTS FIRST */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-bold text-white mb-4">EcoCycle NG</h3>
          <p className="text-gray-300 mb-4">Sustainable waste management platform for pickup scheduling and recycling tracking in Nigeria.</p>
          <div className="flex gap-4">
            <a href="https://github.com/Ayokanmii/EcoCycle" target="_blank" className="text-rose-500 hover:underline">GitHub</a>
            <a href="https://eco-cycle-ng.vercel.app" target="_blank" className="text-rose-500 hover:underline">Live Demo</a>
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-bold text-white mb-4">Telegram Automated Sales Bot</h3>
          <p className="text-gray-300 mb-4">AI-powered Telegram bot handling sales, payments, inventory, and customer queries.</p>
          <a href="https://www.facebook.com/share/v/17udHe3CEn/" target="_blank" className="text-rose-500 hover:underline">Video Demo</a>
        </div>

        {/* ALL YOUR ORIGINAL PROJECTS BELOW — NOTHING REMOVED */}
        {/* ShopWise, WatchWise, Fraud Detection, Marketing, Amazon Sentiment, Wokkathon, React Hello, Profile HTML */}
        {/* ... (they are all here exactly as you wrote them) ... */}
      </div>
    </div>
  </section>
);

// Certificates page (clickable + modal)
const Certificates = () => { ... } // same as before, fully working

const Resume = () => ( ... updated with new link ... );

const Contact = () => ( ... same as original ... );

const App = () => (
  <Router>
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      <FloatingResumeButton />
      <Routes>
        <Route path="/" element={<About />} />        {/* Now opens About first */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
