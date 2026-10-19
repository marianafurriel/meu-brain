import './Sidebar.css'

function Sidebar() {
  return (
    <section className="bg-[#1A1C20] w-70 h-screen p-4 text-[#E2E2E8] h-full flex flex-col justify-between">

      <div>
        <section className="mb-4">
          <div className="flex gap-1 items-center">
            <img src="../../src/assets/images/meu-brain-logo.svg" alt="Logo Meu Brain" />

            <h1>Meu Brain</h1>
          </div>

          <div className="flex items-center gap-2 bg-[#1E2024] p-2 rounded-lg text-xs">
            <span className="size-2 rounded-full bg-green-400"></span>
            <span>MODO FOCO</span> <span>Profundo</span>
          </div>
        </section>

        {/* Menu */}
        <section className="flex flex-col gap-2 justify-start text-[#DBC2B0]">

          <button className="hover:text-[#432100] hover:bg-[#D97707] hover:cursor-pointer p-2 rounded-lg transition-all duration-400">
            <div className="flex items-center gap-2">
              <img src="../../src/assets/images/dashboard.svg" alt="Dashboard" />
              Dashboard Geral
            </div>
          </button>
          <button className="hover:text-[#432100] hover:bg-[#D97707] hover:cursor-pointer p-2 rounded-lg transition-all duration-400">
            <div className="flex items-center gap-2"> <img src="../../src/assets/images/leituras.svg" alt="Minhas Leituras" /> Minhas Leituras</div>
          </button>
          <button className="hover:text-[#432100] hover:bg-[#D97707] hover:cursor-pointer p-2 rounded-lg transition-all duration-400">
            <div className="flex items-center gap-2"> <img src="../../src/assets/images/tarefas.svg" alt="Tarefas de Estudo" /> Tarefas de Estudo</div>
          </button>
          <button className="hover:text-[#432100] hover:bg-[#D97707] hover:cursor-pointer p-2 rounded-lg transition-all duration-400">
            <div className="flex items-center gap-2"> <img src="../../src/assets/images/caderno.svg" alt="Caderno de Ideias" /> Caderno de Ideias</div>
          </button>
          <button className="hover:text-[#432100] hover:bg-[#D97707] hover:cursor-pointer p-2 rounded-lg transition-all duration-400">
            <div className="flex items-center gap-2"> <img src="../../src/assets/images/configuracoes.svg" alt="Configurações" /> Configurações</div>
          </button>
        </section>

      </div >

      <section>
        <div className='bg-[#1E2024] p-4 rounded-[1vw] mb-4'>

        <div className='flex justify-between mb-2'>
          <span>
          Meta de leitura
          </span>
          <span>75%</span>
        </div>
        <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden mb-2 ">
            <div className="bg-emerald-400 h-full w-[75%] rounded-full" />
        </div>
        <div>
          45 de 60 minutos hoje
        </div>
        </div>


        <div className="flex items-center gap-2">
          <img src="../../src/assets/images/logout.svg" alt="Logout" />
          <div>Encerrar Sessão</div>
        </div>
      </section >

    </section >
  );
}

export default Sidebar;