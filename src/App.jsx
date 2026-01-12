import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Database, Globe, Briefcase, GraduationCap, User, Cpu, Network, Zap, X, ChevronRight } from 'lucide-react';
import pic1 from './assets/pic1.jpg';
import LinkedInBadge from './LinkedInBadge';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

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
      className={`px-6 py-1 font-display uppercase tracking-widest text-lg transition-all duration-300 transform border-l-4 ${
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
      {isSkillsOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
           <div className="bg-zzz-dark border-2 border-white/20 w-full max-w-5xl h-[85vh] relative flex flex-col shadow-2xl overflow-hidden clip-angle">
              {/* Modal Header */}
              <div className="bg-[#D2F500] text-black px-6 py-4 flex justify-between items-center border-b-2 border-black/10 shrink-0">
                 <div className="flex items-center gap-4">
                    <h2 className="font-display text-4xl font-bold uppercase tracking-tight">System Capabilities Loop</h2>
                    <span className="bg-black text-white px-2 py-0.5 font-mono text-xs uppercase">All Skills</span>
                 </div>
                 <button 
                  onClick={() => setIsSkillsOpen(false)}
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

      {/* Decorative overlay lines */}
      <div className="fixed left-8 top-0 bottom-0 w-[1px] bg-white/10 z-0 hidden lg:block"></div>
      <div className="fixed right-8 top-0 bottom-0 w-[1px] bg-white/10 z-0 hidden lg:block"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-zzz-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="font-display font-bold text-4xl text-white tracking-tighter italic">
              DEV<span className="text-zzz-green">.LOG</span>
            </div>
            
            <div className="hidden md:flex space-x-1 items-center bg-black/50 p-1 clip-angle-reverse">
              <NavLink id="home" label="Home" />
              <NavLink id="about" label="Profile" />
              <NavLink id="projects" label="Missions" />
              <NavLink id="skills" label="Loadout" />
              <NavLink id="contact" label="Comms" />
            </div>
            
            <div className="hidden lg:flex items-center gap-2 font-mono text-xs text-zzz-green">
              <span className="animate-pulse">● ONLINE</span>
              <span className="opacity-50">SYS.VER.3.0</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-20">
        
        {/* Hero Section */}
        <section id="home" className="min-h-[90vh] flex items-center relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[120%] bg-zzz-orange/10 -skew-x-12 blur-3xl rounded-full"></div>
          <div className="absolute left-10 bottom-10 font-display text-[20rem] leading-none text-white/5 select-none pointer-events-none">01</div>

          <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 bg-[#FFD600] text-black font-bold font-display tracking-widest text-lg transform -skew-x-12 border-2 border-black">
                <span className="inline-block transform skew-x-12">AVAILABLE FOR HIRE</span>
              </div>
              
              <div className="relative">
                <h1 className="font-display text-7xl md:text-9xl font-bold uppercase leading-[0.8] tracking-tighter">
                  LEVEL UP <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-zzz-green to-white glitch-text" data-text="YOUR TECH">YOUR TECH</span>
                </h1>
                <div className="w-24 h-2 bg-zzz-orange mt-4"></div>
              </div>

              <div className="bg-black/40 border-l-4 border-zzz-green p-6 backdrop-blur-sm max-w-xl">
                <p className="text-xl text-zzz-grey font-light leading-relaxed">
                  <span className="text-zzz-green font-bold mr-2">{'>'}</span>
                  Start Game as <span className="text-white font-bold">Gerard Angelo A. Garcia</span>. 
                  <br/>
                  <span className="text-zzz-green font-bold mr-2">{'>'}</span>
                  Class: <span className="text-white">AI Architect / Agentic Systems Developer</span>.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group relative px-8 py-4 bg-[#D2F500] text-black font-display text-2xl font-bold tracking-wider hover:bg-white transition-colors clip-angle"
                >
                  <span className="relative z-10">INITIATE_CONTACT</span>
                  <div className="absolute inset-0 bg-white translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform bg-opacity-30"></div>
                </button>
                
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 border-2 border-white/20 text-white font-display text-2xl font-bold tracking-wider hover:border-zzz-orange hover:text-zzz-orange transition-colors uppercase bg-black/50"
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
        <section className="bg-[#FF4D00] text-black py-4 border-y-4 border-black font-display tracking-widest overflow-hidden">
          <div className="flex justify-around items-center text-xl md:text-3xl font-bold whitespace-nowrap animate-pulse-fast">
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

        {/* About Section */}
        <section id="about" className="py-24 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end gap-4 mb-16 border-b border-zzz-grey/20 pb-4">
              <h2 className="text-6xl md:text-8xl font-display font-bold text-white uppercase leading-none">
                Profile <span className="text-zzz-orange">.Dat</span>
              </h2>
              <span className="font-mono text-zzz-grey mb-3 hidden md:inline-block">/ USER_ID: G_A_GARCIA</span>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="tech-border p-8 bg-white/5 backdrop-blur-sm">
                  <h3 className="text-2xl font-display text-zzz-green mb-4 uppercase tracking-wider">System Overview</h3>
                  <p className="text-lg text-zzz-grey leading-relaxed">
                    Operative is a 3rd Year IT Specialist proficient in maintaining physical hardware and constructing complex digital architectures. 
                    <br/><br/>
                    Capabilities include full-stack web development, AI model integration, and cross-platform application deployment. Ready for deployment in Summer 2025.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-zzz-dark border border-zzz-grey/20 p-4">
                    <div className="text-zzz-orange mb-2"><GraduationCap /></div>
                    <div className="font-display text-2xl">EDUCATION</div>
                    <div className="text-sm text-zzz-grey font-mono mt-1">B.Sc. IT (Lvl 3)</div>
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

        {/* Skills Section - The "Loadout" */}
        <section id="skills" className="py-24 bg-zinc-900/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-stripes-black opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-6">
             <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                 <h2 className="text-5xl md:text-7xl font-display font-bold text-white uppercase mb-2">
                    Tech <span className="text-stroke text-transparent stroke-white" style={{WebkitTextStroke: "1px #D2F500"}}>Loadout</span>
                 </h2>
                 <p className="font-mono text-zzz-green text-sm md:text-base tracking-widest">// SYSTEM_CAPABILITIES_OVERVIEW</p>
              </div>
              
              <button 
                onClick={() => setIsSkillsOpen(true)}
                className="group flex items-center gap-3 bg-white/5 border border-white/20 px-6 py-4 hover:bg-zzz-green hover:text-black hover:border-zzz-green transition-all"
              >
                  <span className="font-display uppercase text-xl tracking-wide">Expand Loadout</span>
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
                 skills={['Python', 'Rust / Tauri', 'Java', 'Full Stack JS']} 
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

        {/* Projects Section - "Missions" */}
        <section id="projects" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-right text-6xl md:text-8xl font-display font-bold text-white uppercase mb-4 leading-none">
              Mission <span className="text-zzz-cyan">Logs</span>
            </h2>
            <div className="h-1 w-full bg-white/20 mb-16 flex justify-end">
               <div className="w-1/3 h-full bg-zzz-cyan"></div>
            </div>

            <div className="space-y-24">
               {[
              {
                id: "01",
                title: "PROJECT: RTU-NX",
                subtitle: "AI-Powered Study Environment",
                desc: "A comprehensive desktop study application built with Tauri 2. Features 'Nyx', an intelligent AI tutor utilizing Gemini & DeepSeek to guide learning through flashcards, active recall, and Socratic tutoring.",
                tags: ["Tauri / Rust", "Gemini AI", "DeepSeek", "Education"],
                img: "./assets/nyx.png",
                color: "border-zzz-green text-zzz-green"
              },
              {
                id: "02",
                title: "PROJECT: AYA AI",
                subtitle: "Emotional AI Companion",
                desc: "Sophisticated Minecraft companion mod with a distinct personality. Powered by a local Python backend utilizing LLMs for natural conversation, persistent memory (HibikiCore), and dynamic emotional modeling (KokoroCore).",
                tags: ["Python", "Local LLM", "Java / Fabric", "Agentic AI"],
                img: "https://images.unsplash.com/photo-1614726365723-49cfae96a604?q=80&w=2574&auto=format&fit=crop",
                 color: "border-zzz-orange text-zzz-orange"
              },
              {
                id: "03",
                title: "ARCANIST BUILDER",
                subtitle: "Reverse: 1999 Strategy Tool",
                desc: "Advanced team composition engine using Google Gemini AI. Analyzes complex game meta, character synergies, and damage types to generate optimized team builds with detailed reasoning.",
                tags: ["Gemini AI", "Vanilla JS", "Prompt Engineering"],
                img: "./assets/arcanist.png",
                 color: "border-zzz-yellow text-zzz-yellow"
              }
            ].map((project) => (
              <div key={project.id} className="group relative grid lg:grid-cols-5 gap-8 items-center">
                 <div className="lg:col-span-3 relative order-2 lg:order-1">
                    <div className="relative overflow-hidden clip-angle border-2 border-white/10 group-hover:border-white/50 transition-colors h-[400px]">
                      <div className="absolute inset-0 bg-zzz-green/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                      
                      <div className="absolute bottom-0 left-0 bg-black/80 px-4 py-2 flex gap-4 z-20">
                         <Github className="w-5 h-5 text-white hover:text-zzz-green cursor-pointer" />
                         <ExternalLink className="w-5 h-5 text-white hover:text-zzz-green cursor-pointer" />
                      </div>
                    </div>
                 </div>
                 
                 <div className="lg:col-span-2 order-1 lg:order-2 space-y-4">
                    <div className={`font-display text-8xl font-bold opacity-20 absolute -top-10 -right-10 lg:static lg:opacity-100 leading-none ${project.color.split(' ')[1]}`}>
                      {project.id}
                    </div>
                    <h3 className={`font-display text-4xl font-bold uppercase tracking-tight ${project.color.split(' ')[1]}`}>
                      {project.title}
                    </h3>
                    <div className="text-xl font-bold text-white uppercase bg-white/10 inline-block px-2">
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

        {/* Contact Section */}
          <section id="contact" className="py-24 bg-zzz-green text-black relative">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-stripes-black opacity-10"></div>
           
            <div className="max-w-6xl mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-3 gap-8 items-start">
               <div className="lg:col-span-2 bg-black text-white p-8 md:p-12 clip-angle shadow-[20px_20px_0px_0px_rgba(0,0,0,0.2)]">
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="flex-1 space-y-6">
                    <h2 className="font-display text-5xl font-bold uppercase">Begin Transmission</h2>
                    <p className="text-zzz-grey">Target: AI & Agentic Roles.</p>
                        
                    <div className="space-y-4 font-mono text-sm pt-8">
                         <div className="flex items-center gap-4 p-3 border border-white/20 hover:bg-white/5 transition-colors cursor-pointer group">
                            <Mail className="text-zzz-green group-hover:text-white" />
                            <span>gerardgarcia207@gmail.com</span>
                         </div>
                         <div className="flex items-center gap-4 p-3 border border-white/20 hover:bg-white/5 transition-colors cursor-pointer group">
                           <Linkedin className="text-zzz-cyan group-hover:text-white" />
                            <span>linkedin.com/in/garciashunko</span>
                         </div>
                         <div className="flex items-center gap-4 p-3 border border-white/20 hover:bg-white/5 transition-colors cursor-pointer group">
                            <Github className="text-purple-400 group-hover:text-white" />
                            <span>github.com/Erionoir</span>
                         </div>
                    </div>
                  </div>
                     
                  <div className="flex-1">
                    <form className="space-y-4">
                      <div>
                        <label className="font-mono text-xs text-zzz-green uppercase mb-1 block">UserID</label>
                        <input type="text" className="w-full bg-white/5 border-b-2 border-white/20 focus:border-zzz-green outline-none py-2 text-white transition-colors" placeholder="ENTER NAME" />
                      </div>
                      <div>
                        <label className="font-mono text-xs text-zzz-green uppercase mb-1 block">Comms Channel</label>
                        <input type="email" className="w-full bg-white/5 border-b-2 border-white/20 focus:border-zzz-green outline-none py-2 text-white transition-colors" placeholder="ENTER EMAIL" />
                      </div>
                      <div>
                        <label className="font-mono text-xs text-zzz-green uppercase mb-1 block">Data Packet</label>
                        <textarea rows="3" className="w-full bg-white/5 border-b-2 border-white/20 focus:border-zzz-green outline-none py-2 text-white transition-colors resize-none" placeholder="ENTER MESSAGE"></textarea>
                      </div>
                      <button className="w-full bg-[#D2F500] text-black font-display font-bold text-xl uppercase py-3 hover:bg-white transition-colors mt-4">
                        Send Transmission
                      </button>
                    </form>
                  </div>
                </div>
               </div>

               <div className="bg-black text-white p-6 border border-white/20 clip-angle shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)]">
                <div className="font-display text-3xl font-bold uppercase">LinkedIn</div>
                <div className="font-mono text-xs text-zzz-grey uppercase tracking-widest mt-1">/ PROFILE_BADGE</div>
                  
                <div className="mt-6">
                  <LinkedInBadge />
                </div>

                <div className="mt-6 font-mono text-xs text-zzz-grey">
                  If the badge doesn’t load, open: <a className="underline text-white hover:text-zzz-green" href="https://ph.linkedin.com/in/garciashunko" target="_blank" rel="noreferrer">linkedin.com/in/garciashunko</a>
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