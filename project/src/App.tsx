import React, { useEffect, useState } from 'react';
import { 
  Code2, 
  Globe2, 
  Shield, 
  BookOpen, 
  Code, 
  Trophy,
  ChevronRight,
  ExternalLink,
  Target,
  Eye
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-lg transform -rotate-12"></div>
                <div className="absolute inset-0 flex items-center justify-center text-slate-900 font-bold text-2xl">
                  D
                </div>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
                Dablie Tech Club
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
              <a href="#services" className="hover:text-cyan-300 transition-colors">Services</a>
              <a href="#departments" className="hover:text-cyan-300 transition-colors">Departments</a>
              <a href="#portfolio" className="hover:text-cyan-300 transition-colors">Portfolio</a>
              <a href="#partners" className="hover:text-cyan-300 transition-colors">Partners</a>
            </div>
            {/* Mobile Menu Button */}
            <button className="md:hidden text-cyan-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 text-transparent bg-clip-text">
              Innovate. Create.<br />Transform.
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Empowering the next generation of tech innovators through collaboration, 
              learning, and cutting-edge projects.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-2">
              Join Our Community <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">About Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-slate-700/30 p-6 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-xl font-semibold">Our Mission</h3>
                  </div>
                  <p className="text-gray-300">
                    To foster innovation and technological advancement by creating a collaborative 
                    environment where students and professionals can learn, create, and grow together.
                  </p>
                </div>
                <div className="bg-slate-700/30 p-6 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-xl font-semibold">Our Vision</h3>
                  </div>
                  <p className="text-gray-300">
                    To become a leading tech community that shapes the future of technology 
                    through innovative solutions, continuous learning, and impactful projects.
                  </p>
                </div>
              </div>
              <div className="bg-slate-700/30 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Who We Are</h3>
                <p className="text-gray-300 mb-4">
                  Dablie Tech Club is a community of passionate technologists, innovators, 
                  and problem solvers. We bring together diverse talents to create 
                  cutting-edge solutions that address real-world challenges.
                </p>
                <p className="text-gray-300">
                  Our community includes students, professionals, and industry experts 
                  who collaborate on projects, share knowledge, and push the boundaries 
                  of what's possible with technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Code2 className="w-8 h-8" />, title: "Software Development", desc: "Custom solutions for modern challenges" },
              { icon: <Globe2 className="w-8 h-8" />, title: "Web Development", desc: "Responsive and dynamic web applications" },
              { icon: <Shield className="w-8 h-8" />, title: "Cyber Security", desc: "Protecting digital assets and infrastructure" },
            ].map((service, i) => (
              <div key={i} className="bg-slate-700/30 p-6 rounded-xl hover:bg-slate-700/50 transition-all duration-300 backdrop-blur-sm">
                <div className="text-cyan-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Powered Analytics",
                desc: "Machine learning solution for predictive analytics",
                image: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?auto=format&fit=crop&q=80&w=1000"
              },
              {
                title: "Smart City Platform",
                desc: "IoT integration for urban infrastructure",
                image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=1000"
              }
            ].map((project, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.desc}</p>
                    <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                      View Project <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Departments</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <BookOpen />, name: "Capacity Building", desc: "Empowering through education and skill development" },
              { icon: <Code />, name: "Development/Programming", desc: "Creating innovative software solutions" },
              { icon: <Shield />, name: "Cyber Security", desc: "Protecting digital assets and infrastructure" },
              { icon: <Trophy />, name: "Competitive Programming", desc: "Excelling in coding competitions" }
            ].map((dept, i) => (
              <div key={i} className="text-center p-6 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group">
                <div className="text-cyan-400 flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {dept.icon}
                </div>
                <h3 className="font-semibold mb-2">{dept.name}</h3>
                <p className="text-sm text-gray-400">{dept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              "https://dablie.org/leadership%20page/assests/images/logo.png",
              "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1614680376408-12c8c384c640?auto=format&fit=crop&q=80&w=400",
              "https://images.unsplash.com/photo-1614680376739-8d7c8f0ec613?auto=format&fit=crop&q=80&w=400"
              
            ].map((logo, i) => (
              <div key={i} className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                <img 
                  src={logo} 
                  alt={`Partner ${i + 1}`}
                  className="w-full h-12 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
                Dablie Tech Club
              </h3>
              <p className="text-gray-400">
                Building the future through technology and innovation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-cyan-300 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-cyan-300 transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-cyan-300 transition-colors">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                Email: info@dablietech.com<br />
                Location: Sarbet, Next to King's Hotel
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Dablie Tech Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;