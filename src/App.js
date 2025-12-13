import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

// ==================== SIDEBAR NAVIGATION ====================
const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: '👤' },
    { name: 'Projects', path: '/projects', icon: '💼' },
    { name: 'Certificates', path: '/certificates', icon: '📜' },
    { name: 'Resume', path: '/resume', icon: '📄' },
    { name: 'Contact', path: '/contact', icon: '📧' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-30 overflow-y-auto">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">OA</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors">
                Olatunji Ayokanmi
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Full-Stack Developer</p>
            </div>
          </Link>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all group"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
          <div className="flex justify-center space-x-4">
            {[
              { name: 'GitHub', url: 'https://github.com/Ayokanmii', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/olatunjiayokanmi', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label={`Visit ${social.name}`}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`lg:hidden fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3" onClick={toggleSidebar}>
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">OA</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-800 dark:text-white">Olatunji Ayokanmi</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Full-Stack Developer</p>
              </div>
            </Link>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                  onClick={toggleSidebar}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

// ==================== TOP NAVBAR ====================
const TopNavbar = ({ toggleSidebar }) => (
  <nav className="lg:hidden fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-30">
    <div className="px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">OA</span>
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-800 dark:text-white">Olatunji Ayokanmi</h1>
          <p className="text-xs text-gray-600 dark:text-gray-400">Full-Stack Developer</p>
        </div>
      </Link>
      
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label="Open navigation menu"
      >
        <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </nav>
);

// ==================== HOME - UPDATED FOR AI/AUTOMATION ====================
const Home = () => (
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
    </div>

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      {/* Profile Image Placeholder */}
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8 flex items-center justify-center shadow-2xl">
        <span className="text-5xl text-white">OA</span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
        Olatunji <span className="text-blue-600">Ayokanmi</span>
      </h1>
      
      <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4">
        <p className="text-white font-medium text-lg">
          Full-Stack Developer | AI & Automation Specialist
        </p>
      </div>

      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-8">
        Expert in Workflow Automation & AI Integration
      </p>

      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          Specializing in <span className="font-semibold text-gray-800 dark:text-white">AI-powered automation workflows</span> and <span className="font-semibold text-gray-800 dark:text-white">enterprise-grade full-stack development</span>. 
          Proven expertise in building sophisticated workflow automation systems using <span className="font-semibold text-gray-800 dark:text-white">n8n, OpenAI, and custom integrations</span> 
          to streamline business processes and drive operational efficiency.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { title: "Workflow Automation", desc: "n8n expert with 5+ automation projects" },
            { title: "AI Integration", desc: "OpenAI, OpenRouter, Custom AI models" },
            { title: "Full-Stack Development", desc: "React, Node.js, PostgreSQL, REST APIs" }
          ].map((item, index) => (
            <div key={index} className="p-4 bg-blue-50 dark:bg-gray-800/50 rounded-lg border border-blue-100 dark:border-gray-700">
              <h4 className="font-bold text-gray-800 dark:text-white mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#projects"
          className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          View Automation Projects
        </a>
        <a
          href="#contact"
          className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Discuss Automation Solutions
        </a>
      </div>
    </div>
  </div>
);

// ==================== ABOUT - ENHANCED FOR AI/AUTOMATION ====================
const About = () => (
  <section className="py-20 bg-white dark:bg-gray-900">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6">
            Professional <span className="text-blue-600">Profile</span>
          </h2>
          
          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              I am a <span className="font-semibold text-gray-800 dark:text-white">Full-Stack Developer and AI Automation Specialist</span> with extensive experience in 
              designing and implementing sophisticated workflow automation systems. My expertise spans across 
              <span className="font-semibold text-gray-800 dark:text-white"> n8n workflow orchestration, OpenAI integration, and enterprise-grade application development</span>.
            </p>
            
            <p className="text-lg leading-relaxed">
              With a proven track record of <span className="font-semibold text-gray-800 dark:text-white">5+ successful automation projects</span>, I specialize in creating 
              intelligent systems that streamline business processes, reduce manual effort, and enhance operational 
              efficiency through carefully engineered automation workflows.
            </p>

            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/30">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">🎯 Core Expertise in Automation</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 dark:text-blue-300 text-sm">✓</span>
                  </div>
                  <span><span className="font-medium">Advanced n8n Workflow Development:</span> Complex automation pipelines integrating multiple APIs, databases, and AI services</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 dark:text-blue-300 text-sm">✓</span>
                  </div>
                  <span><span className="font-medium">AI-Powered Automation:</span> Integration of OpenAI, custom ML models, and natural language processing into workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 dark:text-blue-300 text-sm">✓</span>
                  </div>
                  <span><span className="font-medium">Enterprise Integration:</span> Connecting CRM systems, email platforms, databases, and third-party APIs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 dark:text-blue-300 text-sm">✓</span>
                  </div>
                  <span><span className="font-medium">Workflow Optimization:</span> Performance tuning, error handling, and scalability planning for automation systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Technical Expertise
            </h3>
            
            <div className="space-y-6">
              {/* Workflow Automation Section */}
              <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-800/50 rounded-xl border border-blue-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-blue-600">⚙️</span> Workflow & Automation
                </h4>
                <div className="space-y-3">
                  {[
                    { skill: "n8n Workflow Development", level: 95 },
                    { skill: "API Integration & Orchestration", level: 90 },
                    { skill: "OpenAI / ChatGPT Integration", level: 88 },
                    { skill: "Automated Data Processing", level: 92 }
                  ].map((item) => (
                    <div key={item.skill} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.skill}</span>
                        <span className="text-sm text-blue-600 dark:text-blue-400">{item.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Stack */}
              <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-blue-600">💻</span> Development Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Node.js', 'PostgreSQL', 'Express.js', 'JavaScript ES6+', 'REST APIs', 'JWT Auth', 'Tailwind CSS'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="p-6 bg-blue-50 dark:bg-gray-800/50 rounded-xl">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Certifications & Education
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400">🎓</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800 dark:text-white">B.Sc. Computer Science</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">University</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400">📜</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800 dark:text-white">3MTT Graduate Program</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Focus: Software Development & Automation</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400">📜</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-800 dark:text-white">ALX Professional Certificate</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Software Engineering Specialization</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Goal Section - Enhanced */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Career Objective</h3>
        <p className="text-lg leading-relaxed">
          Seeking to leverage my expertise in <span className="font-semibold">AI-powered workflow automation</span> and 
          <span className="font-semibold"> full-stack development</span> to architect intelligent systems that optimize 
          business processes, enhance operational efficiency, and drive digital transformation. Passionate about 
          implementing cutting-edge automation solutions that solve complex business challenges.
        </p>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
            <h4 className="font-semibold mb-2">Process Optimization</h4>
            <p className="text-sm text-blue-100">Designing automation workflows that reduce manual work by 70%+</p>
          </div>
          <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
            <h4 className="font-semibold mb-2">AI Integration</h4>
            <p className="text-sm text-blue-100">Implementing intelligent automation with machine learning capabilities</p>
          </div>
          <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
            <h4 className="font-semibold mb-2">Enterprise Solutions</h4>
            <p className="text-sm text-blue-100">Building scalable systems for medium to large organizations</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ==================== PROJECTS - EMPHASIZING AUTOMATION ====================
const Projects = () => {
  const projects = [
    {
      title: "AI Fraud Detection System",
      description: "Advanced n8n workflow leveraging machine learning patterns to detect fraudulent transactions in real-time with 99.2% accuracy.",
      category: "Workflow Automation",
      tags: ["n8n", "AI", "Security", "Real-time", "Machine Learning"],
      github: "https://github.com/Ayokanmii/Advanced-Fraud-Detection",
      video: "https://youtu.be/6eE-1OU0z8k",
      automation: true
    },
    {
      title: "Intelligent Marketing Campaign Automation",
      description: "End-to-end automated marketing system generating AI-powered personalized emails, segmenting customers, and tracking campaign performance.",
      category: "Marketing Automation",
      tags: ["n8n", "OpenAI", "Gmail API", "Google Sheets", "Analytics"],
      github: "https://github.com/Ayokanmii/Marketing_compaign",
      video: "https://youtu.be/5kwYrjb8zFg",
      automation: true
    },
    {
      title: "EcoCycle NG - Waste Management",
      description: "Sustainable waste management platform enabling automated pickup scheduling, recycling tracking, and real-time monitoring across Nigeria.",
      category: "Full-Stack",
      tags: ["React", "Node.js", "PostgreSQL", "Map API", "Automation"],
      github: "https://github.com/Ayokanmii/EcoCycle",
      live: "https://eco-cycle-ng.vercel.app"
    },
    {
      title: "ShopWise E-Commerce Platform",
      description: "Complete e-commerce solution with AI recommendations, automated cart management, and integrated admin dashboard.",
      category: "Full-Stack + AI",
      tags: ["React", "Node.js", "PostgreSQL", "OpenAI", "JWT Auth"],
      github: "https://github.com/Ayokanmii/ShopWise",
      live: "https://damishopwise.netlify.app",
      video: "https://youtu.be/OdTeS47qF9Q"
    },
    {
      title: "Sentiment Analysis Automation",
      description: "Automated n8n workflow scraping customer reviews, analyzing sentiment with AI, and generating daily reports for product teams.",
      category: "Data Automation",
      tags: ["n8n", "Web Scraping", "Sentiment Analysis", "AI", "Reporting"],
      github: "https://github.com/Ayokanmii/Analyze-Sentiment",
      video: "https://youtube.com/shorts/WDxzv2CmGuo?si=mv_GFlf5-QhC9HRn",
      automation: true
    },
    {
      title: "Wokkathon AI Agents Suite",
      description: "Collection of 20+ specialized AI agents built with n8n for summarization, translation, customer support, and content generation.",
      category: "AI Automation",
      tags: ["n8n", "OpenAI", "Multi-agent", "Productivity", "Automation"],
      github: "https://github.com/Ayokanmii/Customer-support-auto",
      video: "https://youtube.com/shorts/zxfP8SzOdTA?si=Wd1iHi7msWo4PmBF",
      automation: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Automation & Development <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            Showcasing expertise in <span className="font-semibold text-blue-600">workflow automation, AI integration, and full-stack development</span>.
            Each project demonstrates practical implementation of automation solutions to solve real business challenges.
          </p>
        </div>

        {/* Automation Projects Filter */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg">
            All Projects
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600">
            Workflow Automation
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600">
            Full-Stack Apps
          </button>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600">
            AI Integration
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border ${project.automation ? 'border-blue-200 dark:border-blue-800/50' : 'border-gray-200 dark:border-gray-700'}`}>
              {project.automation && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full">
                  ⚙️ AUTOMATION
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 ${project.automation ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'} text-sm font-medium rounded-full`}>
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Automation Expertise Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-8 border border-blue-100 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            Workflow Automation Expertise
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-3">n8n Workflow Development</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Building complex automation pipelines with error handling, webhooks, and multi-step processes
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-3">AI Integration</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Seamlessly integrating OpenAI, custom models, and NLP into automated workflows
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-3">API Orchestration</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Connecting multiple APIs, databases, and services into cohesive automated systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== (KEEPING OTHER SECTIONS THE SAME AS BEFORE) ====================
const Certificates = () => {
  const [selected, setSelected] = useState(null);

  const certificates = [
    { 
      name: "3MTT Nigeria Certificate", 
      url: "https://drive.google.com/file/d/1klUApH81znCS-C12Lh3rK85PC7_hlxrJ/preview",
      organization: "3MTT Nigeria"
    },
    { 
      name: "ALX Professional Certificate", 
      url: "https://drive.google.com/file/d/1QyvKHeTZbfvEI_DwfOs_V1heciHGz9Vu/preview",
      organization: "ALX Africa"
    },
    { 
      name: "Microsoft AI Fundamentals", 
      url: "https://drive.google.com/file/d/1qE8MKCwvV5rMk-QJkstCgcLIo9Rkke_N/preview",
      organization: "Microsoft"
    },
    { 
      name: "NYSC Certificate", 
      url: "https://drive.google.com/file/d/15idKuQ3lpL_QmMQvImIhX8BSAk0GbD4B/preview",
      organization: "National Youth Service Corps"
    },
    { 
      name: "B.Sc. Statement of Result", 
      url: "https://drive.google.com/file/d/1Cg9nwsiRVdfM-M4ILJqF2PyqedQqkDMZ/preview",
      organization: "University"
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Professional <span className="text-blue-600">Certifications</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Formal recognition of technical skills and professional development achievements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
              onClick={() => setSelected(cert.url)}
            >
              <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
                <iframe 
                  src={cert.url} 
                  className="w-full h-full"
                  title={cert.name}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {cert.organization}
                </p>
                <button 
                  className="mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium flex items-center gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(cert.url);
                  }}
                >
                  View Certificate
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div className="relative w-full max-w-4xl">
              <button 
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-3xl"
                onClick={() => setSelected(null)}
              >
                &times;
              </button>
              <iframe 
                src={selected} 
                className="w-full h-[80vh] rounded-lg"
                title="Certificate Full View"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const Resume = () => (
  <section className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Professional <span className="text-blue-600">Resume</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Download my complete resume for detailed experience, skills, and qualifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
              Automation Expertise
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Workflow Automation (n8n)</h4>
                <div className="space-y-2">
                  {['Complex Workflow Design', 'API Integration', 'Error Handling', 'Scalability'].map(skill => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">{skill}</span>
                      <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">AI Integration</h4>
                <div className="space-y-2">
                  {['OpenAI/ChatGPT', 'Custom Models', 'NLP', 'Machine Learning'].map(skill => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">{skill}</span>
                      <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '88%' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
              Project Experience
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">Workflow Automation Projects (5+)</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  Successfully delivered multiple automation solutions reducing manual work by 70%
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">Full-Stack Development</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  Built scalable applications with React, Node.js, and PostgreSQL
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">AI Integration Specialist</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  Implemented intelligent features using OpenAI and custom AI models
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://drive.google.com/uc?export=download&id=1MQCdGmyzzojA-Usaux1SMAbo6BBUysU-"
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
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
            className="inline-flex items-center justify-center px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
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

const Contact = () => (
  <section className="py-20 bg-white dark:bg-gray-900">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Interested in workflow automation solutions or collaboration opportunities? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-gray-700/50 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89-5.26a2 2 0 012.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Email</h3>
                <a 
                  href="mailto:olatunjiayokanmii@gmail.com" 
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  olatunjiayokanmii@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-gray-700/50 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/olatunjiayokanmi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  linkedin.com/in/olatunjiayokanmi
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-gray-700/50 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">GitHub</h3>
                <a 
                  href="https://github.com/Ayokanmii" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  github.com/Ayokanmii
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-gray-700/50 rounded-xl">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.677-.236-.374a9.86 9.86 0 01-1.505-5.193c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">WhatsApp</h3>
                <a 
                  href="https://wa.me/+2348103106438" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
                >
                  +234 810 310 6438
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Available for workflow automation projects and full-stack development opportunities
          </p>
          <a
            href="mailto:olatunjiayokanmii@gmail.com?subject=Workflow%20Automation%20Opportunity"
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89-5.26a2 2 0 012.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Discuss Automation Solutions
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Olatunji Ayokanmi</h3>
          <p className="text-gray-400">Full-Stack Developer | AI Automation Specialist</p>
        </div>
        
        <div className="flex space-x-6 mb-6 md:mb-0">
          {[
            { name: 'GitHub', url: 'https://github.com/Ayokanmii', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/olatunjiayokanmi', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={`Visit ${social.name}`}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d={social.icon} />
              </svg>
            </a>
          ))}
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Olatunji Ayokanmi Damilola. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

// ==================== MAIN APP ====================
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans">
        {/* Sidebar Navigation */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        
        {/* Top Navigation (Mobile) */}
        <TopNavbar toggleSidebar={toggleSidebar} />
        
        {/* Main Content */}
        <main className="lg:ml-64 pt-16 lg:pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
