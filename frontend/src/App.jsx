import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import TechCard from './components/TechCard';
import ProjectCard from './components/ProjectCard';
import gabrielFoto from './assets/gabriel_tech.png';
import projetoPortifolio from './assets/projetoPortifolio.png'; 
import projetoJogo from './assets/projetoJogo.png';

import projectsData from './projects.json';
import experiencesData from './experiences.json';

const Home = ({ techs, projects, whatsappUrl }) => (
  <div className="w-full flex flex-col items-center">
    <section id="inicio" className="mb-40 flex flex-col items-center text-center animate-in fade-in duration-700">
      <div className="relative w-48 h-48 md:w-56 md:h-56 mb-10 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full z-0 bg-[#00D1FF]/30 blur-[60px] animate-pulse"></div>
        <div className="absolute inset-0 rounded-full border-2 border-[#00D1FF]/20 backdrop-blur-sm bg-[#111827]/10 z-1 shadow-[0_0_20px_rgba(0,209,255,0.1)]"></div>
        <img src={gabrielFoto} alt="Gabriel Soares" className="w-[85%] h-[85%] object-contain rounded-full relative z-10 filter drop-shadow-[0_0_15px_rgba(0,209,255,0.2)] hover:scale-105 transition-all duration-500" />
      </div>
      <div className="space-y-3 max-w-3xl">
        <span className="text-[#00D1FF] font-semibold tracking-widest uppercase text-xs block mb-2">Olá, eu sou</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">Desenvolvedor Full Stack</h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-medium mb-10 mx-auto">Criando experiências digitais inovadoras com tecnologias modernas</p>
      </div>
      <div className="flex gap-2.5 flex-wrap justify-center mb-12 max-w-2xl">
        {techs.map((tech, index) => (
          <span key={index} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm font-medium text-gray-400 hover:text-[#00D1FF] hover:border-[#00D1FF]/40 hover:bg-[#00D1FF]/5 transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(0,209,255,0.1)]">{tech.name}</span>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
        <Link to="/projetos" className="bg-[#00D1FF] text-black px-10 py-4 rounded-full font-bold hover:bg-[#00b8e6] transition-all flex items-center justify-center gap-2 text-base shadow-[0_0_20px_rgba(0,209,255,0.2)]">Ver Projetos <span className="text-xl">→</span></Link>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="border border-white/10 text-white px-10 py-4 rounded-full font-semibold hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-base">
          <span>✉</span> Entrar em Contato
        </a>
      </div>
    </section>
    <Projetos projects={projects} title="Destaques" />
  </div>
);

const Sobre = () => (
  <section className="max-w-4xl w-full animate-in fade-in duration-700 space-y-16">
    <div className="flex flex-col gap-2 items-center text-center">
      <h2 className="text-3xl font-bold text-white uppercase tracking-widest">Sobre Mim</h2>
      <div className="h-1 w-12 bg-[#00D1FF] rounded-full"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div className="space-y-6 text-gray-400 text-lg leading-relaxed text-justify">
        <p>Minha jornada no desenvolvimento web é impulsionada pela paixão em unir <span className="text-white font-semibold">lógica e estética</span>. Com experiência prévia como <span className="text-[#00D1FF]">social media e filmmaker</span>, trago um olhar diferenciado para o front-end, focando em narrativas visuais e interfaces intuitivas.</p>
        <p>Atualmente, foco meu desenvolvimento em ecossistemas robustos, cursando Sistemas no <span className="text-white">Senac RS</span> e atuando como Desenvolvedor Full Stack na Célebre Soluções Digitais.</p>
      </div>
      <div className="space-y-4">
        <div className="bg-[#111827]/50 border border-white/5 p-6 rounded-2xl hover:border-[#00D1FF]/30 transition-all group">
          <h4 className="text-white font-bold mb-1">Composição Visual</h4>
          <p className="text-sm text-gray-500 group-hover:text-gray-400">Bagagem audiovisual aplicada ao design de interfaces modernas.</p>
        </div>
        <div className="bg-[#111827]/50 border border-white/5 p-6 rounded-2xl hover:border-[#00D1FF]/30 transition-all group">
          <h4 className="text-white font-bold mb-1">Stack Moderna</h4>
          <p className="text-sm text-gray-500 group-hover:text-gray-400">Domínio de React, Laravel e .NET para soluções escaláveis.</p>
        </div>
      </div>
    </div>
  </section>
);

const Experiencia = ({ jobs }) => { 
  return (
    <section className="max-w-4xl w-full animate-in slide-in-from-bottom-4 duration-700 space-y-12">
      <div className="flex flex-col gap-2 items-center text-center">
        <h2 className="text-3xl font-bold text-white uppercase tracking-widest">Experiência Profissional</h2>
        <div className="h-1 w-12 bg-[#00D1FF] rounded-full"></div>
      </div>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {jobs.map((job, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#0B1120] text-[#00D1FF] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all group-hover:border-[#00D1FF]/50 group-hover:shadow-[0_0_15px_rgba(0,209,255,0.2)]">
              <div className="w-2 h-2 rounded-full bg-current"></div>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[45%] bg-[#111827]/40 border border-white/5 p-6 rounded-2xl hover:border-[#00D1FF]/30 transition-all">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-white text-lg">{job.company}</h3>
                <span className="text-[10px] font-mono text-gray-500 uppercase">{job.period}</span>
              </div>
              <div className="text-[#00D1FF] text-sm font-medium mb-4">{job.role}</div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {(job.techs || []).map((t, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/10 rounded text-gray-300 group-hover:text-[#00D1FF] transition-colors">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Projetos = ({ projects, title = "Meus Projetos" }) => (
  <section className="w-full flex flex-col items-center animate-in slide-in-from-bottom-4 duration-500 mb-20">
    <div className="flex flex-col gap-2 mb-12 items-center text-center">
      <h2 className="text-3xl font-bold text-white uppercase tracking-widest">{title}</h2>
      <div className="h-1 w-12 bg-[#00D1FF] rounded-full"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
      {projects.map((project, index) => {
        const displayImage = project.image === 'projetoPortifolio.png' ? projetoPortifolio : 
                           project.image === 'projetoSecretNumber.png' ? projetoJogo : project.image;

        return <ProjectCard key={index} {...project} image={displayImage} />
      })}
    </div>
  </section>
);

function App() {
  const whatsappNumber = "5551999208008"; 
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá%20Gabriel,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!`;

  const techs = [
    { name: "C#" }, { name: ".NET" }, { name: "PHP" }, { name: "Laravel" },
    { name: "Javascript" }, { name: "React" }, { name: "SQL" }
  ];

  const [projects, setProjects] = useState(projectsData);
  const [jobs, setJobs] = useState(experiencesData);

  useEffect(() => {
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#0B1120] font-sans antialiased text-white relative flex flex-col">
        <nav className="fixed w-full top-0 z-50 bg-[#0B1120]/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link to="/" className="shrink-0 font-bold tracking-tighter text-2xl text-white hover:brightness-125 transition-all">&lt;Gabriel Soares /&gt;</Link>
            
            <div className="hidden md:flex items-center space-x-10 grow justify-center">
              <Link to="/" className="text-gray-400 hover:text-[#00D1FF] transition-all font-medium">Início</Link>
              <Link to="/sobre" className="text-gray-400 hover:text-white transition-all font-medium">Sobre Mim</Link>
              <Link to="/experiencia" className="text-gray-400 hover:text-white transition-all font-medium">Experiência</Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all font-medium">Contato</a>
            </div>

            <div className="flex items-center space-x-5 shrink-0 text-sm font-medium text-gray-400">
              <a href="https://github.com/gspbr16" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/gabriel-soares-504b452b0/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-6 pt-44 pb-20 flex flex-col grow items-center justify-center w-full">
          <Routes>
            <Route path="/" element={<Home techs={techs} projects={projects} whatsappUrl={whatsappUrl} />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos projects={projects} />} />
            <Route path="/experiencia" element={<Experiencia jobs={jobs} />} />
          </Routes>
        </main>

        <footer className="w-full py-10 border-t border-white/10 text-gray-500 text-xs md:text-sm text-center px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2026 Porto Alegre, RS — Gabriel Soares</p>
            <p>Desenvolvido com React, Laravel & Tailwind.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;