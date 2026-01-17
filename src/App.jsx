import React from 'react';
import { Mail, Phone, MapPin, Award, CheckCircle2, GraduationCap, Download, Zap, Languages, Layers, Code2, Calculator, FileText } from 'lucide-react';

// --- ASSETS IMPORT ---
import profileImg from './assets/profile.jpg'; 
import costxLogo from './assets/costx.jpg';     
import autocadLogo from './assets/autocad.jpg'; 
import officeLogo from './assets/office.jpg';   

// --- DATA CONFIGURATION ---
const RESUME_DATA = {
  profile: {
    name: "Thannaree",
    surname: "Noosanan",
    role: "Cost Engineer (MEP)", 
    phone: "091-778-0968",       
    email: "yok_thannaree@hotmail.com", 
    location: "Bangkok, Thailand", 
    image: profileImg
  },
  languages: [
    { name: "Thai", level: "Native" },       
    { name: "English", level: "Intermediate" } 
  ],
  license: {
    title: "Associate Electrical Engineer (Power)", 
    id: "62364" 
  },
  education: [
    {
      degree: "Master of Business Administration (Industrial Business)", 
      university: "King Mongkut's University of Technology North Bangkok" 
    },
    {
      degree: "B.Eng. in Power Electronics Engineering Technology", 
      university: "King Mongkut's University of Technology North Bangkok" 
    }
  ],
  experience: [
    {
      company: "COST PLAN Co., Ltd.", 
      role: "Cost Engineer (MEP)",    
      period: "May 2023 – Present",   
      tasks: [
        "Analyze construction drawings and specifications to perform accurate quantity take-offs for MEP systems (Electrical, Sanitary, and Piping).", 
        "Prepare detailed Bill of Quantities (BOQ) and tender documents.", 
        "Calculate comprehensive costs for materials, equipment, and labor based on current market rates.", 
        "Manage the bidding process, coordinate with suppliers, and review procurement contracts.", 
        "Monitor project expenses and verify payment applications for subcontractors.", 
        "Track project progress and generate cost reports (weekly/monthly) for management review.", 
        "Collaborate with designers, clients, and site managers to resolve technical issues." 
      ]
    },
    {
      company: "Brasten Engineering & Service Co., Ltd.", 
      role: "Product Engineer", 
      period: "Dec 2022 – April 2023", 
      tasks: [
        "Specialized in online water analyzers and process liquid analyzers for wastewater treatment systems.", 
        "Provided technical sales support, after-sales service, and conducted training sessions.", 
        "Inspected incoming products and generated detailed instrument test reports.", 
        "Recommended suitable products to prospective clients via email and phone.", 
        "Coordinated and performed on-site inspections, including water hardness analyzer testing." 
      ]
    }
  ],
  techStack: [
    { img: costxLogo, label: "CostX" },
    { img: autocadLogo, label: "AutoCAD" },
    { img: officeLogo, label: "MS Office" }
  ]
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-10 font-sans text-slate-900 relative overflow-x-hidden">
      
      {/* --- BACKGROUND EFFECT --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #0d9488 1px, transparent 1px), linear-gradient(to bottom, #0d9488 1px, transparent 1px)', 
             backgroundSize: '60px 60px' 
           }}>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-enter {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* --- DOWNLOAD BUTTON --- */}
      <div className="fixed bottom-8 right-8 z-50 animate-enter delay-500">
        <a 
          href="/resume-thannaree.pdf" 
          download="Resume-Thannaree.pdf" 
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg hover:shadow-emerald-500/40 transition-all hover:scale-110 flex items-center gap-2 font-bold cursor-pointer group no-underline"
        >
          <Download size={20} className="group-hover:animate-bounce" /> 
          <span className="hidden group-hover:inline transition-all duration-300">Download PDF</span>
        </a>
      </div>

      {/* --- MAIN CONTAINER --- */}
      <div className="mx-auto bg-white shadow-xl max-w-5xl relative z-10 animate-enter duration-700 rounded-3xl overflow-hidden my-8 border-t-8 border-emerald-500">
        
        {/* ================= HEADER ================= */}
        <header className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 text-slate-800 p-8 md:p-12 relative overflow-hidden border-b border-slate-100">
          
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full -mr-16 -mt-16 blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-100/50 rounded-full -ml-10 -mb-10 blur-2xl opacity-60"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="relative group shrink-0">
               {/* กรอบรูป */}
               <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-400 to-teal-300 rounded-full blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
               <div className="relative w-48 h-48 rounded-full border-4 border-white shadow-lg overflow-hidden bg-slate-100">
                  <img 
                    src={RESUME_DATA.profile.image} 
                    alt="Profile" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${RESUME_DATA.profile.name}+${RESUME_DATA.profile.surname}&background=059669&color=fff&size=256`; }}
                  />
               </div>
            </div>

            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-3 text-slate-900">
                {RESUME_DATA.profile.name} <br/><span className="text-emerald-600">{RESUME_DATA.profile.surname}</span>
              </h1>
              
              <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                 <Zap size={20} className="text-emerald-500 fill-emerald-500 animate-pulse" />
                 <p className="text-xl font-bold text-slate-500 tracking-widest uppercase">
                   {RESUME_DATA.profile.role}
                 </p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-y-3 gap-x-6 text-sm text-slate-600 mb-6 font-medium">
                <a href={`tel:${RESUME_DATA.profile.phone}`} className="flex items-center gap-2 hover:text-emerald-600 transition-colors group">
                  <Phone size={18} className="text-emerald-500 group-hover:rotate-12 transition-transform"/> 
                  <span>{RESUME_DATA.profile.phone}</span>
                </a>
                <a href={`mailto:${RESUME_DATA.profile.email}`} className="flex items-center gap-2 hover:text-emerald-600 transition-colors group">
                  <Mail size={18} className="text-emerald-500 group-hover:rotate-12 transition-transform"/> 
                  <span>{RESUME_DATA.profile.email}</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-emerald-500"/> 
                  <span>{RESUME_DATA.profile.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                 {RESUME_DATA.languages.map((lang, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors">
                       <Languages size={16} className="text-emerald-600" />
                       <span className="text-sm font-bold uppercase text-slate-700">{lang.name}</span>
                       <span className="text-[10px] text-emerald-700 font-bold uppercase px-2 py-0.5 bg-emerald-50 rounded-full">{lang.level}</span>
                    </div>
                 ))}
              </div>
            </div>
          </div>
        </header>

        {/* ================= CONTENT BODY ================= */}
        <div className="p-8 md:p-16 space-y-16">

          {/* 1. EXPERIENCE */}
          <section className="animate-enter delay-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center shadow-sm">
                <CheckCircle2 size={28} />
              </div>
              <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Experience</h2>
            </div>

            <div className="space-y-12 border-l-2 border-slate-200 ml-6 pl-8 md:pl-12">
              {RESUME_DATA.experience.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-emerald-500 transition-all duration-300 group-hover:scale-125 group-hover:border-emerald-600 shadow-sm"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                    <h3 className="text-2xl font-bold text-slate-800 uppercase leading-tight group-hover:text-emerald-700 transition-colors duration-300">{exp.role}</h3>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100 mt-2 md:mt-0 w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-slate-500 mb-4">{exp.company}</div>
                  
                  <ul className="space-y-3 text-slate-600 leading-relaxed list-disc ml-4 marker:text-emerald-400">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="hover:text-slate-900 transition-colors">{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 2. CORE COMPETENCIES */}
          <section className="animate-enter delay-200">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center shadow-sm">
                   <Layers size={28} />
                </div>
                <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Core Competencies</h2>
             </div>
             
             <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="flex items-start gap-5 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                       <div className="w-14 h-14 bg-emerald-50 p-3 rounded-xl text-emerald-600 shrink-0 flex items-center justify-center">
                         <Calculator size={28} />
                       </div>
                       <div>
                         <div className="text-lg font-bold text-slate-800 leading-none mb-2">Cost Management</div>
                         <div className="text-sm text-slate-500">Cost Estimation, BOQ Preparation & Project Cost Control</div>
                       </div>
                   </div>
                   <div className="flex items-start gap-5 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                       <div className="w-14 h-14 bg-emerald-50 p-3 rounded-xl text-emerald-600 shrink-0 flex items-center justify-center">
                         <FileText size={28} />
                       </div>
                       <div>
                         <div className="text-lg font-bold text-slate-800 leading-none mb-2">Procurement</div>
                         <div className="text-sm text-slate-500">Supplier Negotiation & Procurement Contract Review</div>
                       </div>
                   </div>
                </div>
             </div>
          </section>

          {/* 3. SOFTWARE & TOOLS */}
          <section className="animate-enter delay-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center shadow-sm">
                  <Code2 size={28} />
                </div>
                <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Software Skills</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {RESUME_DATA.techStack.map((tech, i) => (
                  <div key={i} className="bg-white border border-slate-200 p-4 rounded-2xl flex flex-col items-center gap-3 shadow-sm hover:shadow-lg hover:border-emerald-400 hover:-translate-y-2 transition-all duration-300 cursor-default">
                    <div className="w-12 h-12 flex items-center justify-center">
                       {tech.img ? (
                          <img src={tech.img} alt={tech.label} className="max-w-full max-h-full object-contain filter hover:brightness-110 transition-all" />
                       ) : (
                          <Code2 className="text-slate-300" size={32}/>
                       )}
                    </div>
                    <span className="text-xs font-bold text-slate-500 uppercase text-center tracking-wider">{tech.label}</span>
                  </div>
                ))}
              </div>
          </section>

          <div className="grid md:grid-cols-2 gap-12">
            {/* 4. EDUCATION (FIXED: Removed h-full to prevent cutoff) */}
            <section className="animate-enter delay-400">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center shadow-sm">
                    <GraduationCap size={28} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Education</h2>
                </div>
                
                <div className="space-y-4">
                  {RESUME_DATA.education.map((edu, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                      <h3 className="text-sm font-black text-slate-800 uppercase leading-tight mb-2">{edu.university}</h3>
                      <div className="h-1 w-12 bg-emerald-500 rounded-full mb-3"></div>
                      <p className="text-slate-600 font-bold text-sm">{edu.degree}</p>
                    </div>
                  ))}
                </div>
            </section>

            {/* 5. LICENSE */}
            <section className="animate-enter delay-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center shadow-sm">
                    <Award size={28} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">License</h2>
                </div>
                
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-3xl relative overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 transform hover:-translate-y-1 flex flex-col justify-center border border-slate-700">
                   <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full -mr-10 -mt-10 blur-3xl animate-pulse"></div>
                   
                   <div className="relative z-10">
                      <div className="text-emerald-400 text-sm font-bold tracking-widest mb-2">Professional License</div>
                      <div className="text-2xl font-black leading-tight mb-6">{RESUME_DATA.license.title}</div>
                      <div className="inline-block bg-white/10 px-6 py-3 rounded-xl text-emerald-300 font-mono text-3xl font-bold tracking-widest border border-white/10 shadow-lg backdrop-blur-sm">
                          {RESUME_DATA.license.id}
                      </div>
                   </div>
                </div>
            </section>
          </div>

        </div>
        
        {/* FOOTER */}
        <div className="bg-slate-50 p-8 text-center text-sm text-slate-400 border-t border-slate-100">
          © {new Date().getFullYear()} {RESUME_DATA.profile.name}. Engineering Portfolio.
        </div>

      </div>
    </div>
  );
};

export default Portfolio;