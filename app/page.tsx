'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";

// Section components
const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen p-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-neon-blue animate-glow mb-6 font-mono tracking-wider">ABOUT</h2>
        
        <div className="cyber-panel relative overflow-hidden mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-40 h-40 overflow-hidden rounded-md neon-border">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 mix-blend-overlay"></div>
                <Image 
                  src="/profile-placeholder.jpg" 
                  alt="Cypher" 
                  width={160} 
                  height={160}
                  className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl mb-4 font-mono tracking-wide">CYPHER<span className="text-neon-blue">.</span></h3>
              
              <p className="mb-4 font-light leading-relaxed">
                An Electronic and Computer Engineer with expertise in cybersecurity and blockchain technologies. 
                I build secure, scalable, and innovative web applications that push the boundaries 
                of what's possible in the digital realm.
              </p>
              
              <p className="mb-6 font-light leading-relaxed">
                With a background in computer science and a passion for emerging tech, 
                I bridge the gap between cutting-edge theory and practical implementation.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-cyber-navy/50 border border-neon-blue/30 rounded-sm text-xs font-mono">
                  TYPESCRIPT
                </span>
                <span className="px-3 py-1 bg-cyber-navy/50 border border-neon-blue/30 rounded-sm text-xs font-mono">
                  REACT
                </span>
                <span className="px-3 py-1 bg-cyber-navy/50 border border-neon-blue/30 rounded-sm text-xs font-mono">
                  NODE.JS
                </span>
                <span className="px-3 py-1 bg-cyber-navy/50 border border-neon-blue/30 rounded-sm text-xs font-mono">
                  WEB3
                </span>
                <span className="px-3 py-1 bg-cyber-navy/50 border border-neon-blue/30 rounded-sm text-xs font-mono">
                  CYBERSECURITY
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="cyber-panel h-full">
            <h4 className="text-neon-blue mb-3 font-mono">MISSION</h4>
            <p className="text-sm leading-relaxed">
              To create secure, scalable applications that solve real-world problems and push the boundaries of what's 
              possible with modern web technologies.
            </p>
          </div>
          
          <div className="cyber-panel h-full">
            <h4 className="text-neon-blue mb-3 font-mono">APPROACH</h4>
            <p className="text-sm leading-relaxed">
              I combine technical expertise with creative problem-solving, maintaining a security-first mindset 
              throughout the development process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen p-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-neon-blue animate-glow mb-6 font-mono tracking-wider">EXPERIENCE</h2>
        
        <div className="space-y-8">
          {/* Experience Item 1 */}
          <div className="cyber-panel relative">
            <div className="absolute top-0 right-0 bg-cyber-navy px-2 py-1 text-xs font-mono border-l border-b border-neon-blue/30">
              2022 - PRESENT
            </div>

            <h3 className="text-xl mb-1 font-mono">JKUAT</h3>
            <h4 className="text-neon-blue text-sm mb-4">CYBER SYSTEMS INC</h4>
            
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-neon-blue mr-2">›</span>
                <span>Lead development of secure blockchain applications and smart contract integrations</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-blue mr-2">›</span>
                <span>Implemented zero-knowledge proof systems for private transactions</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-blue mr-2">›</span>
                <span>Architected scalable back-end systems handling 1M+ daily users</span>
              </li>
            </ul>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-cyber-navy/30 text-xs">React</span>
              <span className="px-2 py-1 bg-cyber-navy/30 text-xs">TypeScript</span>
              <span className="px-2 py-1 bg-cyber-navy/30 text-xs">Solidity</span>
              <span className="px-2 py-1 bg-cyber-navy/30 text-xs">Node.js</span>
            </div>
          </div>
          
          {/* Experience Item 2 */}
          <div className="cyber-panel relative">
            <div className="absolute top-0 right-0 bg-cyber-navy px-2 py-1 text-xs font-mono border-l border-b border-neon-blue/30">
              2019 - 2022
            </div>
            
            <h3 className="text-xl mb-1 font-mono">FREELANCER</h3>
            <h4 className="text-neon-blue text-sm mb-4">DIGITAL NEXUS LABS</h4>
            
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-neon-blue mr-2">›</span>
                <span>Developed responsive web applications with modern JavaScript frameworks</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-blue mr-2">›</span>
                <span>Created secure authentication systems with biometric integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-blue mr-2">›</span>
                <span>Optimized application performance, reducing load times by 40%</span>
              </li>
            </ul>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-cyber-navy/30 text-xs">React</span>
              <span className="px-2 py-1 bg-cyber-navy/30 text-xs">Vue.js</span>
              <span className="px-2 py-1 bg-cyber-navy/30 text-xs">JavaScript</span>
              <span className="px-2 py-1 bg-cyber-navy/30 text-xs">CSS3</span>
            </div>
          </div>
          
          {/* Experience Item 3 */}
          <div className="cyber-panel relative">
            <div className="absolute top-0 right-0 bg-cyber-navy px-2 py-1 text-xs font-mono border-l border-b border-neon-blue/30">
              2017 - 2019
            </div>
            
            <h3 className="text-xl mb-1 font-mono">JUNIOR DEVELOPER</h3>
            <h4 className="text-neon-blue text-sm mb-4">TECH INNOVATIONS LTD</h4>
            
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-neon-blue mr-2">›</span>
                <span>Built and maintained RESTful APIs for mobile and web applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-blue mr-2">›</span>
                <span>Implemented automated testing frameworks, achieving 95% code coverage</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-blue mr-2">›</span>
                <span>Collaborated in agile teams to deliver features on tight deadlines</span>
              </li>
            </ul>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-cyber-navy/30 text-xs">JavaScript</span>
              <span className="px-2 py-1 bg-cyber-navy/30 text-xs">Node.js</span>
              <span className="px-2 py-1 bg-cyber-navy/30 text-xs">Express</span>
              <span className="px-2 py-1 bg-cyber-navy/30 text-xs">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen p-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-neon-blue animate-glow mb-6 font-mono tracking-wider">PROJECTS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="cyber-card group">
            <div className="absolute top-2 right-2">
              <div className="flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-neon-blue animate-pulse"></div>
                <div className="h-2 w-2 rounded-full bg-neon-blue animate-pulse delay-75"></div>
                <div className="h-2 w-2 rounded-full bg-neon-blue animate-pulse delay-150"></div>
              </div>
            </div>
            
            <h3 className="text-lg font-mono mb-2">QUANTUM VAULT</h3>
            <p className="text-sm text-cyber-light/80 mb-4">
              Blockchain-secured storage solution with quantum-resistant encryption for sensitive data.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-cyber-navy/50 text-xs font-mono">REACT</span>
              <span className="px-2 py-1 bg-cyber-navy/50 text-xs font-mono">SOLIDITY</span>
              <span className="px-2 py-1 bg-cyber-navy/50 text-xs font-mono">WEB3</span>
            </div>
            
            <div className="flex justify-between items-center">
              <a href="#" className="text-neon-blue text-sm flex items-center group-hover:underline">
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              <div className="flex space-x-2">
                <a href="#" className="text-cyber-light hover:text-neon-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href="#" className="text-cyber-light hover:text-neon-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="cyber-card group">
            <div className="absolute top-2 right-2">
              <div className="flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-neon-pink animate-pulse"></div>
                <div className="h-2 w-2 rounded-full bg-neon-pink animate-pulse delay-75"></div>
                <div className="h-2 w-2 rounded-full bg-neon-pink animate-pulse delay-150"></div>
              </div>
            </div>
            
            <h3 className="text-lg font-mono mb-2">NEURAL LINK</h3>
            <p className="text-sm text-cyber-light/80 mb-4">
              AI-powered social platform that creates meaningful connections based on deep learning algorithms.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-cyber-navy/50 text-xs font-mono">TYPESCRIPT</span>
              <span className="px-2 py-1 bg-cyber-navy/50 text-xs font-mono">NEXT.JS</span>
              <span className="px-2 py-1 bg-cyber-navy/50 text-xs font-mono">TENSORFLOW</span>
            </div>
            
            <div className="flex justify-between items-center">
              <a href="#" className="text-neon-blue text-sm flex items-center group-hover:underline">
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              <div className="flex space-x-2">
                <a href="#" className="text-cyber-light hover:text-neon-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href="#" className="text-cyber-light hover:text-neon-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="cyber-card group">
            <div className="absolute top-2 right-2">
              <div className="flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-neon-green animate-pulse"></div>
                <div className="h-2 w-2 rounded-full bg-neon-green animate-pulse delay-75"></div>
                <div className="h-2 w-2 rounded-full bg-neon-green animate-pulse delay-150"></div>
              </div>
            </div>
            
            <h3 className="text-lg font-mono mb-2">GHOST PROTOCOL</h3>
            <p className="text-sm text-cyber-light/80 mb-4">
              Peer-to-peer encrypted messaging platform with self-destructing messages and zero logs.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-cyber-navy/50 text-xs font-mono">NODE.JS</span>
              <span className="px-2 py-1 bg-cyber-navy/50 text-xs font-mono">WEBRTC</span>
              <span className="px-2 py-1 bg-cyber-navy/50 text-xs font-mono">CRYPTOGRAPHY</span>
            </div>
            
            <div className="flex justify-between items-center">
              <a href="#" className="text-neon-blue text-sm flex items-center group-hover:underline">
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              <div className="flex space-x-2">
                <a href="#" className="text-cyber-light hover:text-neon-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href="#" className="text-cyber-light hover:text-neon-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 4 */}
          <div className="cyber-card group">
            <div className="absolute top-2 right-2">
              <div className="flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-neon-blue animate-pulse"></div>
                <div className="h-2 w-2 rounded-full bg-neon-blue animate-pulse delay-75"></div>
                <div className="h-2 w-2 rounded-full bg-neon-blue animate-pulse delay-150"></div>
              </div>
            </div>
            
            <h3 className="text-lg font-mono mb-2">GRIDRUNNER</h3>
            <p className="text-sm text-cyber-light/80 mb-4">
              Web-based strategy game with procedurally generated environments and blockchain rewards.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-cyber-navy/50 text-xs font-mono">THREE.JS</span>
              <span className="px-2 py-1 bg-cyber-navy/50 text-xs font-mono">WEBGL</span>
              <span className="px-2 py-1 bg-cyber-navy/50 text-xs font-mono">ETHEREUM</span>
            </div>
            
            <div className="flex justify-between items-center">
              <a href="#" className="text-neon-blue text-sm flex items-center group-hover:underline">
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              <div className="flex space-x-2">
                <a href="#" className="text-cyber-light hover:text-neon-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href="#" className="text-cyber-light hover:text-neon-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const skills = [
    { name: 'Frontend Development', level: 95 },
    { name: 'Backend Development', level: 90 },
    { name: 'Blockchain / Web3', level: 85 },
    { name: 'Cybersecurity', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'DevOps / Cloud', level: 70 },
  ];

  return (
    <section id="skills" className="min-h-screen p-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-neon-blue animate-glow mb-6 font-mono tracking-wider">SKILLS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="cyber-panel">
            <h3 className="font-mono mb-6">TECHNICAL SKILLS</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-sm">{skill.name}</span>
                    <span className="text-neon-blue text-xs">{skill.level}%</span>
                  </div>
                  <div className="skill-progress">
                    <div 
                      className="skill-progress-bar" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="cyber-panel mb-8">
              <h3 className="font-mono mb-4">TECHNOLOGIES</h3>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-2 bg-cyber-navy/70 border border-neon-blue/30 rounded text-sm">JavaScript</span>
                <span className="px-3 py-2 bg-cyber-navy/70 border border-neon-blue/30 rounded text-sm">TypeScript</span>
                <span className="px-3 py-2 bg-cyber-navy/70 border border-neon-blue/30 rounded text-sm">React</span>
                <span className="px-3 py-2 bg-cyber-navy/70 border border-neon-blue/30 rounded text-sm">Next.js</span>
                <span className="px-3 py-2 bg-cyber-navy/70 border border-neon-blue/30 rounded text-sm">Node.js</span>
                <span className="px-3 py-2 bg-cyber-navy/70 border border-neon-blue/30 rounded text-sm">Express</span>
                <span className="px-3 py-2 bg-cyber-navy/70 border border-neon-blue/30 rounded text-sm">GraphQL</span>
                <span className="px-3 py-2 bg-cyber-navy/70 border border-neon-blue/30 rounded text-sm">MongoDB</span>
                <span className="px-3 py-2 bg-cyber-navy/70 border border-neon-blue/30 rounded text-sm">PostgreSQL</span>
                <span className="px-3 py-2 bg-cyber-navy/70 border border-neon-blue/30 rounded text-sm">Docker</span>
                <span className="px-3 py-2 bg-cyber-navy/70 border border-neon-blue/30 rounded text-sm">AWS</span>
                <span className="px-3 py-2 bg-cyber-navy/70 border border-neon-blue/30 rounded text-sm">Solidity</span>
                <span className="px-3 py-2 bg-cyber-navy/70 border border-neon-blue/30 rounded text-sm">Ethereum</span>
                <span className="px-3 py-2 bg-cyber-navy/70 border border-neon-blue/30 rounded text-sm">Web3.js</span>
              </div>
            </div>
            
            <div className="cyber-panel">
              <h3 className="font-mono mb-4">CERTIFICATES</h3>
              
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                  <span className="text-sm">Advanced Blockchain Development (Ethereum Foundation)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                  <span className="text-sm">Certified Information Security Professional</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                  <span className="text-sm">Full Stack Web Development (MIT)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                  <span className="text-sm">AWS Certified Solutions Architect</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen p-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-neon-blue animate-glow mb-6 font-mono tracking-wider">CONTACT</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="cyber-panel">
            <h3 className="font-mono mb-6">GET IN TOUCH</h3>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-mono" htmlFor="name">NAME</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-cyber-dark/50 border border-cyber-gray/30 p-3 rounded-sm text-cyber-light focus:outline-none focus:border-neon-blue transition-colors" 
                  placeholder="Your name"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-mono" htmlFor="email">EMAIL</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-cyber-dark/50 border border-cyber-gray/30 p-3 rounded-sm text-cyber-light focus:outline-none focus:border-neon-blue transition-colors" 
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-mono" htmlFor="message">MESSAGE</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full bg-cyber-dark/50 border border-cyber-gray/30 p-3 rounded-sm text-cyber-light focus:outline-none focus:border-neon-blue transition-colors resize-none" 
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              
              <button type="submit" className="cyber-button w-full">
                SEND MESSAGE
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="cyber-panel">
              <h3 className="font-mono mb-4">CONTACT INFO</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 mr-3 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <span className="block text-xs font-mono text-cyber-light/70 mb-1">EMAIL</span>
                    <a href="mailto:contact@cypher.dev" className="text-sm">contact@cypher.dev</a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 mr-3 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                  <div>
                    <span className="block text-xs font-mono text-cyber-light/70 mb-1">LOCATION</span>
                    <span className="text-sm">Neo Tokyo, Digital District</span>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 mr-3 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <div>
                    <span className="block text-xs font-mono text-cyber-light/70 mb-1">SOCIAL</span>
                    <div className="flex space-x-3">
                      <a href="#" className="text-cyber-light hover:text-neon-blue">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-cyber-light hover:text-neon-blue">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-cyber-light hover:text-neon-blue">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="cyber-panel relative overflow-hidden" style={{ minHeight: '200px' }}>
              <div className="absolute inset-0 opacity-70">
                {/* Interactive grid pattern or map visualization would go here */}
                <div className="w-full h-full bg-cyber-navy/50 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 border-2 border-neon-blue/30 rounded-full animate-pulse-slow"></div>
                    <div className="absolute inset-4 border border-neon-blue/50 rounded-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 w-40 h-1 bg-neon-blue/10 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                    <div className="absolute top-1/2 left-1/2 w-40 h-1 bg-neon-blue/10 -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-cyber-dark/80 p-2 text-xs font-mono">
                DIGITAL WORKSPACE // ALWAYS ONLINE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Animation hook for geometric patterns
const useGridAnimation = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Animation logic would go here
    // This could include canvas-based animations, SVG animations, etc.
    // For simplicity, I'm just adding a basic class-based animation

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = grid.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      // Update CSS variables based on mouse position
      grid.style.setProperty('--mouse-x', `${x}px`);
      grid.style.setProperty('--mouse-y', `${y}px`);
    };

    grid.addEventListener('mousemove', handleMouseMove);

    return () => {
      grid.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return gridRef;
};

export default function Home() {
  const gridRef = useGridAnimation();

  return (
    <div ref={gridRef} className="cyber-theme-container min-h-screen w-full">
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}