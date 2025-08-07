"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Rocket,
  Mail,
  Download,
  ArrowRight,
  MapPin,
  Search,
  ArrowUp,
  ArrowDown,
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  LinkIcon,
  Menu,
  LayoutGrid,
  Server, 
  ActivitySquare,
  BarChart2, 
} from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import './globals.css';


export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  
  const techStack = [
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "JavaScript", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "Golang", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
  ]

  const educationData = [
    {
      degree: "Bachelor of Informatics",
      university: "Institut Teknologi Sepuluh Nopember",
      location: "Surabaya, Indonesia",
      years: "2021 - 2025",
      gpa: "3.62/4.00",
      coursework: "Database Management, Web Programming, Knowledge-Based System Engineering, Machine Learning, Information System Analysis and Design",
      project: "Backend System Design Using Microservices Architecture To Measure Water Quality From Drone Data",
    },
  ]

  const bootcampData = [
    {
      title: "Cloud Computing Cohort",
      provider: "Bangkit Academy led by Google, GoTo, & Traveloka",
      type: "Independent Study",
      years: "Feb 2024 - Jul 2024",
      details:
        "Graduated from Bangkit: 900+ hours in Cloud & Backend, GCP badges, and capstone product delivery.",
      project: "KulitKu - Smart Application for Skin Disease Detection using Machine Learning.",
      projectLink: null,
      keyAchievements: [
        "Completed 900+ hours of Cloud Computing training (technical, soft skills, English).",
        "Earned 6+ Google Cloud badges and backend certifications via Dicoding.",
        "Certified in Web Programming, JavaScript, and Backend with Google Cloud.",
        "Built a smart skin disease detection app in a cross-functional capstone team.",
        "Best Presenter in capstone peer review (Individual – 1 per team).",
      ],
      githubLink: "https://github.com/rafifiaan/KulitKu-App", 
      hasGithubLink: true,
      hasCertificate: true,
      certificateLink: "https://drive.google.com/file/d/1AjsmkEbi8jkgsETTl3_daPMewNy4pCYG/view?usp=sharing", // Ganti dengan link sertifikat asli
    },
    {
      title: "Backend Developer Internship",
      provider: "PT. Telkom Indonesia",
      type: "Internship",
      years: "Sep 2024 - Nov 2024",
      details: "Contributed to the development of DOME, a web-based outsourcing data management platform, by building RESTful APIs with Express.js & Bun.js, designing Supabase schema, and deploying backend services for multi-division use.",
      project: "DOME: Web-based Outsourcing Data Management platform",
      projectLink: "https://dome-zeta.vercel.app/", 
      keyAchievements: [
        "Built and deployed RESTful APIs using Express.js and Bun.js.",
        "Designed relational database schema on Supabase for efficient data access.",
        "Collaborated with frontend team to ensure smooth data flow and integration.",
      ],
      githubLink: "https://github.com/rafifiaan/dome-be", 
      hasGithubLink: true,
      hasCertificate: true,
      certificateLink: "https://drive.google.com/file/d/1VJhNImd4vmocmXO-9UDhbvUYdunK3VhH/view?usp=sharing",
    },
    {
      title: "Backend Developer",
      provider: "Direktorat Pengembangan Teknologi dan Sistem Informasi ITS",
      type: "Contracted Project",
      years: "Jan 2025 - Apr 2025",
      details: "Enhanced MyITS Puspresnas by fixing 20+ bugs, optimizing Golang-SQL Server queries, and developing features like export tools, supervisor assignment, and team data tracking for PKM coordination.",
      project: "MyITS Puspresnas – Internal PKM Management Platform at ITS",
      projectLink: "https://puspresnas.its.ac.id",
      keyAchievements: [
        "Resolved 20+ backend bugs and optimized SQL queries for faster data access.",
        "Developed export features (PDF & Excel) used by 100+ academic staff.",
        "Supported efficient PKM coordination by enabling team management and supervisor matching for 200+ teams.",
      ],
      hasCertificate: false, 
      certificateLink: null,
    },
    {
      title: "Backend Developer",
      provider: "Information Intelligent Management Laboratory",
      type: "Contracted Project",
      years: "Sep 2024 - Aug 2025",
      details: "Built 5 backend services with Golang (Gin) and 1 with Python (FastAPI) to support batch sensor data processing, aerial documentation, and monitoring data delivery via Website & Android app.",
      project: "DroneMEQ: Drone for Marine Environmental Quality",
      projectLink: "https://dronemeq.erplabiim.com/",
      keyAchievements: [
        "Developed 5 microservices using Golang (Gin) and 1 using Python (FastAPI) to support modular backend architecture.",
        "Implemented batch sensor data ingestion and aerial media upload features for marine monitoring.",
        "Integrated backend with Android and web clients, ensuring reliable cross-platform access and synchronization.",
      ],
      githubLink: "https://github.com/rafifiaan/dome-be", 
      hasGithubLink: false,
      hasCertificate: false,
      certificateLink: "#",
    },
  ]
  
  const certificationsData = [
    {
      name: "Intro to Data Analytics",
      issuer: "RevoU",
      year: "Jul 2025",
      description: "Essential skills in data analytics, including data cleaning, and basic exploratory analysis with Python.",
      credentialId: "-",
      skillsValidated: ["Data Analytics", "Bussiness Understanding", "Data Cleaning", "Exploratory Data Analysis", "Python"],
      certificateLink: "https://drive.google.com/file/d/19ojiwsgiVloAT3EKXWxyMauP6pTzbIlw/view?usp=sharing", 
    },
    {
      name: "Application Development with Cloud Run",
      issuer: "Google",
      year: "May 2024",
      description:
      "Learn to design, deploy, and manage cloud-native applications using Google Cloud Run through hands-on labs and practical exercises.",
      credentialId: "9106793", 
      skillsValidated: ["Cloud Run Deployment", "Containerized Applications", "Cloud Application Management", "Google Cloud Services Integration"],
      certificateLink: "https://www.cloudskillsboost.google/public_profiles/cd81d594-4943-4637-9ff8-bbb6ac17a0a6/badges/9106793?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share", 
    },
    {
      name: "Belajar Penerapan Machine Learning dengan Google Cloud",
      issuer: "Dicoding Indonesia",
      year: "May 2024",
      description: "Learn to build and deploy machine learning applications using Google Cloud services like Compute Engine, Cloud Storage, and Vertex AI.",
      credentialId: "JMZV317GNPN9", 
      skillsValidated: ["Machine Learning Deployment", "Google Cloud Platform (GCP)", "TensorFlow Model Management", "Vertex AI & MLOps", "Cloud Storage & Firestore", "App Engine & Compute Engine"],
      certificateLink: "https://www.dicoding.com/certificates/JMZV317GNPN9", 
    },
    {
      name: "Menjadi Google Cloud Engineer",
      issuer: "Dicoding Indonesia",
      year: "May 2024",
      description: "Learn to design and deploy cloud-based solutions using core Google Cloud services, covering compute, storage, networking, and operations tools.",
      credentialId: "GRX5ODW03P0M", 
      skillsValidated: ["Google Cloud Fundamentals", "Cloud Infrastructure Deployment", "Compute & Storage Services", "Networking & Operations Monitoring", "Identity & Access Management (IAM)"],
      certificateLink: "https://www.dicoding.com/certificates/GRX5ODW03P0M",
    },
    {
      name: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding Indonesia",
      year: "Apr 2024",
      description: "Master JavaScript fundamentals and backend development using Node.js, covering concepts from OOP and functional programming to error handling and testing.",
      credentialId: "KEXL1374WXG2", 
      skillsValidated: ["JavaScript Fundamentals", "Object-Oriented & Functional Programming", "Node.js Backend Development", "Asynchronous Programming", "JavaScript Testing & Error Handling"],
      certificateLink: "https://www.dicoding.com/certificates/KEXL1374WXG2",
    },
    {
      name: "Belajar Dasar Manajemen Proyek",
      issuer: "Dicoding Indonesia",
      year: "Aug 2023",
      description: "Comprehensive introduction to project management fundamentals, methodologies, and organizational structure to prepare for a career as a project manager.",
      credentialId: "GRX5DE8D3X0M",
      skillsValidated: ["Project Management Fundamentals", "Project Lifecycle & Methodologies", "Organizational Structure & PMO", "Agile & Waterfall Frameworks"],
      certificateLink: "https://www.dicoding.com/certificates/GRX5DE8D3X0M",
    },
    {
      name: "Belajar Membuat Aplikasi Back-End untuk Pemula",
      issuer: "Dicoding Indonesia",
      year: "Nov 2023",
      description: "Learn to build and deploy RESTful APIs using Node.js and AWS EC2, aligned with international back-end development standards.",
      credentialId: "07Z6823DYXQR",
      skillsValidated: ["Node.js Fundamentals", "RESTful API Development", "API Testing with Postman", "Server Deployment with AWS EC2", "Back-End Architecture with Hapi Framework"],
      certificateLink: "https://www.dicoding.com/certificates/07Z6823DYXQR",
    },
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "Dicoding Indonesia",
      year: "Sep 2023",
      description: "Understand the fundamentals of AWS Cloud, its global infrastructure, key services, pricing models, and security practices based on international standards.",
      credentialId: "2VX36W36QXYQ",
      skillsValidated: ["AWS Cloud Fundamentals", "Cloud Computing Concepts", "AWS Security and IAM", "Cost Management and Support Plans"],
      certificateLink: "https://www.dicoding.com/certificates/2VX36W36QXYQ",
    },
    {
      name: "The Bits and Bytes of Computer Networking",
      issuer: "Coursera",
      year: "Feb 2024",
      description: "Introduction to computer networking concepts, including protocols, IP addressing, and network security.",
      credentialId: "JF7EEN7X5YCG",
      skillsValidated: ["Networking Fundamentals", "IP Addressing (IPv4 & IPv6)", "Network Administration & Routing", "Network Security"],
      certificateLink: "https://www.coursera.org/account/accomplishments/certificate/JF7EEN7X5YCG",
    },
    {
      name: "System Administration and IT Infrastructure Services",
      issuer: "Coursera",
      year: "Feb 2024",
      description: "Introduction to system administration and IT infrastructure concepts, including server management, virtualization, and cloud computing.",
      credentialId: "UA4SX4KLNF4R",
      skillsValidated: ["System Configuration", "Server Management & Virtualization", "Disaster Recovery", "Data Storage"],
      certificateLink: "https://www.coursera.org/account/accomplishments/certificate/UA4SX4KLNF4R",
    },
    {
      name: "Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud",
      issuer: "Google",
      year: "Mar 2024",
      description: "Learn the fundamentals of big data, machine learning, and AI in Google Cloud, including managed services and practical applications.",
      credentialId: "8265828",
      skillsValidated: ["Google Cloud Big Data Services", "Machine Learning Fundamentals", "AI Concepts in Google Cloud"],
      certificateLink: "https://www.cloudskillsboost.google/public_profiles/cd81d594-4943-4637-9ff8-bbb6ac17a0a6/badges/8265828?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      name: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding Indonesia",
      year: "Feb 2024",
      description: "Learn the structured fundamentals of HTML and CSS to build and style responsive, semantic websites from scratch.",
      credentialId: "NVP77V9Y4PR0",
      skillsValidated: ["Semantic HTML", "CSS Styling & Layouting", "Responsive Design with Flexbox"],
      certificateLink: "https://www.dicoding.com/certificates/NVP77V9Y4PR0",
    },
    {
      name: "Create and Manage Cloud Resources",
      issuer: "Google",
      year: "Mar 2024",
      description: "Master the use of gcloud commands, virtual machine deployment, and HTTP load balancer configuration on Google Cloud Compute Engine.",
      credentialId: "8266084",
      skillsValidated: ["gcloud CLI usage", "VM deployment on Compute Engine", "HTTP Load Balancing"],
      certificateLink: "https://www.cloudskillsboost.google/public_profiles/cd81d594-4943-4637-9ff8-bbb6ac17a0a6/badges/8266084?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
  ]
  
  const skillsData = {
    backend: [
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "Golang",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
    ],
    data: [
      "SQL (PostgreSQL)",
      "NoSQL (MongoDB)",
      "Data Analysis",
      "Data Visualization",
      "Machine Learning",
      "Data Modeling",
      "Database Design",
      "Big Data",
    ],
    tools: ["Git", "Docker", "Jenkins", "Postman", "VS Code", "Trello", "DBeaver", "Draw.io"],
  }
  
  const projects = [
    {
      title: "DroneMEQ: Drone for Marine Environmental Quality",
      description: "Web-based platform for monitoring marine environmental quality using drone data",
      tech: ["Golang", "Gin", "PostgreSQL", "MongoDB", "Python", "FastAPI", "Docker", "Jenkins", "RESTful APIs"],
      status: "Completed",
      year: "2025",
      image: "/DroneMEQ.png",
      link: "https://dronemeq.erplabiim.com/",
    },
    {
      title: "KulitKu: Smart Skin Disease Detection",
      description: "Mobile app for skin disease detection using machine learning and image processing",
      tech: ["Node.js", "Express.js", "Google Cloud Run", "Google Cloud Storage", "SQL Instance", "RESTful APIs"],
      status: "Completed",
      year: "2024",
      image: "/KulitKu.jpeg",
      link: "https://github.com/rafifiaan/KulitKu-App",
    },
    {
      title: "DOME: Web-based Outsourcing Data Management System",
      description: "Platform for managing outsourcing data with RESTful APIs and Supabase",
      tech: ["Node.js", "Express.js", "Bun.js", "Supabase", "RESTful APIs"],
      status: "Completed",
      year: "2024",
      image: "/Dome.jpeg",
      link: "https://dome-zeta.vercel.app/",
    },
    {
      title: "Analysis - EDA for Product Sales",
      description: "Exploratory Data Analysis (EDA) for product sales data with simple visualizations and insights",
      tech: ["Python", "Excel Data", "Pandas", "Jupyter Notebook", "Matplotlib", "Seaborn"],
      status: "Completed",
      year: "2025",
      image: "/IntroDA.png",
      link: "https://github.com/rafifiaan/sales-insight-minicourses-DA",
    },
  ]
  
  interface BlogPost {
    title: string;
    date: string;
    description: string;
    link: string;
  }
  
  // Contoh isian data blog posts
  /*
  {
      title: "Optimizing PostgreSQL Queries for Large Datasets",
      date: "July 25, 2024",
      description: "Tips and tricks to improve performance of complex SQL queries in PostgreSQL.",
      link: "#", // Ganti dengan link blog post asli
      },
  */
  const blogPosts: BlogPost[] = [ ];

  interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    status: string | null;
    description: string;
    achievements: string[];
    tech: string[];
  }

  // contoh isian data experiences
  /*
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Indonesia",
    location: "Jakarta, Indonesia (Remote)",
    period: "Jan 2023 - Present",
    status: "Current Position",
    description: "Leading development of enterprise-level web applications serving 10,000+ users daily.",
    achievements: [
      "Architected and developed scalable microservices using Node.js and Docker",
      "Built responsive React applications with TypeScript, improving user engagement by 40%",
      "Mentored 3 junior developers and established code review best practices",
      "Optimized database queries reducing API response time by 60%"
      ],
      tech: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "AWS"]
      },
      */
     
     const experiences: Experience[] = [ ];

  const [showAllProjects, setShowAllProjects] = useState(false)
  const maxProjectsToShow = 6
  const displayedProjects = showAllProjects ? projects : projects.slice(0, maxProjectsToShow)

  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const maxCertsToShow = 3;
  const parseYear = (str: string): Date => {
    const parts = str.trim().split(" ");
    if (parts.length === 2) {
      const [monthStr, yearStr] = parts;
      return new Date(`${monthStr} 1, ${yearStr}`);
    }
    return new Date(`Jan 1, ${str}`);
  };
  
  const sortedCertifications = [...certificationsData].sort(
    (a, b) => parseYear(b.year).getTime() - parseYear(a.year).getTime()
  );
  
  const displayedCertifications = showAllCertifications
  ? sortedCertifications
  : sortedCertifications.slice(0, maxCertsToShow);
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // tetap mencegah default
    setOpen(false);
    requestAnimationFrame(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    });
  };
  const [open, setOpen] = useState(false);
  
  if (!mounted) {
    return null
  }
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="h-12 w-12" />
              <div className="font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                rafifiaan.me
              </div>
            </Link>
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px] rounded-l-xl [&>button]:top-6 [&>button]:right-6 [&>button]:h-8 [&>button]:w-8 [&>button]:text-lg" aria-label="Main Menu">
                <SheetHeader className="flex flex-row items-center justify-between border-b pb-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <LayoutGrid className="h-6 w-6 text-muted-foreground" />
                    <SheetTitle className="font-bold text-lg text-black dark:text-white">
                      Main Menu
                    </SheetTitle>
                  </div>
                </SheetHeader>

                <nav className="flex flex-col space-y-2">
                  {/* Navigation Links dengan Card Style */}
                  <Link 
                    href="#work" 
                    className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                    onClick={(e) => handleNavClick(e, '#work')}
                  >
                    <Briefcase className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    <span className="font-medium group-hover:text-primary">Work</span>
                  </Link>

                  <Link 
                    href="#about" 
                    className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                      onClick={(e) => handleNavClick(e, '#about')}
                  >
                    <BookOpen className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    <span className="font-medium group-hover:text-primary">About</span>
                  </Link>

                  <Link 
                    href="#experience" 
                    className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                    onClick={(e) => handleNavClick(e, '#experience')}
                  >
                    <GraduationCap className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    <span className="font-medium group-hover:text-primary">Experience</span>
                  </Link>

                  <Link 
                    href="#certifications" 
                    className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                    onClick={(e) => handleNavClick(e, '#certifications')}
                  >
                    <Award className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    <span className="font-medium group-hover:text-primary">Certifications</span>
                  </Link>

                  <Link 
                    href="#skills" 
                    className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                    onClick={(e) => handleNavClick(e, '#skills')}
                  >
                    <Rocket className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    <span className="font-medium group-hover:text-primary">Skills</span>
                  </Link>

                  <Link 
                    href="#contact" 
                    className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                    onClick={(e) => handleNavClick(e, '#contact')}
                  >
                    <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    <span className="font-medium group-hover:text-primary">Contact</span>
                  </Link>

                  {/* Divider */}
                  <div className="border-t my-4"></div>
                  
                  {/* Action Buttons - tidak full width */}
                  <div className="space-y-3 px-2">
                    {/* Resume Button */}
                    <Button
                      onClick={() => setOpen(true)}
                      className="w-full max-w justify-center space-x-2"
                      variant="default"
                    >
                      <Download className="h-4 w-4" />
                      <span>Resume</span>
                    </Button>
                    
                    {/* Theme Toggle Button */}
                   <Button
                      variant="outline"
                      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                      className="w-full max-w justify-center space-x-2"
                    >
                      {theme === "light" ? (
                        <Moon className="h-4 w-4" />
                      ) : (
                        <Sun className="h-4 w-4" />
                      )}
                      <span>{theme === "light" ? "Dark" : "Light"} Mode</span>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#work" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, '#work')}
            >
              Work
            </Link>
            <Link 
              href="#about" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, '#about')}
            >
              About
            </Link>
            <Link 
              href="#experience" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, '#experience')}
            >
              Experience
            </Link>
            <Link 
              href="#certifications" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, '#certifications')}
            >
              Certifications
            </Link>
            <Link 
              href="#skills" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, '#skills')}
            >
              Skills
            </Link>
            <Link 
              href="#contact" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Contact
            </Link>
            
            {/* Resume Dialog */}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="ml-4 bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </DialogTrigger>

              <DialogContent className="w-[90vw] max-w-[90vw] p-0">
                <DialogHeader className="px-6 pt-6">
                  <DialogTitle>Preview Resume</DialogTitle>
                </DialogHeader>

                <div className="w-full h-[70vh] px-6">
                  <iframe
                    src="https://drive.google.com/file/d/1hIhApWgHaz158SvoPhZ4qzEA9X3zH1EQ/preview"
                    width="100%"
                    height="100%"
                    allow="autoplay"
                    className="w-full h-full rounded-md border"
                  />
                </div>

                <div className="flex justify-end px-6 pb-6 mt-4">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1hIhApWgHaz158SvoPhZ4qzEA9X3zH1EQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="default">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </a>
                </div>
              </DialogContent>
            </Dialog>
            
            {/* Theme Toggle Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-9 lg:py-7">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column */}
            <div className="space-y-7">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for New Opportunities</span>
                </div>

                <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                  Hi, I'm <span className="text-primary">Rafi&nbsp;Aliefian</span>
                  <br />
                  <span className="text-primary">Putra Ramadhani</span>
                  <br />
                  <span className="text-muted-foreground text-2xl lg:text-3xl">
                    Backend Developer | IT Business Analyst | Data-Driven Insights
                  </span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg text-justify">
                  I started in <strong>Backend Development</strong>—building systems and APIs that solve real problems. Over time, I developed a strong interest in <strong>System Analysis</strong> and <strong>IT Business</strong>, where I could better understand the needs behind a system and align technical solutions with business objectives. This strategic perspective eventually led me to explore <strong>Data Analytics</strong>, where I focus on uncovering <strong>Impactful Insights</strong> that support decision-making and drive <strong>Real-World Solutions</strong>.
                </p>

                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Surabaya, Indonesia</span>
                  <Rocket className="h-4 w-4 ml-4" />
                  <span>&lt;1 years experience</span>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Current Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#work">
                  <Button size="lg" className="group">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" size="lg">
                    <Mail className="mr-2 h-4 w-4" />
                    Get In Touch
                  </Button>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
                  <a
                    href="https://github.com/rafifiaan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
                  <a
                    href="https://linkedin.com/in/rafifiaanpr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
                  <a href="mailto:rafialiefian03@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" className="hover:text-primary px-3" asChild>
                  <a
                    href="https://www.hackerrank.com/profile/rafialiefian03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <title>HackerRank</title>
                      <path d="M0 0v24h24V0zm9.95 8.002h1.805c.061 0 .111.05.111.111v7.767c0 .061-.05.111-.11.111H9.95c-.061 0-.111-.05-.111-.11v-2.87H7.894v2.87c0 .06-.05.11-.11.11H5.976a.11.11 0 01-.11-.11V8.112c0-.06.05-.11.11-.11h1.806c.061 0 .11.05.11.11v2.869H9.84v-2.87c0-.06.05-.11.11-.11zm2.999 0h5.778c.061 0 .111.05.111.11v7.767a.11.11 0 01-.11.112h-5.78a.11.11 0 01-.11-.11V8.111c0-.06.05-.11.11-.11z" />
                    </svg>
                    HackerRank
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column - Profile */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 p-1">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-muted">
                    <Image
                      src="/profile-photo.jpeg?height=400&width=400"
                      alt="Rafi Aliefian - Data Analytics and Backend Developer"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                  &lt;1
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-background border-2 border-border rounded-xl flex items-center justify-center shadow-lg">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-20 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Featured Work</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A selection of projects that showcase my skills and passion for creating exceptional digital
                experiences.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...displayedProjects]
                .sort((a, b) => Number(b.year) - Number(a.year))
                .map((project, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background overflow-hidden p-0">
                  <CardContent className="p-0">
                    <div className="relative w-full h-48 bg-muted">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                          <Badge
                            className={cn(
                              "text-xs",
                              project.status === "In Progress" && "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
                              project.status === "Completed" && "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                              project.status === "Paused" && "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
                            )}
                          >
                            {project.status}
                          </Badge>
                        <span className="text-xs text-muted-foreground">{project.year}</span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Show More/Less Button */}
            {projects.length > maxProjectsToShow && (
              <div className="text-center pt-8">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="group"
                >
                  {showAllProjects ? (
                    <>
                      Show Less Projects
                      <ArrowUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                    </>
                  ) : (
                    <>
                      View All Projects ({projects.length - maxProjectsToShow} more)
                      <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="space-y-16">
            {/* About Me Introduction */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold">About Me</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>
                    I'm a Fresh Graduate of Informatics from Institut Teknologi Sepuluh Nopember (ITS) Surabaya with a strong background in software engineering—especially backend development.
                  </p>
                  <p>
                    Over the past few years, I’ve worked on building scalable and reliable systems using technologies like Golang, Node.js, and Google Cloud Platform. My experience includes designing APIs, managing backend logic, and integrating data from IoT devices into real-world applications.
                  </p>
                  <p>
                    In addition to my technical work, I’ve developed strong capabilities in system analysis and IT business—bridging the gap between business needs and technical execution. I enjoy translating complex requirements into structured system designs that align with organizational goals and deliver real value.
                  </p>
                  <p>
                   Recently, I’ve developed a growing interest in data analytics and data-driven decision-making. To support this shift, I’ve been learning Python, SQL, R, Tableau, Power BI, and machine learning fundamentals. I'm particularly drawn to extracting insights from data to drive meaningful impact.
                  </p>
                  <p>
                    I bring a strong technical foundation, a sharp analytical mindset, and a continuous learning attitude. I'm currently exploring opportunities in backend, system analysis, and data-related roles, and I’m excited to contribute to impactful, real-world solutions.
                  </p>
                </div>
              </div>

            {/* Right: Metric Cards + Core Competencies */}
            <div className="space-y-6">
              {/* Metric Cards */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary">&lt;1</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Tech & Tools</div>
                </Card>
              </div>

              <Card className="p-6 space-y-4">
                <h4 className="text-lg font-semibold tracking-tight border-b pb-2">
                  Core Competencies & Focus
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x">
                  {[
                    {
                      icon: <Server className="w-5 h-5 text-primary mt-1" />,
                      title: 'Backend Development',
                      desc: 'Scalable APIs, databases, and service architecture.',
                    },
                    {
                      icon: <Briefcase className="w-5 h-5 text-primary mt-1" />,
                      title: 'IT & Business Insight',
                      desc: 'Bridging business needs with tech-driven solutions.',
                    },
                    {
                      icon: <ActivitySquare className="w-5 h-5 text-primary mt-1" />,
                      title: 'System Analysis',
                      desc: 'Functional mapping, specs design, and process modeling.',
                    },
                    {
                      icon: <BarChart2 className="w-5 h-5 text-primary mt-1" />,
                      title: 'Data Analytics',
                      desc: 'Python, SQL, dashboards, and insight-driven decisions.',
                    },
                  ].map(({ icon, title, desc }, i) => (
                    <div key={i} className="flex items-start gap-3 p-4">
                      {icon}
                      <div>
                        <p className="font-medium">{title}</p>
                        <p className="text-sm text-muted-foreground">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

            </div>
          </div>

            {/* Education Section */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold flex items-center justify-center gap-2">
                  <GraduationCap className="h-7 w-7 text-primary" />
                  Education
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  An academic path that laid the groundwork for my technical expertise and fueled my passion for solving real-world problems.
                </p>
              </div>

              <div className="space-y-6">
                {" "}
                {/* Ensured consistent vertical spacing */}
                {educationData.map((edu, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-xl">{edu.degree}</h4>
                          <p className="text-muted-foreground font-medium text-lg">{edu.university}</p>
                          <p className="text-sm text-muted-foreground flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {edu.location}
                          </p>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-2">
                          <Badge variant="outline" className="text-xs">
                            {edu.years}
                          </Badge>
                          {edu.gpa && <span className="text-sm text-muted-foreground">GPA: {edu.gpa}</span>}
                        </div>
                      </div>

                      <div className="space-y-3">
                        {edu.coursework && (
                          <p className="text-muted-foreground">
                            <span className="font-medium">Relevant Coursework:</span> {edu.coursework}
                          </p>
                        )}
                        {edu.project && (
                          <p className="text-muted-foreground">
                            <span className="font-medium">Thesis Project:</span> {edu.project}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Non-Formal Section */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold flex items-center justify-center gap-2">
                  <BookOpen className="h-7 w-7 text-primary" />
                  Work Experience During College
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Practical and professional experience I gained while pursuing my degree, through internships, freelance, and impactful student projects.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[...bootcampData]
                  .sort((a, b) => {
                    const parseEndDate = (str: string): Date => {
                      const match = str.match(/-\s*([A-Za-z]{3})\s*(\d{4})/); // contoh: "- Jul 2024"
                      if (!match) return new Date(0);
                      const [_, monthStr, yearStr] = match;
                      return new Date(`${monthStr} 1, ${yearStr}`);
                    };
                    return parseEndDate(b.years).getTime() - parseEndDate(a.years).getTime();
                  })
                  .map((bootcamp, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <h4 className="font-semibold text-lg">{bootcamp.title}</h4>
                          <p className="text-muted-foreground font-medium">{bootcamp.provider}</p>
                          <p className="text-sm text-muted-foreground">{bootcamp.type}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {bootcamp.years}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        {bootcamp.details && <p className="text-sm text-muted-foreground">{bootcamp.details}</p>}
                        {bootcamp.keyAchievements && bootcamp.keyAchievements.length > 0 && (
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground font-medium">Key Achievements:</p>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {bootcamp.keyAchievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {bootcamp.project && (
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">Project:</span> {bootcamp.project}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {bootcamp.projectLink && (
                          <Button variant="ghost" size="sm" className="justify-start text-primary hover:underline">
                            <Link
                              href={bootcamp.projectLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center"
                            >
                              View Project
                              <ArrowRight className="ml-2 h-3 w-3" />
                            </Link>
                          </Button>
                        )}

                        {bootcamp.hasGithubLink && (
                          <Badge variant="secondary" className="bg-muted text-foreground hover:ring hover:ring-primary/30 hover:shadow-sm text-sm cursor-pointer transition-all">
                              <Link
                                href={bootcamp.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                GitHub <LinkIcon className="ml-1 h-3 w-3" />
                              </Link>
                            </Badge>
                          )}

                        {bootcamp.hasCertificate && (
                          <Badge variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:ring hover:ring-primary/40 hover:shadow-md cursor-pointer transition-all">
                            {bootcamp.certificateLink ? (
                              <Link
                                href={bootcamp.certificateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                Certificate <LinkIcon className="ml-1 h-3 w-3" />
                              </Link>
                            ) : (
                              "Certificate"
                            )}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <section id="experience" className="space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold flex items-center justify-center gap-2">
                  <Briefcase className="h-7 w-7 text-primary" />
                  Professional Experience
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  A journey of delivering meaningful impact through software development and analytical insights, while continuously evolving in both roles.
                </p>
              </div>
              <div className="space-y-6">
                {experiences.length > 0 ? (
                  experiences.map((experience, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="space-y-4">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="space-y-2">
                            <h4 className="font-semibold text-xl">{experience.title}</h4>
                            <p className="text-muted-foreground font-medium text-lg">{experience.company}</p>
                            <p className="text-sm text-muted-foreground flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {experience.location}
                            </p>
                          </div>
                          <div className="flex flex-col items-start md:items-end gap-2">
                            {experience.status && (
                              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                {experience.status}
                              </Badge>
                            )}
                            <span className="text-sm text-muted-foreground">{experience.period}</span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <p className="text-muted-foreground">
                            {experience.description}
                          </p>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {experience.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {experience.tech.map((techItem, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="text-xs">
                                {techItem}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))
                ) : (
                  <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 text-center">
                    <div className="space-y-4">
                      <div className="w-16 h-16 mx-auto border-2 border-dashed border-muted-foreground/30 rounded-full flex items-center justify-center">
                        <Search className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-lg">Ready to Contribute 🤝</h4>
                          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                            I'm currently seeking opportunities to apply and grow my skills in real-world projects.<br />
                            Eager to contribute to a dynamic team and gain hands-on experience in both software development and data analytics.
                          </p>
                        <div className="flex justify-center pt-2">
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs">
                            Actively Looking
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold flex items-center justify-center gap-2">
                <Award className="h-7 w-7 text-primary" />
                Certifications
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A collection of certifications that reflect my learning journey and expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedCertifications.map((cert, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h4 className="font-semibold text-lg">{cert.name}</h4>
                        <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                        <p className="text-sm text-muted-foreground">{cert.description}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {cert.year}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      {cert.credentialId && (
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Credential ID:</span> {cert.credentialId}
                        </p>
                      )}
                      {cert.skillsValidated && cert.skillsValidated.length > 0 && (
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Skills Validated:</span> {cert.skillsValidated.join(", ")}
                        </p>
                      )}
                    </div>
                    {cert.certificateLink && (
                      <Button variant="ghost" size="sm" className="w-full justify-start text-primary hover:underline">
                        <Link
                          href={cert.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          View Certificate
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            {/* Show More / Less Button */}
            {certificationsData.length > maxCertsToShow && (
              <div className="text-center pt-8">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowAllCertifications(!showAllCertifications)}
                  className="group"
                >
                  {showAllCertifications ? (
                    <>
                      Show Less Certifications
                      <ArrowUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                    </>
                  ) : (
                    <>
                      View All Certifications ({certificationsData.length - maxCertsToShow} more)
                      <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Skill Set</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Technologies and tools I use to build robust, scalable, and data-driven solutions.
              </p>
            </div>

            <div className="space-y-12">
              {/* Backend Development */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <span className="text-lg">⚙️</span>
                  </div>
                  <h3 className="text-xl font-semibold">Backend Development</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillsData.backend.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium hover:bg-green-100 hover:text-green-800 dark:hover:bg-green-900 dark:hover:text-green-200 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Data & Analytics */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold">Data & Analytics</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillsData.data.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-blue-900 dark:hover:text-blue-200 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Tools & Technologies */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🛠️</span>
                  </div>
                  <h3 className="text-xl font-semibold">Engineering Toolkit</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillsData.tools.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium hover:bg-purple-100 hover:text-purple-800 dark:hover:bg-purple-900 dark:hover:text-purple-200 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Summary */}
            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">Backend</div>
                <div className="text-sm text-muted-foreground">Server-side development and API design</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">Data</div>
                <div className="text-sm text-muted-foreground">Database design and data processing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold flex items-center justify-center gap-2">
                <BookOpen className="h-7 w-7 text-primary" />
                Latest Blog Posts
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Insights and thoughts on technology, development, and data.
              </p>
            </div>

            {blogPosts.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts.map((post, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6 space-y-4">
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{post.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{post.description}</p>
                        <Button variant="ghost" size="sm" className="w-full justify-start text-primary hover:underline">
                          <Link href={post.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            Read More
                            <ArrowRight className="ml-2 h-3 w-3" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                {blogPosts.length > 3 && (
                  <div className="text-center pt-8">
                    <Button variant="outline" size="lg" className="group bg-transparent">
                      View All Posts
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto border-2 border-dashed border-muted-foreground/30 rounded-full flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">Coming Soon ✍️</h4>
                    <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                      I'm working on creating valuable content about technology, development insights, and data analytics.<br />
                      Stay tuned for articles that share knowledge and experiences from my learning journey.
                    </p>
                    <div className="flex justify-center pt-2">
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs">
                        In Progress
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Let's Work Together</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
                ideas to life.
              </p>
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>rafialiefian03@gmail.com</span> {/* Placeholder Email */}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Surabaya, Indonesia</span>
                </div>
                <div className="inline-flex items-center text-sm text-muted-foreground">
                  <div>
                    <span className="font-medium">Language Proficiency:</span><br />
                    <span>Indonesian – Full Professional Proficiency</span><br />
                    <span>English – Comfortable with Written and Conversational Communication</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:rafialiefian03@gmail.com">
                <Button size="lg" className="group">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message via Email
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="bg-transparent">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </DialogTrigger>

                <DialogContent className="w-[90vw] max-w-[90vw] p-0">
                  <DialogHeader className="px-6 pt-6">
                    <DialogTitle>Preview Resume</DialogTitle>
                  </DialogHeader>

                  <div className="w-full h-[70vh] px-6">
                    <iframe
                      src="https://drive.google.com/file/d/1hIhApWgHaz158SvoPhZ4qzEA9X3zH1EQ/preview"
                      width="100%"
                      height="100%"
                      allow="autoplay"
                      className="w-full h-full rounded-md border"
                    />
                  </div>

                  <div className="flex justify-end px-6 pb-6 mt-4">
                    <a
                      href="https://drive.google.com/uc?export=download&id=1hIhApWgHaz158SvoPhZ4qzEA9X3zH1EQ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="default">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="h-12 w-12" />
              <div className="font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                rafifiaan.me
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Rafi Aliefian Putra Ramadhani.
            </p>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
                <a
                  href="https://github.com/rafifiaan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
                <a
                  href="https://linkedin.com/in/rafifiaanpr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
                <a href="mailto:rafialiefian03@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" className="hover:text-primary px-3" asChild>
                  <a
                    href="https://www.hackerrank.com/profile/rafialiefian03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <title>HackerRank</title>
                      <path d="M0 0v24h24V0zm9.95 8.002h1.805c.061 0 .111.05.111.111v7.767c0 .061-.05.111-.11.111H9.95c-.061 0-.111-.05-.111-.11v-2.87H7.894v2.87c0 .06-.05.11-.11.11H5.976a.11.11 0 01-.11-.11V8.112c0-.06.05-.11.11-.11h1.806c.061 0 .11.05.11.11v2.869H9.84v-2.87c0-.06.05-.11.11-.11zm2.999 0h5.778c.061 0 .111.05.111.11v7.767a.11.11 0 01-.11.112h-5.78a.11.11 0 01-.11-.11V8.111c0-.06.05-.11.11-.11z" />
                    </svg>
                    HackerRank
                  </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
