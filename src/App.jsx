import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Award, Briefcase, GraduationCap, Code, Server, Database, Cloud, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false); // Close menu after clicking
    }
  };

  const skills = {
    "Languages": ["Python", "Java", "YAML", "Bash", ".NET", "C#"],
    "DevOps Tools": ["Docker", "Kubernetes", "Terraform", "Ansible"],
    "Monitoring": ["Grafana", "Prometheus", "Zabbix", "ELK Stack"],
    "CI/CD": ["GitLab", "GitHub Actions", "Jenkins", "ArgoCD"],
    "Servers": ["Apache", "Nginx", "Tomcat", "IIS"],
    "Databases": ["Hadoop", "Redis", "Oracle", "PostgreSQL", "Kafka"]
  };

  const experience = [
    {
      role: "Graduate Assistant",
      company: "University of Illinois Chicago - OVCAS",
      period: "Aug 2025 - Current",
      location: "Chicago, IL",
      achievements: [
        "Developed and maintained OVCAS applications using .NET MVC framework with Oracle database integration and advanced SQL reporting.",
        "Automated CI/CD deployment pipelines (GitHub Actions) for 20+ applications deploying .NET MVC projects to IIS and supporting .NET Core and Java apps with Telegram group notifications that automatically post workflow status (success/failure) to reduce manual checks and speed up response time.",
        "Led modernization efforts by migrating legacy .NET Framework MVC (4.8) applications to .NET 8 (Core), leveraging AI agents for accelerated delivery while also performing manual migrations to build deeper understanding of the process.",
        "Implemented Telegram-based alerting for a governance-critical email delivery application, providing real-time failure notifications with error details and eliminating the need for manual database checks to identify missed emails."
      ]
    },
    {
      role: "DevOps Engineer",
      company: "Texple: Digital Transformation Services",
      period: "Dec 2022 - Jul 2025",
      location: "Mumbai, India",
      achievements: [
        "Architected and migrated stock broking firm's infrastructure to AWS using Terraform, provisioning EKS, RDS, ASGs, and ALBs to improve scalability and reduce costs by 40%.",
        "Orchestrated database deployments (Kafka, Solr, Cassandra, Druid) on Kubernetes using Helm charts and custom operators, integrating with a web application for one-click client-side provisioning with complete backend automation.",
        "Configured Redis in standalone, master-slave, and sentinel modes; conducted regular failover drills to ensure high availability and seamless disaster recovery.",
        "Developed Python scripts to optimize AWS resource provisioning and usage patterns, achieving 50% cost savings for client infrastructure.",
        "Launched Kanban-style task management application on AWS with Terraform-provisioned infrastructure and GitLab CI/CD, maintaining operational costs under $100 per month.",
        "Established centralized monitoring with Prometheus and Grafana by creating custom dashboards, alerting rules, and SLO tracking to enhance system reliability and observability.",
        "Integrated DevSecOps practices for Node.js, Python, and Flutter applications by embedding security scanning tools (Semgrep, Bandit, ESLint) into CI/CD pipelines.",
        "Created automated security pipelines that scan code on every push and generate branch-level vulnerability reports, ensuring secure and compliant code promotion across environments.",
        "Designed and executed MonoRepo CI/CD pipeline using GitHub Actions, streamlining frontend and backend deployments while accelerating release cycles by 60%."
      ]
    },
    {
      role: "DevOps Engineer Intern",
      company: "PearlThoughts IT Solutions",
      period: "Sep 2022 - Nov 2022",
      location: "Tamil Nadu, India",
      achievements: [
        "Collaborated with cross-functional teams to understand client requirements and adapt infrastructure configurations to meet project-specific needs.",
        "Utilized GitHub Actions to automate CI/CD workflows, reducing manual intervention by 70% through custom actions for code linting, testing, and deployment.",
        "Configured Docker containerization for multiple microservices applications, improving deployment consistency and reducing environment-related issues by 50%.",
        "Assisted in implementing monitoring solutions and created documentation for deployment processes, improving team onboarding time and operational knowledge transfer."
      ]
    }
  ];

  const projects = [
    {
      name: "Kanban Task Management App on AWS",
      tech: ["Terraform", "AWS", "GitLab", "ECS Fargate", "ALB"],
      description: "Deployed a Kanban-style task management application on AWS using Terraform with ECS (Fargate), Cloud Map, and Application Load Balancer.",
      highlights: [
        "Implemented full CI/CD automation using GitLab pipelines",
        "Optimized architecture for cost-efficiency, keeping monthly expenses under $100",
        "Ensured scalable and reliable infrastructure"
      ],
      github: "https://github.com/Dhru205/kanban-infra-as-code"
    },
    {
      name: "Managed Services for Private Cloud Provider",
      tech: ["Docker", "Kubernetes", "Helm", "Ansible", "Istio"],
      description: "Deployed multiple databases and big data components using Kubernetes Operators and automated deployment processes.",
      highlights: [
        "Deployed Kafka, Solr, Cassandra, Druid using Kubernetes Operators and Helm",
        "Automated deployment of 7 big data components (Hadoop, Zookeeper, Spark, HBase, Hive, Flink, Presto) using Ansible",
        "Cut manual setup time by over 80%",
        "Configured PVs, Secrets, and Istio-based remote access"
      ]
    }
  ];

  const certifications = [
    {
      name: "Certified Kubernetes Administrator (CKA)",
      link: "https://www.credly.com/badges/9c7f13ef-1d9c-495e-8476-a7a968acc73b/public_url"
    },
    {
      name: "AWS Certified Solution Architect",
      link: "https://www.credly.com/badges/f2a8109e-0df3-492d-8fc1-f88cf3da1d11/public_url"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      link: "https://www.credly.com/badges/dd47c597-c2f7-4b3c-968e-4c92af1b5069/public_url"
    },
    {
      name: "Java For Cloud - Stackroute",
      link: "https://drive.google.com/file/d/1WmlQRJSze_xVchWy39djhvqwLK_L9qog/view"
    },
    {
      name: "Google Cloud Fundamentals: Core Infrastructure",
      link: "https://www.coursera.org/account/accomplishments/certificate/Q79TBHXPD2V4"
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Illinois Chicago",
      period: "Aug 2025 - May 2027",
      location: "Chicago, IL"
    },
    {
      degree: "Bachelor of Engineering in Information Technology",
      institution: "University of Mumbai",
      period: "Aug 2018 - May 2022",
      location: "Mumbai, India"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              DP
            </h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-cyan-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-slate-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left py-2 px-4 rounded-lg transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? 'bg-cyan-600 text-white' 
                      : 'text-slate-300 hover:bg-slate-800 hover:text-cyan-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Dhru Prajapati
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-6">DevOps Engineer & Cloud Architect</p>
            <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto mb-8 px-4">
              3+ years of experience in cloud infrastructure, automation, and CI/CD. Passionate about designing scalable 
              and reliable systems that streamline software delivery and enhance developer productivity.
            </p>
            
            {/* Contact Icons */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
              <a href="mailto:dpraj7@uic.edu" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors text-sm md:text-base">
                <Mail size={18} />
                <span>dpraj7@uic.edu</span>
              </a>
              <a href="tel:+14642665498" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors text-sm md:text-base">
                <Phone size={18} />
                <span>+1 (464) 266-5498</span>
              </a>
              <span className="flex items-center gap-2 text-slate-300 text-sm md:text-base">
                <MapPin size={18} />
                <span>Chicago, IL</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <a href="https://linkedin.com/in/dhru-prajapati-63a9781a3/" 
                 className="p-3 bg-slate-800 rounded-lg hover:bg-cyan-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Dhru205" 
                 className="p-3 bg-slate-800 rounded-lg hover:bg-cyan-600 transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Code className="text-cyan-400" />
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Briefcase className="text-cyan-400" />
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-slate-800/50 p-6 md:p-8 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-cyan-400">{job.role}</h3>
                    <p className="text-lg md:text-xl text-slate-300">{job.company}</p>
                    <p className="text-sm md:text-base text-slate-400">{job.location}</p>
                  </div>
                  <span className="px-4 py-2 bg-slate-900 rounded-lg text-slate-300 text-sm md:text-base self-start">{job.period}</span>
                </div>
                <ul className="space-y-3">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-300">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Server className="text-cyan-400" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-900 p-8 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all hover:scale-105">
                <h3 className="text-2xl font-semibold mb-3 text-cyan-400">{project.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-400 text-sm">
                      <span className="text-cyan-400">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 mt-6 bg-slate-800 hover:bg-cyan-600 text-slate-300 hover:text-white rounded-lg transition-colors"
                  >
                    <Github size={20} />
                    <span>View on GitHub</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="text-cyan-400" />
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-slate-300">{edu.institution}</p>
                    <p className="text-slate-400">{edu.location}</p>
                    <p className="text-slate-400 mt-2">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <Award className="text-cyan-400" />
                Certifications
              </h2>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors group"
                  >
                    <p className="text-slate-300 flex items-center gap-3 group-hover:text-cyan-400 transition-colors">
                      <span className="text-cyan-400">✓</span>
                      <span className="flex-1">{cert.name}</span>
                      <svg 
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-8">
            I'm always open to discussing new opportunities, innovative projects, or potential collaborations.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="mailto:dpraj7@uic.edu" 
               className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <Mail size={20} />
              Email Me
            </a>
            <a href="https://linkedin.com/in/dhru-prajapati-63a9781a3/" 
               className="px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="https://github.com/Dhru205" 
               className="px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© {new Date().getFullYear()} Dhru Prajapati. Built with React and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}