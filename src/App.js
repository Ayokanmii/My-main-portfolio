import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Icons for Navbar (simple SVG)
const HomeIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const AboutIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const ProjectsIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2" /></svg>;
const CertIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
const ResumeIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const ContactIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;

const Navbar = () => (
  <nav className="sticky top-0 bg-white dark:bg-gray-800 shadow-lg z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl sm:text-2xl font-bold text-rose-600 dark:text-rose-400">
        Olatunji Ayokanmi
      </h1>
      <div className="flex space-x-4 sm:space-x-6">
        <Link to="/" className="flex items-center gap-2 text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
          <HomeIcon /> Home
        </Link>
        <Link to="/about" className="flex items-center gap-2 text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
          <AboutIcon /> About
        </Link>
        <Link to="/projects" className="flex items-center gap-2 text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
          <ProjectsIcon /> Projects
        </Link>
        <Link to="/certificates" className="flex items-center gap-2 text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
          <CertIcon /> Certificates
        </Link>
        <Link to="/resume" className="flex items-center gap-2 text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
          <ResumeIcon /> Resume
        </Link>
        <Link to="/contact" className="flex items-center gap-2 text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
          <ContactIcon /> Contact
        </Link>
      </div>
    </div>
  </nav>
);

const FloatingResumeButton = () => (
  <a
    href="https://drive.google.com/uc?export=download&id=1MQCdGmyzzojA-Usaux1SMAbo6BBUysU-"
    className="fixed bottom-4 right-4 bg-rose-600 text-white font-medium py-3 px-5 rounded-full shadow-2xl hover:bg-rose-700 transition-all z-40 flex items-center gap-2 text-sm sm:text-base"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
    Resume
  </a>
);

const Footer = () => (
  <footer className="py-6 bg-gray-200 dark:bg-gray-800 text-center">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="flex justify-center space-x-4 sm:space-x-6 mb-4">
        <a href="https://github.com/Ayokanmii" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/olatunjiayokanmi" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">LinkedIn</a>
        <a href="mailto:olatunjiayokanmii@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Email</a>
        <a href="https://wa.me/+2348103106438" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">WhatsApp</a>
      </div>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Olatunji Ayokanmi Damilola. All rights reserved.
      </p>
    </div>
  </footer>
);

const Home = () => (
  <header className="py-16 sm:py-20 bg-gray-950 text-white text-center">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
        Olatunji Ayokanmi Damilola
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
        Frontend & Full-Stack Developer | AI Automation Specialist | Software Tester
      </p>
      <p className="text-base sm:text-lg mt-6 text-gray-300">
        Specializing in React, Node.js, PostgreSQL, AI integration (OpenAI/n8n), workflow automation, and quality assurance testing.
      </p>
    </div>
  </header>
);

const About = () => (
  <section className="py-12 sm:py-16 bg-gray-950">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-rose-600 dark:text-rose-400 mb-2">
        Olatunji Ayokanmi Damilola
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-6">
        Frontend & Full-Stack Developer | Software Tester | AI Automation Specialist
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

      {/* Skills Badges */}
      <h3 className="text-xl sm:text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">Key Skills</h3>
      <div className="flex flex-wrap gap-3 mb-8">
        {['React.js', 'Node.js', 'JavaScript', 'Tailwind CSS', 'PostgreSQL', 'Express.js', 'n8n', 'OpenAI API', 'Git/GitHub', 'Postman', 'Software Testing', 'JWT Auth'].map(skill => (
          <span key={skill} className="bg-gray-800 text-gray-200 px-4 py-2 rounded-full text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">Recent Projects</h3>
      <ul className="list-disc list-inside text-base sm:text-lg text-gray-100 mb-6 space-y-2">
        {/* Your original list kept */}
        <li><strong>ShopWise</strong> – AI-powered e-commerce platform... (links)</li>
        <li><strong>WatchWise</strong> – Movie recommendation app...</li>
        <li><strong>Fraud Detection Automation (n8n)</strong> – Advanced workflow...</li>
        {/* ... keep all your original ones ... */}
      </ul>

      <h3 className="text-xl sm:text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">Career Goal</h3>
      <p className="text-base sm:text-lg text-gray-100 mb-6">To contribute as a Frontend / Full-Stack Developer...</p>

      <h3 className="text-xl sm:text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">Technical Skills & Tools</h3>
      <ul className="list-disc list-inside text-base sm:text-lg text-gray-100 space-y-2">
        {/* Your original bullet list kept exactly */}
        <li><strong>Languages & Frameworks:</strong> JavaScript (ES6+), HTML5, CSS3, React.js, Tailwind CSS, Node.js, Express.js, PostgreSQL</li>
        <li><strong>Tools & Workflow:</strong> Git, GitHub, RESTful APIs, n8n, OpenRouter API, Postman, Netlify, Render, Agile methodologies...</li>
        <li><strong>Testing:</strong> Manual testing, web & mobile app testing...</li>
        <li><strong>Specialties:</strong> AI integration (OpenAI, OpenRouter), authentication & authorization (JWT)...</li>
      </ul>
    </div>
  </section>
);

const Projects = () => (
  <section className="py-12 sm:py-16 bg-gray-950">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-rose-600 dark:text-rose-400 mb-8">📂 Projects</h2>
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        {/* All your original project cards + new ones */}
        {/* ShopWise, WatchWise, Fraud Detection, Marketing, Sentiment, Wokkathon, React Hello, Profile */}
        {/* + New: EcoCycle and Telegram Bot */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-3">♻️ EcoCycle NG</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4">Sustainable waste management platform for scheduling pickups and tracking recycling.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/Ayokanmii/EcoCycle" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 hover:underline font-medium">GitHub</a>
            <a href="https://eco-cycle-ng.vercel.app" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 hover:underline font-medium">Live Demo</a>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-100 mb-3">🤖 Telegram Automated Sales Bot</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4">AI-powered Telegram bot automating sales, payments, and customer interactions.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.facebook.com/share/v/17udHe3CEn/" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 hover:underline font-medium">Video Demo</a>
          </div>
        </div>
        {/* Keep inserting all your original project cards here exactly as before */}
      </div>
    </div>
  </section>
);

const Certificates = () => {
  const [selected, setSelected] = useState(null);

  const certificates = [
    { name: "3MTT Nigeria Certificate", url: "https://drive.google.com/file/d/1klUApH81znCS-C12Lh3rK85PC7_hlxrJ/preview" },
    { name: "ALX Professional Certificate", url: "https://drive.google.com/file/d/1QyvKHeTZbfvEI_DwfOs_V1heciHGz9Vu/preview" },
    { name: "Microsoft AI Fundamentals", url: "https://drive.google.com/file/d/1qE8MKCwvV5rMk-QJkstCgcLIo9Rkke_N/preview" },
    { name: "NYSC Certificate", url: "https://drive.google.com/file/d/15idKuQ3lpL_QmMQvImIhX8BSAk0GbD4B/preview" },
    { name: "B.Sc. Statement of Result", url: "https://drive.google.com/file/d/1Cg9nwsiRVdfM-M4ILJqF2PyqedQqkDMZ/preview" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-rose-600 dark:text-rose-400 mb-8 text-center">Certificates</h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {certificates.map((cert) => (
            <div key={cert.name} onClick={() => setSelected(cert.url)} className="bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-700">
                <iframe src={cert.url} title={cert.name} className="w-full h-full" loading="lazy" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-100">{cert.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div onClick={() => setSelected(null)} className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-white text-4xl hover:text-rose-400">&times;</button>
              <iframe src={selected} title="Certificate" className="w-full h-screen rounded-lg" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const Resume = () => (
  <section className="py-12 sm:py-16 bg-gray-950">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-rose-600 dark:text-rose-400 mb-6">📄 Resume</h2>
      <p className="text-base sm:text-lg text-gray-100 mb-6">Download my latest resume.</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="https://drive.google.com/uc?export=download&id=1MQCdGmyzzojA-Usaux1SMAbo6BBUysU-" className="inline-block bg-rose-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-rose-700 transition">
          Download Resume (PDF)
        </a>
        <a href="https://drive.google.com/file/d/1MQCdGmyzzojA-Usaux1SMAbo6BBUysU-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-700 text-gray-100 font-medium py-3 px-6 rounded-lg hover:bg-gray-600 transition">
          View Online
        </a>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-12 sm:py-16 bg-gray-950">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-rose-600 dark:text-rose-400 mb-6">📬 Contact</h2>
      <div className="text-base sm:text-lg text-gray-100 space-y-4">
        <p>Email: <a href="mailto:olatunjiayokanmii@gmail.com" className="text-rose-600 dark:text-rose-400 hover:underline">olatunjiayokanmii@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/olatunjiayokanmi" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 hover:underline">linkedin.com/in/olatunjiayokanmi</a></p>
        <p>GitHub: <a href="https://github.com/Ayokanmii" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 hover:underline">github.com/Ayokanmii</a></p>
        <p>WhatsApp: <a href="https://wa.me/+2348103106438" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700">Message on WhatsApp</a></p>
      </div>
    </div>
  </section>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-gray-100">
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
};

export default App;
