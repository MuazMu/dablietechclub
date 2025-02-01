import type React from "react"
import { useEffect, useState, type ReactNode } from "react"
import { Code2, Globe2, Shield, BookOpen, Code, Trophy, ChevronRight, ExternalLink, Target, Eye, X } from "lucide-react"

// Add these new imports
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    closeMobileMenu()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      {/* Hero Section */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 relative">
                <div className="absolute inset-0 bg-white"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/techlogo.svg" alt="Logo" className="w-8 h-8" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white">Dablie Tech Club</div>
            </div>
            <div className="hidden md:flex space-x-8">
              {["about", "services", "departments", "portfolio", "partners"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="hover:text-gray-300 transition-colors capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
            <button className="md:hidden text-white z-50" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <motion.div
          className={`fixed inset-0 bg-black text-white backdrop-blur-md md:hidden`}
          initial={{ x: "100%" }}
          animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
            {["about", "services", "departments", "portfolio", "partners"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:text-gray-300 transition-colors capitalize"
              >
                {section}
              </button>
            ))}
          </div>
        </motion.div>
      </nav>

      <motion.section
        className="pt-32 pb-20 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Innovate. Create.
              <br />
              Transform.
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Empowering the next generation of tech innovators through collaboration, learning, and cutting-edge
              projects.
            </p>
            <a href="https://t.me/dablietech" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center gap-2">
                Join Our Community <ChevronRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <Section id="about" title="About Us">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <AnimatedCard icon={<Target className="w-6 h-6 text-white" />} title="Our Mission">
                To foster innovation and technological advancement by creating a collaborative environment where
                students and professionals can learn, create, and grow together.
              </AnimatedCard>
              <AnimatedCard icon={<Eye className="w-6 h-6 text-white" />} title="Our Vision">
                To become a leading tech community that shapes the future of technology through innovative solutions,
                continuous learning, and impactful projects.
              </AnimatedCard>
            </div>
            <AnimatedCard title="Who We Are">
              <p className="text-gray-300 mb-4">
                Dablie Tech Club is a community of passionate technologists, innovators, and problem solvers. We bring
                together diverse talents to create cutting-edge solutions that address real-world challenges.
              </p>
              <p className="text-gray-300">
                Our community includes students, professionals, and industry experts who collaborate on projects, share
                knowledge, and push the boundaries of what's possible with technology.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" title="Our Services">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Code2 className="w-8 h-8" />,
              title: "Software Development",
              desc: "Custom solutions for modern challenges",
            },
            {
              icon: <Globe2 className="w-8 h-8" />,
              title: "Web Development",
              desc: "Responsive and dynamic web applications",
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Cyber Security",
              desc: "Protecting digital assets and infrastructure",
            },
          ].map((service, i) => (
            <AnimatedCard key={i} icon={service.icon} title={service.title}>
              {service.desc}
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section id="portfolio" title="Featured Projects" className="bg-zinc-900">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Trend Scope",
              desc: "Trading software that uses statistical models and historical trends to make short/long term investments in all kinds of securities, assets, commodities and currency.",
              image: "/trendscope.png",
            },
            {
              title: "Dablie Website",
              desc: "Empowering the next generation of tech innovators through collaboration, learning, and cutting-edge projects.",
              image: "/dablieweb2.png",
              link: "https://dablie.org/",
            },
            {
              title: "Robomod",
              desc: "AI-powered Telegram group moderator bot with advanced moderation and engaging gamification features.",
              image: "/robobot.png",
            },
            {
              title: "Typless",
              desc: "Streamline your social media strategy with a powerful platform that enables seamless scheduling and posting across multiple social media channels simultaneously, saving time and maximizing reach.",
              image: "/typless2.png",
            },
          ].map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </Section>

      {/* Departments Section */}
      <Section id="departments" title="Our Departments">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: <BookOpen />,
              name: "Capacity Building",
              desc: "Empowering through education and skill development",
            },
            { icon: <Code />, name: "Development/Programming", desc: "Creating innovative software solutions" },
            { icon: <Shield />, name: "Cyber Security", desc: "Protecting digital assets and infrastructure" },
            { icon: <Trophy />, name: "Competitive Programming", desc: "Excelling in coding competitions" },
          ].map((dept, i) => (
            <AnimatedCard key={i} icon={dept.icon} title={dept.name} className="text-center">
              {dept.desc}
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* Partners Section */}
      <Section id="partners" title="Our Partners" className="bg-zinc-900">
        <div className="grid grid-cols-1 justify-items-center">
          {[
            {
              image: "https://dablie.org/leadership%20page/assests/images/logo.png",
              link: "https://dablie.org",
            },
          ].map((partner, i) => (
            <PartnerCard key={i} {...partner} />
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Dablie Tech Club</h3>
              <p className="text-gray-400">Building the future through technology and innovation.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                {["about", "services", "portfolio"].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className="hover:text-gray-300 transition-colors capitalize"
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                Email: info@dablietech.com
                <br />
                Location: Sarbet, Next to King's Hotel
              </p>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Dablie Tech Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface SectionProps {
  id: string
  title: string
  children: ReactNode
  className?: string
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id={id} className={`py-20 ${className}`} ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

interface AnimatedCardProps {
  icon?: ReactNode
  title: string
  children: ReactNode
  className?: string
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ icon, title, children, className = "" }) => (
  <motion.div
    className={`bg-black/50 p-6 rounded-xl backdrop-blur-sm ${className}`}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    {icon && (
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    )}
    {!icon && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
    <p className="text-gray-300">{children}</p>
  </motion.div>
)

interface ProjectCardProps {
  title: string
  desc: string
  image: string
  link?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, desc, image, link }) => (
  <motion.div
    className="group relative overflow-hidden rounded-xl"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={image || "/placeholder.svg"} alt={title} className="w-full h-[300px] object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute bottom-0 p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{desc}</p>
        {link ? (
          <a
            href={link}
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project <ExternalLink className="w-4 h-4" />
          </a>
        ) : (
          <span className="flex items-center gap-2 text-white">Coming Soon</span>
        )}
      </div>
    </div>
  </motion.div>
)

interface PartnerCardProps {
  image: string
  link: string
}

const PartnerCard: React.FC<PartnerCardProps> = ({ image, link }) => (
  <motion.div
    className="p-6 bg-white rounded-xl hover:bg-gray-100 transition-colors duration-300"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={image || "/placeholder.svg"}
        alt="Partner"
        className="w-full h-12 object-contain transition-opacity duration-300"
      />
    </a>
  </motion.div>
)

export default App

