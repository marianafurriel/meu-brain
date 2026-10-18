import './Sidebar.css'

function Sidebar() {
  return (
    <section className="bg-[#1A1C20] w-70 h-screen p-4 text-[#E2E2E8]"> 
        <div className="flex gap-1 items-center">
            <img src="../../src/assets/images/meu-brain-logo.svg" alt="Logo Meu Brain" />

            <h1>Meu Brain</h1>
        </div>

       <div className="flex items-center gap-2">
        <span className="size-2 rounded-full bg-green-400"></span>
        <span>MODO FOCO</span> <span>Profundo</span>
      </div>

       <section>
        <div>Dashboard Geral</div>
        <div>Minhas Leituras</div>
        <div>Tarefas de Estudo</div>
        <div>Caderno de Ideias</div>
        <div>Configurações</div>
       </section>

       <section>
        <div>Meta de leitura</div>
       </section>

       <div>
        <div></div>
        <div>Encerrar Sessão</div>
       </div>

    </section>
  );
}

export default Sidebar;