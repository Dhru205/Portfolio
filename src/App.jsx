import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Award, Briefcase, GraduationCap, Code, Server, Database, Cloud, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  const skills = {
    "Languages": ["Python", "Java", "YAML", "Bash", ".NET", "C"],
    "DevOps Tools": ["Docker", "Kubernetes", "AWS", "Terraform", "Ansible", "Git"],
    "Monitoring": ["Grafana", "Prometheus", "Zabbix"],
    "CI/CD": ["GitLab", "GitHub Actions", "Semgrep", "Bandit", "ESLint"],
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
        "Develop and maintain OVCAS applications using .NET MVC framework with Oracle database integration and advanced SQL reporting",
        "Implemented GitHub Actions workflows to automate build and deployment pipelines for over 30 projects, including .NET MVC, .NET Core, and Java applications",
        "Automated WAR file generation and deployment to Tomcat servers"
      ]
    },
    {
      role: "DevOps Engineer",
      company: "Texple: Digital Transformation Services",
      period: "Dec 2022 - Jul 2025",
      location: "Mumbai, India",
      achievements: [
        "Implemented centralized monitoring with Prometheus and Grafana, creating dashboards and alerts to improve system reliability",
        "Migrated stock broking firm's infrastructure to AWS using Terraform (EKS, RDS, ASGs, ALBs), cutting infrastructure costs by 40%",
        "Developed Python scripts to automate AWS resource provisioning, saving clients 50% of their costs",
        "Built MonoRepo CI/CD pipeline using GitHub Actions, accelerating release cycles by 60%"
      ]
    },
    {
      role: "DevOps Engineer Intern",
      company: "PearlThoughts IT Solutions",
      period: "Sep 2022 - Nov 2022",
      location: "Tamil Nadu, India",
      achievements: [
        "Collaborated with cross-functional teams to understand client requirements and adapt infrastructure configurations",
        "Utilized GitHub Actions to automate CI/CD workflows, reducing manual intervention through custom actions for code linting, testing, and deployment"
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
      ]
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
    "Certified Kubernetes Administrator (CKA)",
    "AWS Certified Solution Architect",
    "AWS Certified Cloud Practitioner",
    "Java For Cloud - Stackroute",
    "Google Cloud Fundamentals: Core Infrastructure"
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
            <div className="flex gap-6">
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Dhru Prajapati
            </h1>
            <p className="text-2xl text-slate-300 mb-6">DevOps Engineer & Cloud Architect</p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
              3+ years of experience in cloud infrastructure, automation, and CI/CD. Passionate about designing scalable 
              and reliable systems that streamline software delivery and enhance developer productivity.
            </p>
            
            {/* Contact Icons */}
            <div className="flex justify-center gap-6 mb-8">
              <a href="mailto:dpraj7@uic.edu" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors">
                <Mail size={20} />
                <span>dpraj7@uic.edu</span>
              </a>
              <a href="tel:+14642665498" className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors">
                <Phone size={20} />
                <span>+1 (464) 266-5498</span>
              </a>
              <span className="flex items-center gap-2 text-slate-300">
                <MapPin size={20} />
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
              <div key={index} className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-cyan-400">{job.role}</h3>
                    <p className="text-xl text-slate-300">{job.company}</p>
                    <p className="text-slate-400">{job.location}</p>
                  </div>
                  <span className="px-4 py-2 bg-slate-900 rounded-lg text-slate-300">{job.period}</span>
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
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-400 text-sm">
                      <span className="text-cyan-400">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
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
                  <div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors">
                    <p className="text-slate-300 flex items-center gap-3">
                      <span className="text-cyan-400">✓</span>
                      {cert}
                    </p>
                  </div>
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
          <p>© 2025 Dhru Prajapati. Built with React and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}