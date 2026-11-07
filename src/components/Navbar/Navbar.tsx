function Navbar() {
  return (
    <section className="flex justify-between p-2 bg-[#111317]/80 text-[#DBC2B0]/60">
      <div className="flex items-center gap-4 bg-[#0C0E12] rounded-2xl p-4">

        <img
          src="../../src/assets/images/search.svg"
          alt="Buscar"
          className="h-6 w-6"
        />

        <input
          placeholder="Buscar notas, artigos ou ideias..." className="w-127 border-none outline-none"
        />

        <div className="bg-[#1E2024] h-8 w-8 p-1 rounded-sm">

          <img
            src="../../src/assets/images/comand.svg"
            alt="Comando" className="h-full w-full"
          />
        </div>


      </div>

      <div className="flex gap-5 items-center">
        <button className="inline-flex items-center justify-center gap-2 bg-[#D97707] text-[#432100] rounded-sm p-3 cursor-pointer">
          <img
            src="../../src/assets/images/mais.svg"
            alt="Adicionar"
            className="h-3 w-3 shrink-0"
          />
          <span className="font-bold leading-none">Novo Registro</span>
        </button>

        <img
          className="h-9 w-4.25"
          src="../../src/assets/images/notificacao.svg"
          alt="Notificações"
        />
        <div className="flex gap-2">
        <div className="flex flex-col justify-center items-end leading-[1.05] font-bold">
          <span className="text-[#E2E2E8]">Pesquisador</span>
          <span className="text-[#DBC2B0]">Segundo cérebro</span>
        </div>

        <img src="../../src/assets/images/perfil.svg" alt="Avatar" />
      </div>
      </div>
    </section>
  );
}

export default Navbar;
