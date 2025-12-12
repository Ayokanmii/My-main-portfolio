import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="sticky top-0 bg-gray-900/95 backdrop-blur-sm shadow-lg z-50 border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-rose-500">Olatunji Ayokanmi</h1>
      <div className="flex space-x-6">
        {['Home', 'About', 'Projects', 'Certificates', 'Resume', 'Contact'].map((item) => (
          <Link
            key={item}
            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
            className="text-gray-300 hover:text-rose-500 font-medium transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  </nav>
);

const FloatingResumeButton = () => (
  <a
    href="https://drive.google.com/uc?export=download&id=1MQCdGmyzzojA-Usaux1SMAbo6BBUysU-"
    className="fixed bottom-8 right-8 bg-rose-600 text-white font-bold py-4 px-6 rounded-full shadow-2xl hover:bg-rose-700 transition-all z-40 flex items-center gap-3 hover:scale-105"
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
    Download Resume
  </a>
);

const Footer = () => (
  <footer className="py-10 bg-gray-900 border-t border-gray-800 text-center">
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex justify-center space-x-8 mb-6">
        <a href="https://github.com/Ayokanmii" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rose-500 transition">GitHub</a>
        <a href="https://www.linkedin.com/in/olatunjiayokanmi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rose-500 transition">LinkedIn</a>
        <a href="mailto:olatunjiayokanmii@gmail.com" className="text-gray-400 hover:text-rose-500 transition">Email</a>
        <a href="https://wa.me/+2348103106438" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rose-500 transition">WhatsApp</a>
      </div>
      <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Olatunji Ayokanmi Damilola. All rights reserved.</p>
    </div>
  </footer>
);

const Home = () => (
  <header className="py-24 bg-gray-950 text-center">
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">Olatunji Ayokanmi Damilola</h1>
      <p className="text-2xl md:text-3xl text-rose-500 font-medium mb-8">Full-Stack Developer & AI Automation Specialist</p>
      <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
        Building intelligent, scalable applications with React, Node.js, PostgreSQL, and AI integrations (OpenAI, n8n). 
        Expert in workflow automation, fraud detection, sentiment analysis, and software testing.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Link to="/projects" className="bg-rose-600 text-white font-bold py-4 px-10 rounded-lg hover:bg-rose-700 transition">View Projects</Link>
        <Link to="/contact" className="border-2 border-rose-600 text-rose-500 font-bold py-4 px-10 rounded-lg hover:bg-rose-600 hover:text-white transition">Get In Touch</Link>
      </div>
    </div>
  </header>
);

const About = () => (
  <section className="py-20 bg-gray-950">
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-4xl font-extrabold text-rose-500 mb-8">About Me</h1>
      <div className="text-gray-300 space-y-6 text-lg leading-relaxed">
        <p>I am a passionate and detail-oriented Full-Stack Developer with hands-on experience in building dynamic, responsive, and AI-powered applications.</p>
        <p>Skilled in React, Tailwind CSS, Node.js, Express, PostgreSQL, and OpenAI API, I specialize in creating scalable solutions with clean, mobile-first UIs. I also bring strong expertise in Software Testing (Manual, Web, and Mobile App Testing), ensuring product quality and reliability.</p>
        <p>✨ Proud 3MTT Graduate • ALX Professional Foundation in Software Development</p>
      </div>

      <h3 className="text-2xl font-bold text-rose-500 mt-12 mb-6">Technical Skills</h3>
      <div className="flex flex-wrap gap-3">
        {['React.js', 'Node.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'PostgreSQL', 'Express.js', 'n8n Automation', 'OpenAI API', 'Git & GitHub', 'Postman', 'RESTful APIs', 'Software Testing', 'JWT Auth', 'Mobile-First Design'].map(skill => (
          <span key={skill} className="bg-gray-800 text-gray-200 px-5 py-3 rounded-full text-sm font-medium border border-gray-700">
            {skill}
          </span>
        ))}
      </div>

      <h3 className="text-2xl font-bold text-rose-500 mt-12 mb-4">Career Goal</h3>
      <p className="text-gray-300 text-lg">To contribute as a Full-Stack Developer or AI Automation Engineer in innovative, product-driven teams — delivering reliable, user-focused solutions worldwide.</p>
    </div>
  </section>
);

const Projects = () => (
  <section className="py-20 bg-gray-950">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-rose-500 text-center mb-12">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* All your original + new projects */}
        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">🛒 ShopWise E-Commerce</h3>
            <p className="text-gray-300 mb-6">Full-stack AI-powered e-commerce with JWT auth, cart, admin dashboard, and OpenRouter recommendations.</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/Ayokanmii/ShopWise" target="_blank" className="text-rose-500 hover:underline">GitHub</a>
              <a href="https://damishopwise.netlify.app" target="_blank" className="text-rose-500 hover:underline">Live</a>
              <a href="https://youtu.be/OdTeS47qF9Q" target="_blank" className="text-rose-500 hover:underline">Video</a>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">♻️ EcoCycle NG</h3>
            <p className="text-gray-300 mb-6">Sustainable waste management platform for scheduling pickups and promoting recycling in Nigeria.</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/Ayokanmii/EcoCycle" target="_blank" className="text-rose-500 hover:underline">GitHub</a>
              <a href="https://eco-cycle-ng.vercel.app" target="_blank" className="text-rose-500 hover:underline">Live Demo</a>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">🤖 Telegram Automated Sales Bot</h3>
            <p className="text-gray-300 mb-6">AI-powered Telegram bot handling sales, payments, inventory, and customer support autonomously.</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.facebook.com/share/v/17udHe3CEn/" target="_blank" className="text-rose-500 hover:underline">Video Demo</a>
            </div>
          </div>
        </div>

        {/* Add the rest of your original projects here in the same format */}
        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">🎬 WatchWise</h3>
            <p className="text-gray-300 mb-6">AI movie recommender with OpenAI, protected routes, and watchlist.</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/Ayokanmii/movie-recommendation-app" target="_blank" className="text-rose-500 hover:underline">GitHub</a>
              <a href="https://youtu.be/jYt-fKd6vp0" target="_blank" className="text-rose-500 hover:underline">Demo</a>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">🛡️ Fraud Detection Automation</h3>
            <p className="text-gray-300 mb-6">n8n + AI workflow detecting fraudulent transaction patterns.</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/Ayokanmii/Advanced-Fraud-Detection" target="_blank" className="text-rose-500 hover:underline">GitHub</a>
              <a href="https://youtu.be/6eE-1OU0z8k" target="_blank" className="text-rose-500 hover:underline">Demo</a>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">📩 AI Marketing Campaign</h3>
            <p className="text-gray-300 mb-6">n8n automation for personalized emails and customer segmentation.</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/Ayokanmii/Marketing_compaign" target="_blank" className="text-rose-500 hover:underline">GitHub</a>
              <a href="https://youtu.be/5kwYrjb8zFg" target="_blank" className="text-rose-500 hover:underline">Demo</a>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">📊 Amazon Sentiment Analyzer</h3>
            <p className="text-gray-300 mb-6">n8n workflow scraping and analyzing Amazon reviews with AI.</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/Ayokanmii/Analyze-Sentiment" target="_blank" className="text-rose-500 hover:underline">GitHub</a>
              <a href="https://youtube.com/shorts/WDxzv2CmGuo?si=mv_GFlf5-QhC9HRn" target="_blank" className="text-rose-500 hover:underline">Demo</a>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">🤖 Wokkathon AI Agents</h3>
            <p className="text-gray-300 mb-6">20+ AI agents built with n8n + OpenAI for productivity.</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/Ayokanmii/Customer-support-auto" target="_blank" className="text-rose-500 hover:underline">GitHub</a>
              <a href="https://youtube.com/shorts/zxfP8SzOdTA?si=Wd1iHi7msWo4PmBF" target="_blank" className="text-rose-500 hover:underline">Demo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Certificates = () => {
  const [selected, setSelected] = useState(null);

  const certificates = [
    { name: "3MTT Nigeria Technical Training", url: "https://drive.google.com/file/d/1klUApH81znCS-C12Lh3rK85PC7_hlxrJ/preview" },
    { name: "ALX Professional Foundation Certificate", url: "https://drive.google.com/file/d/1QyvKHeTZbfvEI_DwfOs_V1heciHGz9Vu/preview" },
    { name: "Microsoft-Supported AI Fundamentals", url: "https://drive.google.com/file/d/1qE8MKCwvV5rMk-QJkstCgcLIo9Rkke_N/preview" },
    { name: "NYSC Certificate", url: "https://drive.google.com/file/d/15idKuQ3lpL_QmMQvImIhX8BSAk0GbD4B/preview" },
    { name: "B.Sc. Statement of Result", url: "https://drive.google.com/file/d/1Cg9nwsiRVdfM-M4ILJqF2PyqedQqkDMZ/preview" },
  ];

  return (
    <section className="py-20 bg-gray-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-rose-500 text-center mb-12">Certificates & Credentials</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <div
              key={cert.name}
              onClick={() => setSelected(cert.url)}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className="h-64 bg-gray-700">
                <iframe src={cert.url} title={cert.name} className="w-full h-full" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div onClick={() => setSelected(null)} className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl w-full">
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-white text-4xl hover:text-rose-500 z-10">&times;</button>
              <iframe src={selected} title="Full Certificate" className="w-full h-screen rounded-lg" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const Resume = () => (
  <section className="py-20 bg-gray-950 text-center">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-rose-500 mb-8">Resume</h2>
      <p className="text-xl text-gray-300 mb-10">Download my latest resume for full details</p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <a href="https://drive.google.com/uc?export=download&id=1MQCdGmyzzojA-Usaux1SMAbo6BBUysU-" className="bg-rose-600 text-white font-bold py-4 px-10 rounded-lg hover:bg-rose-700 transition">
          Download PDF
        </a>
        <a href="https://drive.google.com/file/d/1MQCdGmyzzojA-Usaux1SMAbo6BBUysU-/view?usp=sharing" target="_blank" className="bg-gray-700 text-white font-bold py-4 px-10 rounded-lg hover:bg-gray-600 transition">
          View Online
        </a>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-20 bg-gray-950">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-rose-500 mb-12">Get In Touch</h2>
      <div className="space-y-8 text-lg text-gray-300">
        <p>Email: <a href="mailto:olatunjiayokanmii@gmail.com" className="text-rose-500 hover:underline">olatunjiayokanmii@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/olatunjiayokanmi" target="_blank" className="text-rose-500 hover:underline">linkedin.com/in/olatunjiayokanmi</a></p>
        <p>GitHub: <a href="https://github.com/Ayokanmii" target="_blank" className="text-rose-500 hover:underline">github.com/Ayokanmii</a></p>
        <p><a href="https://wa.me/+2348103106438" target="_blank" className="inline-block bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition font-medium">Message on WhatsApp</a></p>
      </div>
    </div>
  </section>
);

const App = () => (
  <Router>
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <FloatingResumeButton />
      <Routes>
        <Route path="/" element={<Home />} />
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
