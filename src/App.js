import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

// ==================== NAVBAR ====================
const Navbar = () => (
  <nav className="sticky top-0 bg-white dark:bg-gray-800 shadow-lg z-10 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <Link to="/" className="group">
        <h1 className="text-xl sm:text-2xl font-bold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors">
          Olatunji Ayokanmi
        </h1>
      </Link>
      <div className="flex space-x-4 sm:space-x-6">
        {['Home', 'About', 'Projects', 'Certificates', 'Resume', 'Contact'].map((item) => (
          <Link
            key={item}
            to={`/${item === 'Home' ? '' : item.toLowerCase()}`}
            className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors relative group"
            aria-label={`Navigate to ${item} section`}
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-600 dark:bg-rose-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}
      </div>
    </div>
  </nav>
);

// ==================== FLOATING RESUME BUTTON ====================
const FloatingResumeButton = () => (
  <a
    href="https://drive.google.com/uc?export=download&id=1MQCdGmyzzojA-Usaux1SMAbo6BBUysU-"
    className="fixed bottom-6 right-6 bg-gradient-to-r from-rose-600 to-rose-500 text-white font-medium py-3 px-6 rounded-full shadow-2xl hover:shadow-rose-500/25 hover:scale-105 transition-all duration-300 z-40 flex items-center gap-2 group animate-bounce-slow"
    aria-label="Download Resume"
    download
  >
    <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
    Download Resume
  </a>
);

// ==================== FOOTER ====================
const Footer = () => (
  <footer className="py-8 bg-gray-900 dark:bg-gray-900 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex space-x-6 mb-4 md:mb-0">
          {[
            { name: 'GitHub', url: 'https://github.com/Ayokanmii', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/olatunjiayokanmi', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
            { name: 'Email', url: 'mailto:olatunjiayokanmii@gmail.com', icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' },
            { name: 'WhatsApp', url: 'https://wa.me/+2348103106438', icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.677-.236-.374a9.86 9.86 0 01-1.505-5.193c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88z' }
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.name !== 'Email' ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-rose-500 transition-colors p-2 hover:bg-gray-800 rounded-full"
              aria-label={`Visit Olatunji Ayokanmi's ${social.name}`}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d={social.icon} />
              </svg>
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Olatunji Ayokanmi Damilola. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

// ==================== HOME ====================
const Home = () => (
  <header className="py-20 sm:py-28 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-white/5 bg-grid-16"></div>
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
      <div className="inline-block mb-6 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full">
        <span className="text-rose-400 text-sm font-medium">Frontend & Full-Stack Developer | Software Tester</span>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-rose-600">Olatunji Ayokanmi</span>
      </h1>
      <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
        Building exceptional digital experiences with React, Node.js, AI integration, and a keen eye for quality through software testing.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#projects"
          className="inline-flex items-center justify-center px-6 py-3 bg-rose-600 text-white font-medium rounded-lg hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/25"
        >
          View My Projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-gray-100 font-medium rounded-lg hover:bg-gray-700 transition-colors border border-gray-700"
        >
          Get In Touch
        </a>
      </div>
    </div>
  </header>
);

// ==================== ABOUT ====================
const About = () => (
  <section id="about" className="py-16 bg-gradient-to-b from-gray-900 to-gray-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            About <span className="text-rose-500">Me</span>
          </h2>
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              I'm a passionate and detail-oriented Frontend & Full-Stack Developer with hands-on experience in building dynamic, responsive, and AI-powered applications. My journey combines technical development with quality assurance, ensuring I deliver robust, user-centric solutions.
            </p>
            <p className="text-lg leading-relaxed">
              With expertise in React, Tailwind CSS, Node.js, PostgreSQL, and OpenAI integrations, I create scalable solutions with clean, mobile-first UIs. Complementing my development skills, I bring strong proficiency in Software Testing (Manual, Web, and Mobile App Testing), guaranteeing product quality, usability, and reliability.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-lg">
              <span className="text-rose-400">✨</span>
              <span className="text-rose-300">3MTT Graduate | ALX Professional Foundation Certificate in Software Development</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4">Core Skills</h3>
          <div className="flex flex-wrap gap-3">
            {['React.js', 'Node.js', 'JavaScript', 'Tailwind CSS', 'PostgreSQL', 'Express.js', 'n8n', 'OpenAI API', 'Git/GitHub', 'Postman', 'Software Testing', 'JWT Auth', 'REST APIs', 'TypeScript'].map((skill) => (
              <span key={skill} className="px-3 py-2 bg-gray-700/50 text-gray-200 rounded-lg text-sm font-medium hover:bg-rose-600/20 hover:text-rose-300 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white mb-6">Career Goal</h3>
        <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
          <p className="text-lg text-gray-300">
            To contribute as a Frontend/Full-Stack Developer within innovative, product-driven teams while leveraging my software testing experience to enhance user experience and product reliability. I aim to build solutions that are not only functional but also deliver exceptional value through quality and performance.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// ==================== PROJECTS ====================
const Projects = () => {
  const projects = [
    {
      title: "♻️ EcoCycle NG",
      description: "Sustainable waste management platform for Nigeria enabling pickup scheduling and recycling tracking with real-time monitoring.",
      tags: ["React", "Node.js", "PostgreSQL", "Map Integration"],
      links: [
        { text: "GitHub", url: "https://github.com/Ayokanmii/EcoCycle" },
        { text: "Live Demo", url: "https://eco-cycle-ng.vercel.app" }
      ]
    },
    {
      title: "🤖 Telegram Sales Bot",
      description: "AI-powered Telegram bot for automated e-commerce sales, customer support, and order management with natural language processing.",
      tags: ["n8n", "AI", "Automation", "Telegram API"],
      links: [
        { text: "Video Demo", url: "https://www.facebook.com/share/v/17udHe3CEn/" }
      ]
    },
    {
      title: "🛒 ShopWise E-Commerce",
      description: "Full-stack e-commerce platform with AI-powered recommendations, secure JWT authentication, cart management, and admin dashboard.",
      tags: ["React", "Node.js", "PostgreSQL", "OpenAI", "Tailwind"],
      links: [
        { text: "GitHub", url: "https://github.com/Ayokanmii/ShopWise" },
        { text: "Live Demo", url: "https://damishopwise.netlify.app" },
        { text: "Video", url: "https://youtu.be/OdTeS47qF9Q" }
      ]
    },
    {
      title: "🎬 WatchWise AI",
      description: "Movie recommendation app integrating OpenAI for personalized suggestions with protected routes and watchlist functionality.",
      tags: ["React", "OpenAI API", "PostgreSQL", "JWT Auth"],
      links: [
        { text: "GitHub", url: "https://github.com/Ayokanmii/movie-recommendation-app" },
        { text: "Video Demo", url: "https://youtu.be/jYt-fKd6vp0" }
      ]
    },
    {
      title: "🛡️ Fraud Detection Automation",
      description: "Advanced workflow leveraging AI + n8n automation to detect fraudulent patterns in transactions with real-time alerts.",
      tags: ["n8n", "AI", "Automation", "Security"],
      links: [
        { text: "GitHub", url: "https://github.com/Ayokanmii/Advanced-Fraud-Detection" },
        { text: "Demo", url: "https://youtu.be/6eE-1OU0z8k" }
      ]
    },
    {
      title: "📩 AI Marketing Campaigns",
      description: "AI-powered automated email campaign system generating personalized emails and segmenting customers via Gmail API.",
      tags: ["n8n", "AI", "Gmail API", "Google Sheets"],
      links: [
        { text: "GitHub", url: "https://github.com/Ayokanmii/Marketing_compaign" },
        { text: "Demo", url: "https://youtu.be/5kwYrjb8zFg" }
      ]
    },
    {
      title: "📊 Sentiment Analyzer",
      description: "Automated n8n workflow scraping Amazon reviews, classifying sentiment with AI, and emailing daily summaries.",
      tags: ["n8n", "AI", "Web Scraping", "Automation"],
      links: [
        { text: "GitHub", url: "https://github.com/Ayokanmii/Analyze-Sentiment" },
        { text: "Demo", url: "https://youtube.com/shorts/WDxzv2CmGuo?si=mv_GFlf5-QhC9HRn" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="text-rose-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development, AI integration, and automation solutions.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="group bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-rose-500/50 hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-rose-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-rose-600/10 text-rose-400 hover:bg-rose-600/20 hover:text-rose-300 text-sm font-medium rounded-lg transition-colors border border-rose-500/20"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== CERTIFICATES ====================
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
    <section id="certificates" className="py-16 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Professional <span className="text-rose-500">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Formal recognition of my technical skills and professional development journey.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              onClick={() => setSelected(cert.url)}
              className="group bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-rose-500/50 hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <iframe 
                  src={cert.url} 
                  className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                  title={cert.name}
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-rose-400 transition-colors">
                  {cert.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div 
            onClick={() => setSelected(null)} 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <div className="relative w-full max-w-4xl bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              <button 
                onClick={(e) => { e.stopPropagation(); setSelected(null); }}
                className="absolute top-4 right-4 z-10 bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <iframe 
                src={selected} 
                className="w-full aspect-video"
                title="Certificate Full View"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// ==================== RESUME ====================
const Resume = () => (
  <section id="resume" className="py-16 bg-gradient-to-b from-gray-950 to-black">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Professional <span className="text-rose-500">Resume</span>
          </h2>
          <p className="text-gray-400">
            Download my resume to view my complete experience, skills, and qualifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Experience Highlights</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-1">•</span>
                <span>Full-stack development with React & Node.js</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-1">•</span>
                <span>AI integration & automation workflows</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-1">•</span>
                <span>Software testing & quality assurance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-1">•</span>
                <span>Database design & management</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Education & Certifications</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-1">🎓</span>
                <span>B.Sc. in Computer Science</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-1">📜</span>
                <span>3MTT Graduate Program</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-1">📜</span>
                <span>ALX Professional Certificate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-1">📜</span>
                <span>Microsoft AI Fundamentals</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://drive.google.com/uc?export=download&id=1MQCdGmyzzojA-Usaux1SMAbo6BBUysU-"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-rose-600 to-rose-500 text-white font-medium rounded-lg hover:from-rose-700 hover:to-rose-600 transition-all shadow-lg shadow-rose-600/25"
            download
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume (PDF)
          </a>
          <a
            href="https://drive.google.com/file/d/1MQCdGmyzzojA-Usaux1SMAbo6BBUysU-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-gray-100 font-medium rounded-lg hover:bg-gray-700 transition-colors border border-gray-700"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Online
          </a>
        </div>
      </div>
    </div>
  </section>
);

// ==================== CONTACT ====================
const Contact = () => (
  <section id="contact" className="py-16 bg-gradient-to-b from-black to-gray-900">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="text-rose-500">Touch</span>
          </h2>
          <p className="text-gray-400">
            Feel free to reach out for collaboration, opportunities, or just to say hello!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-rose-600/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89-5.26a2 2 0 012.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                <a 
                  href="mailto:olatunjiayokanmii@gmail.com" 
                  className="text-gray-400 hover:text-rose-400 transition-colors"
                >
                  olatunjiayokanmii@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-rose-600/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/olatunjiayokanmi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-rose-400 transition-colors"
                >
                  linkedin.com/in/olatunjiayokanmi
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-rose-600/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">GitHub</h3>
                <a 
                  href="https://github.com/Ayokanmii" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-rose-400 transition-colors"
                >
                  github.com/Ayokanmii
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-rose-600/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                <span className="text-gray-400">
                  Nigeria (Open to Remote Opportunities)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/+2348103106438"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.677-.236-.374a9.86 9.86 0 01-1.505-5.193c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88z" />
            </svg>
            Message on WhatsApp
          </a>
          <a
            href="mailto:olatunjiayokanmii@gmail.com"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-gray-100 font-medium rounded-lg hover:bg-gray-700 transition-colors border border-gray-700"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89-5.26a2 2 0 012.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Email
          </a>
        </div>
      </div>
    </div>
  </section>
);

// ==================== MAIN APP ====================
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
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
        
        {/* Custom animation for the floating button */}
        <style jsx global>{`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 3s infinite;
          }
          .bg-grid-white\/5 {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
          }
        `}</style>
      </div>
    </Router>
  );
};

export default App;
