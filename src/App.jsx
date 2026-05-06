import React from 'react';

const Portfolio = () => {
  return (
    <div className="bg-slate-950 text-slate-300 font-sans min-h-screen selection:bg-teal-500 selection:text-white">
      
      {/* NAVEGAÇÃO */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-teal-400 tracking-tighter">
            {"<Erika />"}
          </div>
          <ul className="flex space-x-8 text-sm font-medium">
            <li><a href="#sobre" className="hover:text-teal-400 transition-colors">Sobre Mim</a></li>
            <li><a href="#projetos" className="hover:text-teal-400 transition-colors">Projetos</a></li>
            <li><a href="#contato" className="hover:text-teal-400 transition-colors">Contato</a></li>
          </ul>
        </div>
      </nav>

      {/* 1. INTRODUÇÃO (Hero Section) */}
      <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex items-center bg-slate-950">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Olá, eu me chamo <span className="text-teal-400">Erika</span>!
            </h1>
            <p className="text-lg leading-relaxed text-slate-400">
              Graduanda em desenvolvimento de software multiplataforma na FATEC - São José dos Campos.
            </p>
            <a href="#projetos" className="inline-block bg-teal-500 text-slate-950 font-bold px-8 py-4 rounded-lg hover:bg-teal-400 transition-transform transform hover:-translate-y-1">
              Ver meus projetos
            </a>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-teal-500 rounded-2xl blur-2xl opacity-10 animate-pulse"></div>
            <img 
              src="./eu.jpeg" 
              alt="Minha foto"
              className="relative rounded-2xl shadow-2xl object-cover h-[450px] w-full border border-slate-800 brightness-90"
            />
          </div>
        </div>
      </section>

{/* 2. SOBRE MIM */}
      <section id="sobre" className="py-24 px-6 bg-slate-900 border-y border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
            <p className="text-lg leading-relaxed text-slate-300">
              Atualmente estou no último semestre da faculdade, atuo como estagiária Front-end com foco em manutenção de sistemas. Utilizo JavaScript e Bootstrap para garantir a escalabilidade e a melhor experiência do usuário.
            </p>
            <p className="text-lg leading-relaxed text-slate-300">
              Tenho como hobbies práticas manuais como pintura e crochê, que me ajudam a exercitar a paciência, criatividade e a atenção aos detalhes. Além disso, também gosto de ler e jogar.
            </p>

            {/* SUBSEÇÃO DE HABILIDADES */}
            <div className="pt-4">
              <h3 className="text-lg font-bold text-teal-400 uppercase tracking-widest mb-4">Principais Habilidades Técnicas</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-slate-800 rounded-full text-sm font-medium text-slate-300">TypeScript</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full text-sm font-medium text-slate-300">React</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full text-sm font-medium text-slate-300">SQL</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full text-sm font-medium text-slate-300">NoSQL</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full text-sm font-medium text-slate-300">Python</span>
              </div>
            </div>
          </div>
          
          {/* Grid de 4 imagens */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80" alt="Código" className="rounded-xl shadow-lg w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D" alt="Natureza" className="rounded-xl shadow-lg w-full h-48 object-cover mt-8" />
            <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80" alt="Criatividade" className="rounded-xl shadow-lg w-full h-48 object-cover -mt-8" />
            <img src="https://plus.unsplash.com/premium_photo-1675799551089-d264f8f2900b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3JvY2hldHxlbnwwfHwwfHx8MA%3D%3D" alt="Mesa de trabalho" className="rounded-xl shadow-lg w-full h-48 object-cover" />
          </div>
        </div>
      </section>

      {/* 3. PROJETOS */}
      <section id="projetos" className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-2">Projetos</h2>
          <p className="text-slate-400 text-center mb-16">Abaixo você encontrará meus projetos desenvolvidos.</p>
          
          <div className="space-y-20">
            {/* Projeto 1 */}
            <div className="flex flex-col md:flex-row bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
              <div className="md:w-5/12">
                <img 
                  src="./criancaRenal.png" 
                  alt="Criança Renal" 
                  className="h-full w-full object-fill"
                />
              </div>
              <div className="p-10 md:w-7/12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-3">Criança Renal</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Blog informativo e rede de apoio para famílias de crianças com doença renal crônica. O projeto foca no acolhimento e na disseminação de dados essenciais sobre a condição. <a href="https://github.com/TeamHiveAPI/API-2023.2?tab=readme-ov-file" target="_blank" className="text-teal-400 hover:underline">Ver repositório.</a>
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-teal-400 uppercase tracking-wider mb-2">Minha Contribuição</h4>
                  <p className="text-slate-300 text-sm">Fui responsável pela prototipagem da interface no <strong>Figma</strong> e pela implementação da identidade visual utilizando <strong>CSS</strong>, garantindo um layout acessível.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300">HTML</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300">CSS</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300">JavaScript</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300">Flask</span>
                </div>
              </div>
            </div>

            {/* Projeto 2 */}
            <div className="flex flex-col md:flex-row-reverse bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
              <div className="md:w-5/12">
                <img 
                  src="./internet-ocean.png" 
                  alt="Internet Ocean" 
                  className="h-full w-full object-fill"
                />
              </div>
              <div className="p-10 md:w-7/12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-3">Internet Ocean</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Solução para gerenciamento de chamados técnicos, otimizando o fluxo de suporte entre usuários e equipe de atendimento. <a href="https://github.com/CoddingWarriors/Api_CoddingWarriors/tree/main?tab=readme-ov-file" target="_blank" className="text-teal-400 hover:underline">Ver repositório.</a>
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-teal-400 uppercase tracking-wider mb-2">Minha Contribuição</h4>
                  <p className="text-slate-300 text-sm">Atuei no design da aplicação via <strong>Figma</strong>, codificação do estilo com <strong>CSS</strong> e desenvolvimento de <strong>rotas específicas</strong> para a integração do sistema.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300">TypeScript</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300">React</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300">Node.JS</span>
                </div>
              </div>
            </div>

            {/* Projeto 3 */}
            <div className="flex flex-col md:flex-row bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
              <div className="md:w-5/12">
                <img 
                  src="fapg.png"
                  alt="Portal Transparencia" 
                  className="h-full w-full object-fill"
                />
              </div>
              <div className="p-10 md:w-7/12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-3">Portal FAPG</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Portal focado em transparência pública e segurança de dados, facilitando o acesso às informações da Fundação de forma robusta e confiável. <a href="https://github.com/A-Sync-Fatec/api-fatec-3sem-24" target="_blank" className="text-teal-400 hover:underline">Ver repositório.</a>
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-teal-400 uppercase tracking-wider mb-2">Minha Contribuição</h4>
                  <p className="text-slate-300 text-sm">Contribuí com a estruturação visual utilizando <strong>CSS</strong> e o desenvolvimento de <strong>rotas</strong> fundamentais para a navegação do portal.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300">TypeScript</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300">React</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300">Java Spring</span>
                </div>
              </div>
            </div>

            {/* Projeto 4 */}
            <div className="flex flex-col md:flex-row-reverse bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
              <div className="md:w-5/12">
                <img 
                  src="./tecsus.png" 
                  alt="Estação Metereologica" 
                  className="h-full w-full object-fill"
                />
              </div>
              <div className="p-10 md:w-7/12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-3">Estação Meteorológica IoT</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Sistema de monitoramento climático em tempo real, integrando dispositivos IoT e visualização interativa de dados para conscientização ambiental. <a href="https://github.com/TeamHiveAPI/API-2025.01" target="_blank" className="text-teal-400 hover:underline">Ver repositório.</a>
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-teal-400 uppercase tracking-wider mb-2">Minha Contribuição</h4>
                  <p className="text-slate-300 text-sm">Foquei no desenvolvimento das <strong>rotas de dados</strong> da aplicação, garantindo que as informações coletadas pelos sensores fossem processadas e exibidas corretamente.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300">Python</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300">FastAPI</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300">React</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300">PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTATO */}
      <section id="contato" className="py-24 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Vamos Conversar?</h2>
            <p className="text-slate-400">Preencha os dados abaixo e entrarei em contato o mais rápido possível.</p>
          </div>
          
          <form className="space-y-6 bg-slate-950 p-8 md:p-10 rounded-2xl border border-slate-800 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Nome Completo</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Telefone</label>
                <input 
                  type="tel" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">E-mail</label>
              <input 
                type="email" 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Mensagem</label>
              <textarea 
                rows="5"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors resize-none"
                placeholder="Como posso te ajudar?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-teal-500 text-slate-950 font-bold py-4 rounded-lg hover:bg-teal-400 transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-slate-950 py-8 text-center border-t border-slate-800 text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Erika Dias Ribeiro. Desenvolvido com React e Tailwind.</p>
      </footer>
    </div>
  );
};

export default Portfolio;