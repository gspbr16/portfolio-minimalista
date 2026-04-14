import React from 'react';

function App() {
  return (
    <div className="min-h-screen">
      {/* Header Minimalista Estilo Apple */}
      <nav className="fixed w-full top-0 z-50 bg-[#FBFBFB]/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter">GABRIEL SOARES</span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-black transition-colors">Projetos</a>
            <a href="#" className="hover:text-black transition-colors">Stack</a>
            <a href="#" className="hover:text-black transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 pt-32">
        <section className="space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-[#1D1D1F]">
            Full Stack <br /> Developer.
          </h1>
          <p className="text-2xl text-gray-400 font-medium max-w-2xl leading-relaxed">
            Desenvolvendo soluções robustas com Laravel e interfaces modernas em React. Atualmente focado no ecossistema PHP e JavaScript.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all">
              Ver Projetos
            </button>
            <button className="border border-gray-200 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all">
              LinkedIn
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;