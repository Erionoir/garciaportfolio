import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code2, Terminal, Database, Globe, Briefcase, GraduationCap, User, Cpu, Network, Zap, X, ChevronRight, Maximize2, Crosshair, AlertTriangle, Shield, Activity } from 'lucide-react';
import pic1 from './assets/pic1.jpg';
import nyxImg from './assets/NyxMain.png';
import nyxLogo from './assets/nyxlogo.png';
import reponexusImg from './assets/ReponexusMain.png';
import reponexusLogo from './assets/reponexuslogo.png';
import arcanistLogo from './assets/arcanistbuilderlogo.png';
import arcanistMain from './assets/arcanistbuilder_main.png';

const PROJECTS = [
  {
    id: "01",
    title: "RTU-NX [NYX]",
    subtitle: "AI-Powered Study Environment",
    desc: "A comprehensive desktop study application built with Tauri 2. Features 'Nyx', an intelligent AI tutor utilizing Gemini & DeepSeek to guide learning through flashcards, active recall, and Socratic tutoring.",
    lore: {
      status: "OPERATIONAL",
      threatLevel: "MINIMAL",
      clearance: "LEVEL 3",
      objectives: [
        "Eliminate study inefficiency via AI intervention.",
        "Establish local vector database for knowledge retention.",
        "Deploy cross-platform executable (Windows/Linux)."
      ],
      modules: ["Tauri Core", "Vector Memory", "Gemini 1.5 Pro", "React Frontend"],
      metrics: {
        efficiency: "94%",
        latency: "<50ms",
        users: "LOCAL_ONLY"
      }
    },
    tags: ["Tauri / Rust", "Gemini AI", "DeepSeek", "Education"],
    images: [
      { src: nyxImg, label: "Main Interface" }
    ],
    img: nyxImg,
    logo: nyxLogo,
    liveUrl: "https://rtunx.vercel.app/",
    sourceUrl: "https://github.com/Erionoir/rtunx",
    color: "border-zzz-green text-zzz-green",
    rawColor: "#D2F500"
  },
  {
    id: "02",
    title: "REPONEXUS",
    subtitle: "AI-Enhanced GitHub Explorer",
    desc: "Single-page GitHub repository viewer with unified search, rich repo details, file browsing, code preview, and AI-generated annotations powered by Chutes.",
    lore: {
      status: "DEPLOYED",
      threatLevel: "MEDIUM",
      clearance: "PUBLIC",
      objectives: [
        "Breach GitHub API rate limits via caching strategies.",
        "Visualize repository architecture in real-time.",
        "Inject AI context into raw code files."
      ],
      modules: ["GitHub API v3", "Chutes.ai", "Tailwind v4", "React Router"],
      metrics: {
        api_calls: "OPTIMIZED",
        render_time: "INSTANT",
        access: "GLOBAL"
      }
    },
    tags: ["React", "GitHub API", "Chutes AI", "Tailwind v4"],
    images: [
      { src: reponexusImg, label: "Main Interface" }
    ],
    img: reponexusImg,
    logo: reponexusLogo,
    liveUrl: "https://reponexus-sage.vercel.app/",
    sourceUrl: "https://github.com/Erionoir/reponexus",
    color: "border-zzz-orange text-zzz-orange",
    rawColor: "#FF4D00"
  },
  {
    id: "03",
    title: "ARCANIST BUILDER",
    subtitle: "Reverse: 1999 Team Builder Suite",
    desc: "Modern single-page app for Reverse: 1999 team building, tier list browsing, and character library exploration. Full rebuild with React + Vite, a clean UI system, and streaming AI output for team generation.",
    lore: {
      status: "REBUILT",
      threatLevel: "LOW",
      clearance: "PUBLIC",
      objectives: [
        "Stream AI team recommendations in real time.",
        "Expose tier list + library views from a single dataset.",
        "Deliver app-like UX with clean, responsive UI."
      ],
      modules: ["React 18", "Vite", "Tailwind CSS", "Framer Motion", "Lucide Icons", "Chutes Streaming"],
      metrics: {
        streaming: "LIVE",
        ux: "APP-LIKE",
        data_driven: "TRUE"
      }
    },
    tags: ["React", "Vite", "Tailwind", "Framer Motion", "Chutes AI"],
    images: [
      { src: arcanistMain, label: "Main Interface" }
    ],
    img: arcanistMain,
    logo: arcanistLogo,
    liveUrl: "https://arcanistbuilder.vercel.app/",
    sourceUrl: "https://github.com/Erionoir/arcanistbuilder",
    color: "border-zzz-yellow text-zzz-yellow",
    rawColor: "#FFD600"
  }
];

const ImageViewerModal = ({ image, isClosing, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    if (image) {
      requestAnimationFrame(() => setIsVisible(true));
    }
    return () => {
      setIsVisible(false);
    };
  }, [image]);

  if (!image) return null;

  return (
    <div
      className={`fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-all duration-300 ease-out
      ${isClosing ? 'opacity-0 scale-95 pointer-events-none' : isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
    `}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-black/60 text-white border border-white/20 hover:bg-white hover:text-black transition-colors rounded-full z-10"
        aria-label="Close image viewer"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center">
        <img src={image.src} alt={image.label} className="max-h-full max-w-full object-contain" />
        <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 bg-black/70 border border-white/20 px-3 py-1 font-mono text-xs uppercase text-white">
          <span className="text-zzz-green">LABEL</span>
          <span>{image.label}</span>
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose, isClosing, onOpenImage }) => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    if (project) {
      requestAnimationFrame(() => setIsVisible(true));
    }
    return () => {
      setIsVisible(false);
    };
  }, [project]);

  if (!project) return null;
  const borderColor = project.color.split(' ')[0];
  const textColor = project.color.split(' ')[1];

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-all duration-300 ease-out
      ${isClosing ? 'opacity-0 scale-95 pointer-events-none' : isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
    `}
    >
      {/* Background Stripes */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[linear-gradient(45deg,transparent_25%,#fff_25%,#fff_50%,transparent_50%,transparent_75%,#fff_75%,#fff_100%)] bg-[length:20px_20px]"></div>

      <div className={`relative w-full max-w-6xl h-[80vh] bg-zzz-dark/95 border-2 ${borderColor} flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden`}>
        {/* Decorative Corners */}
        <div className={`absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 ${borderColor} z-20`}></div>
        <div className={`absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 ${borderColor} z-20`}></div>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/40 backdrop-blur-xl shrink-0 z-10">
          <div className="flex items-center gap-6">
             {project.logo && (
               <div className="bg-black/60 border border-white/20 p-1">
                 <img src={project.logo} alt={`${project.title} logo`} className="w-10 h-10 object-contain" />
               </div>
             )}
             <div className={`text-4xl font-display font-bold ${textColor}`}>{project.id} // MISSION DATA</div>
             <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20">
                <div className={`w-2 h-2 rounded-full ${project.lore.bg || 'bg-white'} animate-pulse`}></div>
                <span className="font-mono text-xs text-white uppercase">{project.lore.status}</span>
             </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white hover:text-black transition-colors rounded-full border border-transparent hover:border-white/50 group">
             <X className="w-8 h-8 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto grid lg:grid-cols-12 relative z-10">
           
           {/* Left Col: Visuals & Stats (5 cols) */}
           <div className="lg:col-span-5 border-r border-white/10 bg-black/20 p-8 flex flex-col gap-8">
              {/* Image Monitor */}
              <div className={`relative aspect-video border-2 ${borderColor} p-1 bg-black/50 group overflow-hidden`}>
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-10 pointer-events-none"></div>
                 <img src={project.img} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Mission Target" />
                 <button
                   onClick={() => onOpenImage(project.images[0])}
                   className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
                   title="Expand Image"
                 >
                   <div className="flex items-center gap-2 px-4 py-2 bg-white text-black font-display uppercase text-sm shadow-lg">
                     <Maximize2 className="w-4 h-4" />
                     View Image
                   </div>
                 </button>
                 
                 <div className="absolute bottom-2 right-2 bg-black px-2 py-1 border border-white/20">
                    <span className={`font-mono text-xs ${textColor}`}>IMG_SRC.RAW</span>
                 </div>
              </div>

              {/* Threat Matrix */}
              <div className="space-y-4">
                 <div className="flex items-center gap-2 font-display text-xl text-white uppercase">
                    <AlertTriangle size={20} className={project.color.replace('border-', 'text-')} />
                    Threat Analysis
                 </div>
                 <div className="bg-white/5 p-4 border border-white/10 space-y-3 font-mono text-sm">
                    <div className="flex justify-between items-center">
                       <span className="text-zzz-grey">THREAT_LEVEL:</span>
                       <span className={`${textColor} font-bold`}>{project.lore.threatLevel}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-zzz-grey">CLEARANCE:</span>
                       <span className="text-white">{project.lore.clearance}</span>
                    </div>
                     <div className="w-full h-px bg-white/10 my-2"></div>
                     <div className="grid grid-cols-2 gap-2 text-xs">
                        {Object.entries(project.lore.metrics).map(([key, val]) => (
                           <div key={key} className="bg-black/40 p-2 border border-white/5">
                              <div className="text-zzz-grey mb-1 uppercase">{key}</div>
                              <div className="text-white font-bold">{val}</div>
                           </div>
                        ))}
                     </div>
                 </div>
              </div>

              {/* Action Modules */}
               <div className="mt-auto grid grid-cols-2 gap-4">
                 <a
                   href={project.liveUrl ?? '#'}
                   target={project.liveUrl ? "_blank" : undefined}
                   rel={project.liveUrl ? "noreferrer" : undefined}
                   className={`flex items-center justify-center gap-2 py-4 bg-white text-black font-display font-bold text-lg uppercase hover:bg-${project.color.split('-')[1]}-400 hover:scale-[1.02] transition-all ${project.liveUrl ? '' : 'opacity-50 pointer-events-none'}`}
                 >
                    <ExternalLink size={20} />
                    Deploy
                 </a>
                 <a
                   href={project.sourceUrl ?? '#'}
                   target={project.sourceUrl ? "_blank" : undefined}
                   rel={project.sourceUrl ? "noreferrer" : undefined}
                   className={`flex items-center justify-center gap-2 py-4 border-2 border-white/20 text-white font-display font-bold text-lg uppercase hover:bg-white/10 hover:border-white transition-all ${project.sourceUrl ? '' : 'opacity-50 pointer-events-none'}`}
                 >
                    <Github size={20} />
                    Source
                 </a>
               </div>
           </div>

           {/* Right Col: Details (7 cols) */}
           <div className="lg:col-span-7 p-8 space-y-8 bg-gradient-to-br from-transparent to-black/40">
              <div>
                 <h2 className={`font-display text-5xl md:text-6xl font-bold uppercase leading-[0.9] mb-4 ${textColor}`}>
                    {project.title.replace('PROJECT: ', '')}
                 </h2>
                 <p className="font-mono text-lg text-white border-l-4 border-white/20 pl-4 py-1">
                    {project.subtitle}
                 </p>
              </div>

              <div className="prose prose-invert max-w-none">
                 <p className="text-xl text-zzz-grey font-light leading-relaxed">
                    {project.desc}
                 </p>
              </div>

              {/* Objectives List */}
              <div className="space-y-4">
                 <div className="flex items-center gap-2 text-white font-display text-xl uppercase tracking-wider">
                    <Crosshair size={20} className={textColor.replace('text-', 'text-opacity-80 text-')} />
                    Mission Objectives
                 </div>
                 <div className="grid gap-3">
                    {project.lore.objectives.map((obj, i) => (
                       <div key={i} className="flex items-start gap-4 p-3 bg-white/5 border border-white/5 hover:border-white/20 transition-colors group">
                          <span className={`${textColor} font-mono mt-0.5`}>0{i+1}</span>
                          <span className="text-zzz-grey group-hover:text-white transition-colors">{obj}</span>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Tech Stack aka "Loadout" */}
              <div className="space-y-4">
                 <div className="flex items-center gap-2 text-white font-display text-xl uppercase tracking-wider">
                    <Cpu size={20} className={textColor.replace('text-', 'text-opacity-80 text-')} />
                    Equipped Modules
                 </div>
                 <div className="flex flex-wrap gap-3">
                    {project.lore.modules.map((mod, i) => (
                       <div key={i} className={`flex items-center gap-2 px-4 py-2 border ${borderColor} bg-black/40 font-mono text-sm uppercase text-white hover:bg-white/10 transition-colors`}>
                          <div className={`w-1.5 h-1.5 ${project.lore.bg || 'bg-white'}`}></div>
                          {mod}
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
        
        {/* Footer Warning */}
        <div className="bg-zzz-yellow text-black px-6 py-2 font-mono text-xs font-bold uppercase overflow-hidden whitespace-nowrap">
           <div className="animate-marquee inline-block">
              WARNING: UNAUTHORIZED REPLICATION OF CODEBASE IS A CLASS A VIOLATION // CONTACT SECTOR ADMINISTRATOR FOR ACCESS RIGHT // KEEP IT COOL //
           </div>
        </div>

      </div>
    </div>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const [isClosingSkills, setIsClosingSkills] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isClosingProject, setIsClosingProject] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClosingImage, setIsClosingImage] = useState(false);

  React.useEffect(() => {
    if (isSkillsOpen) {
      requestAnimationFrame(() => setIsSkillsVisible(true));
    } else {
      setIsSkillsVisible(false);
    }
  }, [isSkillsOpen]);

  React.useEffect(() => {
    const shouldLock = Boolean(selectedProject) || isSkillsOpen || isClosingSkills || isClosingProject || Boolean(selectedImage) || isClosingImage;
    document.body.style.overflow = shouldLock ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, isSkillsOpen, isClosingSkills, isClosingProject, selectedImage, isClosingImage]);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setIsClosingProject(false);
  };

  const handleCloseProject = () => {
    setIsClosingProject(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosingProject(false);
    }, 300); // Duration matches CSS transition
  };

  const handleOpenImage = (image) => {
    setSelectedImage(image);
    setIsClosingImage(false);
  };

  const handleCloseImage = () => {
    setIsClosingImage(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosingImage(false);
    }, 300); // Duration matches CSS transition
  };

  const handleOpenSkills = () => {
    setIsSkillsOpen(true);
    setIsClosingSkills(false);
  };

  const handleCloseSkills = () => {
    setIsClosingSkills(true);
    setIsSkillsVisible(false);
    setTimeout(() => {
      setIsSkillsOpen(false);
      setIsClosingSkills(false);
    }, 300); // Duration matches CSS transition
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLink = ({ id, label }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`px-5 py-1 font-display uppercase tracking-widest text-base transition-all duration-300 transform border-l-4 ${
        activeSection === id
          ? 'border-zzz-green text-zzz-green bg-white/5'
          : 'border-transparent text-zzz-grey hover:text-white hover:border-zzz-orange hover:pl-8'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-zzz-black text-white font-body selection:bg-zzz-green selection:text-black overflow-hidden relative">
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] invert filter contrast-150 brightness-100"></div>
      
      {/* Skills Modal */}
      {(isSkillsOpen || isClosingSkills) && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300 ease-out
          ${isClosingSkills ? 'opacity-0 scale-95 pointer-events-none' : isSkillsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
        >
           <div className="bg-zzz-dark border-2 border-white/20 w-full max-w-5xl h-[85vh] relative flex flex-col shadow-2xl overflow-hidden clip-angle">
              {/* Modal Header */}
              <div className="bg-[#D2F500] text-black px-6 py-4 flex justify-between items-center border-b-2 border-black/10 shrink-0">
                 <div className="flex items-center gap-4">
                    <h2 className="font-display text-4xl font-bold uppercase tracking-tight">System Capabilities Loop</h2>
                    <span className="bg-black text-white px-2 py-0.5 font-mono text-xs uppercase">All Skills</span>
                 </div>
                 <button 
                  onClick={handleCloseSkills}
                  className="bg-black text-white p-2 hover:bg-white hover:text-black transition-colors"
                 >
                   <X size={24} />
                 </button>
              </div>

               {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-8 relative">
                <div className="absolute top-0 right-0 w-64 h-full bg-stripes-black opacity-5 pointer-events-none"></div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                   <SkillCategory 
                     title="AI & LLM Architecture" 
                     icon={<Cpu className="text-[#D2F500]" />}
                     skills={[
                       "Large Language Models (LLMs)",
                       "Google Gemini / DeepSeek API",
                       "RAG Systems Architecture",
                       "Vector Memory Systems",
                       "Prompt Engineering",
                       "Context Management"
                     ]}
                     accent="border-[#D2F500]"
                   />
                   
                   <SkillCategory 
                     title="Agentic Development" 
                     icon={<Zap className="text-[#FF4D00]" />}
                     skills={[
                       "Autonomous Agents",
                       "Function Calling / Tools",
                       "Multi-Agent Workflows",
                       "Behavioral Modeling",
                       "Emotional AI Systems",
                       "Python Backend Logic"
                     ]}
                     accent="border-[#FF4D00]"
                   />

                   <SkillCategory 
                     title="App & Game Eng" 
                     icon={<Terminal className="text-[#00F0FF]" />}
                     skills={[
                       "Tauri (Rust Integration)",
                       "Minecraft Fabric (Java)",
                       "Electron (Legacy)",
                       "Desktop App Architecture",
                       "Modding APIs",
                       "Performance Optimization"
                     ]}
                     accent="border-[#00F0FF]"
                   />

                   <SkillCategory 
                     title="Programming Languages" 
                     icon={<Code2 className="text-zzz-orange" />}
                     skills={[
                       "C++",
                       "C#",
                       "Java",
                       "JavaScript",
                       "TypeScript",
                       "Python"
                     ]}
                     accent="border-zzz-orange"
                   />

                   <SkillCategory 
                     title="Web Technologies" 
                     icon={<Globe className="text-purple-500" />}
                     skills={[
                       "React / Vite",
                       "Tailwind CSS",
                       "Modern JavaScript (ES6+)",
                       "HTML5 / CSS3",
                       "Responsive Design",
                       "State Management"
                     ]}
                     accent="border-purple-500"
                   />

                   <SkillCategory 
                     title="Backend & Data" 
                     icon={<Database className="text-[#FFD600]" />}
                     skills={[
                       "Python (Flask/FastAPI)",
                       "Local LLM Hosting",
                       "WebSockets / Real-time",
                       "Data Structures & Algo",
                       "RESTful APIs",
                       "JSON / Data Parsing"
                     ]}
                     accent="border-[#FFD600]"
                   />

                   <SkillCategory 
                     title="Infrastructure & Ops" 
                     icon={<Network className="text-pink-500" />}
                     skills={[
                       "Linux / Unix Shell",
                       "Git Version Control",
                       "Hardware Assembly",
                       "System Diagnostics",
                       "Network Configuration",
                       "Home Lab Management"
                     ]}
                     accent="border-pink-500"
                   />

                   <SkillCategory 
                     title="Soft Skills" 
                     icon={<User className="text-zzz-cyan" />}
                     skills={[
                       "Adaptable / Fast Learner",
                       "Fast Typing (103 WPM peak, 70 WPM avg)",
                       "Fluent English (Written/Spoken)",
                       "Fluent Tagalog (Written/Spoken)",
                       "Dedicated to Role",
                       "Takes Criticism Well"
                     ]}
                     accent="border-zzz-cyan"
                   />
                </div>
              </div>

               {/* Modal Footer */}
              <div className="bg-black/40 border-t border-white/10 p-4 flex justify-between items-center shrink-0 text-zzz-grey font-mono text-xs">
                 <div>TOTAL CAPABILITIES LOADED: 36</div>
                 <div className="flex gap-4">
                    <span>STATUS: OPTIMIZED</span>
                    <span>SYNC: 100%</span>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        isClosing={isClosingProject}
        onClose={handleCloseProject} 
        onOpenImage={handleOpenImage}
      />

      {/* Image Viewer Modal */}
      <ImageViewerModal
        image={selectedImage}
        isClosing={isClosingImage}
        onClose={handleCloseImage}
      />

      {/* Decorative overlay lines */}
      <div className="fixed left-8 top-0 bottom-0 w-[1px] bg-white/10 z-0 hidden lg:block"></div>
      <div className="fixed right-8 top-0 bottom-0 w-[1px] bg-white/10 z-0 hidden lg:block"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-zzz-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex justify-between items-center h-16">
            <div className="font-display font-bold text-3xl text-white tracking-tighter italic">
              DEV<span className="text-zzz-green">.LOG</span>
            </div>
            
            <div className="hidden md:flex space-x-1 items-center bg-black/50 p-1 clip-angle-reverse">
              <NavLink id="home" label="Home" />
              <NavLink id="projects" label="Missions" />
              <NavLink id="skills" label="Loadout" />
              <NavLink id="about" label="Profile" />
              <NavLink id="contact" label="Comms" />
            </div>
            
            <div className="hidden lg:flex items-center gap-2 font-mono text-xs text-zzz-green">
              <span className="animate-pulse">● ONLINE</span>
              <span className="opacity-50">SYS.VER.3.0</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-16">
        
        {/* Hero Section */}
        <section id="home" className="min-h-[80vh] flex items-center relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[120%] bg-zzz-orange/10 -skew-x-12 blur-3xl rounded-full"></div>
          <div className="absolute left-10 bottom-10 font-display text-[20rem] leading-none text-white/5 select-none pointer-events-none">01</div>

          <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 bg-[#FFD600] text-black font-bold font-display tracking-widest text-base transform -skew-x-12 border-2 border-black">
                <span className="inline-block transform skew-x-12">AVAILABLE FOR HIRE</span>
              </div>
              
              <div className="relative">
                <h1 className="font-display text-6xl md:text-8xl font-bold uppercase leading-[0.85] tracking-tighter">
                  LEVEL UP <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-zzz-green to-white glitch-text" data-text="YOUR TECH">YOUR TECH</span>
                </h1>
                <div className="w-24 h-2 bg-zzz-orange mt-4"></div>
              </div>

              <div className="bg-black/40 border-l-4 border-zzz-green p-6 backdrop-blur-sm max-w-xl">
                <p className="text-lg text-zzz-grey font-light leading-relaxed">
                  <span className="text-zzz-green font-bold mr-2">{'>'}</span>
                  Name: <span className="text-white font-bold">Gerard Angelo A. Garcia</span>.
                  <br/>
                  <span className="text-zzz-green font-bold mr-2">{'>'}</span>
                  Target Roles: <span className="text-white">AI/ML Engineering Intern (LLM/Agents), Full‑Stack Web Dev Intern, Software Engineer Intern (Automation/AI Integration)</span>.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group relative px-6 py-3 bg-[#D2F500] text-black font-display text-xl font-bold tracking-wider hover:bg-white transition-colors clip-angle"
                >
                  <span className="relative z-10">INITIATE_CONTACT</span>
                  <div className="absolute inset-0 bg-white translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform bg-opacity-30"></div>
                </button>
                
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 border-2 border-white/20 text-white font-display text-xl font-bold tracking-wider hover:border-zzz-orange hover:text-zzz-orange transition-colors uppercase bg-black/50"
                >
                  View_Logs
                </button>
              </div>
            </div>
            
            {/* Hero Image / Graphic */}
            <div className="relative hidden lg:block md:scale-95">
              <div className="relative z-10 p-2 border-2 border-zzz-green/30 bg-black/20 backdrop-blur-sm transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
                 <img 
                  src={pic1}
                  alt="Cyberpunk workspace" 
                  className="w-full grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Decorative UI elements on image */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-stripes-yellow border-2 border-black"></div>
                <div className="absolute bottom-4 left-4 bg-black text-zzz-green font-mono text-xs px-2 py-1 border border-zzz-green">
                  IMG_SRC: WORKSTATION_01
                </div>
              </div>
              
              <div className="absolute inset-0 border-2 border-zzz-orange transform -rotate-2 scale-105 z-0 opacity-40"></div>
            </div>
          </div>
        </section>

        {/* Stats / About Bar */}
        <section className="bg-[#FF4D00] text-black py-3 border-y-4 border-black font-display tracking-widest overflow-hidden">
          <div className="flex justify-around items-center text-lg md:text-2xl font-bold whitespace-nowrap animate-pulse-fast">
             <span>// FULL STACK</span>
             <span className="text-white">★</span>
             <span>// HARDWARE</span>
             <span className="text-white">★</span>
             <span>// AI INTEGRATION</span>
             <span className="text-white">★</span>
             <span>// LINUX SYSTEMS</span>
             <span className="text-white">★</span>
             <span>// NETWORKING</span>
          </div>
        </section>

        {/* Projects Section - "Missions" */}
        <section id="projects" className="py-16 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-right text-5xl md:text-7xl font-display font-bold text-white uppercase mb-4 leading-none">
              Mission <span className="text-zzz-cyan">Logs</span>
            </h2>
            <div className="h-1 w-full bg-white/20 mb-10 flex justify-end">
               <div className="w-1/3 h-full bg-zzz-cyan"></div>
            </div>

            <div className="space-y-20">
               {PROJECTS.map((project) => (
              <div key={project.id} className="group relative grid lg:grid-cols-5 gap-8 items-center">
                 <div className="lg:col-span-3 relative order-2 lg:order-1">
                    <div className="relative overflow-hidden clip-angle border-2 border-white/10 group-hover:border-white/50 transition-colors h-[320px] group">
                      <div className={`absolute inset-0 ${project.color.split(' ')[0].replace('border-', 'bg-')}/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                      <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                      {project.logo && (
                        <div className="absolute top-3 left-3 bg-black/70 border border-white/20 p-1">
                          <img src={project.logo} alt={`${project.title} logo`} className="w-8 h-8 object-contain" />
                        </div>
                      )}
                      
                      <div className="absolute bottom-0 left-0 bg-black/80 px-4 py-2 flex gap-4 z-20">
                         <a
                           href={project.sourceUrl ?? '#'}
                           target={project.sourceUrl ? "_blank" : undefined}
                           rel={project.sourceUrl ? "noreferrer" : undefined}
                           className={`${project.sourceUrl ? '' : 'opacity-40 pointer-events-none'}`}
                           title="View Source"
                         >
                           <Github className="w-5 h-5 text-white hover:text-zzz-green" />
                         </a>
                         <a
                           href={project.liveUrl ?? '#'}
                           target={project.liveUrl ? "_blank" : undefined}
                           rel={project.liveUrl ? "noreferrer" : undefined}
                           className={`${project.liveUrl ? '' : 'opacity-40 pointer-events-none'}`}
                           title="View Live"
                         >
                           <ExternalLink className="w-5 h-5 text-white hover:text-zzz-green" />
                         </a>
                         <button onClick={() => handleOpenProject(project)} className="group/btn relative" title="Expand Mission Data">
                            <div className="absolute -inset-2 bg-white/20 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                            <Maximize2 className="w-5 h-5 text-white group-hover/btn:text-zzz-green transition-colors relative z-10" />
                         </button>
                      </div>
                    </div>
                 </div>
                 
                 <div className="lg:col-span-2 order-1 lg:order-2 space-y-4">
                    <div className={`font-display text-7xl font-bold opacity-20 absolute -top-10 -right-10 lg:static lg:opacity-100 leading-none ${project.color.split(' ')[1]}`}>
                      {project.id}
                    </div>
                    <h3 className={`font-display text-3xl font-bold uppercase tracking-tight ${project.color.split(' ')[1]}`}>
                      {project.title}
                    </h3>
                    <div className="text-lg font-bold text-white uppercase bg-white/10 inline-block px-2">
                       {project.subtitle}
                    </div>
                    <p className="text-zzz-grey font-light leading-relaxed border-l-2 border-white/20 pl-4">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tags.map(tag => (
                        <div key={tag} className={`px-2 py-1 border ${project.color} font-mono text-xs uppercase hover:bg-white/10 cursor-default`}>
                          [{tag}]
                        </div>
                      ))}
                    </div>
                 </div>
              </div>
            ))}
            </div>
          </div>
        </section>

        {/* Skills Section - The "Loadout" */}
        <section id="skills" className="py-16 bg-zinc-900/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-stripes-black opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-6">
             <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
              <div>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase mb-2">
                    Tech <span className="text-stroke text-transparent stroke-white" style={{WebkitTextStroke: "1px #D2F500"}}>Loadout</span>
                 </h2>
                 <p className="font-mono text-zzz-green text-sm md:text-base tracking-widest">// SYSTEM_CAPABILITIES_OVERVIEW</p>
              </div>
              
              <button 
                onClick={handleOpenSkills}
               className="group flex items-center gap-3 bg-white/5 border border-white/20 px-5 py-3 hover:bg-zzz-green hover:text-black hover:border-zzz-green transition-all"
              >
                <span className="font-display uppercase text-lg tracking-wide">Expand Loadout</span>
                  <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </button>
            </div>
            
            {/* Preview Grid */}
            <div className="grid md:grid-cols-3 gap-6 opacity-80 hover:opacity-100 transition-opacity">
               <SkillBlock 
                 icon={<Cpu className="text-[#D2F500]" />} 
                 title="AI Systems" 
                 color="border-[#D2F500]"
                 textColor="text-white"
                 skills={['LLM Architecture', 'Agents', 'RAG', 'Prompt Eng']} 
               />
               <SkillBlock 
                 icon={<Terminal className="text-[#FF4D00]" />} 
                 title="Engineering" 
                 color="border-[#FF4D00]"
                 textColor="text-white"
                 skills={['C++', 'C#', 'Java', 'Python']} 
               />
               <SkillBlock 
                 icon={<Database className="text-[#00F0FF]" />} 
                 title="Data / Ops" 
                 color="border-[#00F0FF]"
                 textColor="text-white"
                 skills={['Vector DBs', 'Linux', 'Git', 'Hardware']} 
               />
            </div>
            
            <div className="mt-8 text-center">
               <p className="font-mono text-xs text-zzz-grey uppercase tracking-widest animate-pulse">Click "Expand Loadout" for full system specs</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end gap-4 mb-10 border-b border-zzz-grey/20 pb-3">
              <h2 className="text-5xl md:text-7xl font-display font-bold text-white uppercase leading-none">
                Profile <span className="text-zzz-orange">.Dat</span>
              </h2>
              <span className="font-mono text-zzz-grey mb-3 hidden md:inline-block">/ USER_ID: G_A_GARCIA</span>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="tech-border p-6 bg-white/5 backdrop-blur-sm">
                  <h3 className="text-xl font-display text-zzz-green mb-3 uppercase tracking-wider">System Overview</h3>
                  <p className="text-base text-zzz-grey leading-relaxed">
                    Operative is a 3rd Year Bachelor of Science in Information Technology student proficient in maintaining physical hardware and constructing complex digital architectures.
                    <br/><br/>
                    Capabilities include full-stack web development, AI model integration, and cross-platform application deployment. Actively seeking a 300‑hour OJT internship; based in Mandaluyong City and willing to commute. Ready for deployment at your most convenient time.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-zzz-dark border border-zzz-grey/20 p-4">
                    <div className="text-zzz-orange mb-2"><GraduationCap /></div>
                    <div className="font-display text-2xl">EDUCATION</div>
                    <div className="text-sm text-zzz-grey font-mono mt-1">Bachelor of Science in Information Technology — 3rd Year</div>
                  </div>
                  <div className="bg-zzz-dark border border-zzz-grey/20 p-4">
                    <div className="text-zzz-cyan mb-2"><Briefcase /></div>
                    <div className="font-display text-2xl">EXP</div>
                    <div className="text-sm text-zzz-grey font-mono mt-1">Full Stack Freelance</div>
                  </div>
                </div>
              </div>

               {/* "Card" visual for about image */}
               <div className="relative group">
                 <div className="absolute inset-0 bg-zzz-green skew-y-3 translate-x-4 translate-y-4"></div>
                 <div className="relative bg-zzz-black border-2 border-white p-2">
                   <div className="aspect-[4/5] bg-zzz-dark overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                     <img 
                       src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2487&auto=format&fit=crop" 
                       alt="Profile" 
                       className="object-cover w-full h-full"
                     />
                     <div className="absolute bottom-0 w-full bg-black/80 p-2 font-mono text-xs text-white">
                       STATUS: ONLINE
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </section>


        {/* Contact Section */}
          <section id="contact" className="py-16 bg-zzz-green text-black relative">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-stripes-black opacity-10"></div>
           
            <div className="max-w-6xl mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
               <div className="lg:col-span-2 bg-black text-white p-6 md:p-10 clip-angle shadow-[16px_16px_0px_0px_rgba(0,0,0,0.2)]">
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="space-y-6">
                    <h2 className="font-display text-4xl font-bold uppercase">Begin Transmission</h2>
                    <p className="text-zzz-grey">Target Roles: AI/ML Engineering Intern (LLM/Agents), Full‑Stack Web Dev Intern, Software Engineer Intern (Automation/AI Integration).</p>
                    <p className="text-zzz-grey text-sm">Seeking a 300‑hour OJT internship. Based in Mandaluyong City, willing to commute.</p>
                        
                        <div className="space-y-4 font-mono text-sm pt-8 w-full max-w-xl mx-auto">
                         <a
                          href="mailto:gerardgarcia207@gmail.com"
                          className="flex items-center justify-center gap-4 p-3 border border-white/20 hover:bg-white/5 transition-colors group"
                         >
                           <Mail className="text-zzz-green group-hover:text-white" />
                           <span>gerardgarcia207@gmail.com</span>
                         </a>
                         <a
                          href="tel:+639625046887"
                          className="flex items-center justify-center gap-4 p-3 border border-white/20 hover:bg-white/5 transition-colors group"
                         >
                           <Phone className="text-zzz-orange group-hover:text-white" />
                           <span>+63 962 504 6887</span>
                         </a>
                         <a
                          href="https://linkedin.com/in/garciashunko"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-4 p-3 border border-white/20 hover:bg-white/5 transition-colors group"
                         >
                          <Linkedin className="text-zzz-cyan group-hover:text-white" />
                           <span>linkedin.com/in/garciashunko</span>
                         </a>
                         <a
                          href="https://github.com/Erionoir"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-4 p-3 border border-white/20 hover:bg-white/5 transition-colors group"
                         >
                           <Github className="text-purple-400 group-hover:text-white" />
                           <span>github.com/Erionoir</span>
                         </a>
                      </div>
                  </div>
                </div>
               </div>

              </div>
              
              <div className="mt-8 text-center font-mono text-xs font-bold uppercase tracking-widest">
                 © 2024 Gerard Angelo A. Garcia // END OF LINE
              </div>
           </div>
        </section>

      </main>
    </div>
  );
}

const SkillBlock = ({ icon, title, skills, color, textColor = "text-white" }) => (
  <div className={`border-2 ${color} bg-black/40 p-1 clip-angle-reverse transition-transform hover:-translate-y-2 duration-300`}>
    <div className="bg-white/5 h-full p-6 backdrop-blur-sm">
       <div className={`flex justify-between items-start mb-6 ${textColor}`}>
          <div className="p-2 bg-white/10 rounded-sm">{icon}</div>
          <Zap size={16} className={`${color.replace('border-','text-')} opacity-80`} />
       </div>
       <h3 className={`font-display text-3xl font-bold uppercase mb-4 ${textColor}`}>{title}</h3>
       <div className="space-y-2">
         {skills.map((skill, index) => (
           <div key={index} className={`font-mono text-sm font-bold uppercase flex items-center gap-2 ${textColor} opacity-80`}>
             <span className={color.replace('border-','text-')}>{'>'}</span>
             {skill}
           </div>
         ))}
       </div>
    </div>
  </div>
);

const SkillCategory = ({ title, icon, skills, accent }) => (
  <div className={`bg-black/60 border-l-4 ${accent} p-6 hover:bg-white/5 transition-colors group`}>
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-white/5 rounded-sm group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="font-display text-2xl uppercase tracking-wide text-white group-hover:text-zzz-green transition-colors">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
         <li key={index} className="font-mono text-sm text-zzz-grey flex items-center gap-3 group-hover:text-white transition-colors">
            <span className={`w-1.5 h-1.5 ${accent.replace('border-', 'bg-')}`}></span>
            {skill}
         </li>
      ))}
    </ul>
  </div>
);

export default App;