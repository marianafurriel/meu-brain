function StatsCards() {
  return (
    <section className="bg-[#1A1C20] w-full h-40 text-[#DBC2B0] rounded-2xl">

        <div className="flex justify-between items-center p-4">
            <div className="flex gap-2 items-center">
                <span className="indice">01</span>
                 //
                <span className="nome">Repositório</span> 
            </div>

            <img className="icon" src="../../src/assets/images/icon-salvar.svg" alt="Icon de Salvar" />
        </div>

        <div>
            <h2 className="numero text-[#E2E2E8] pl-4 text-4xl ">48</h2>
        </div>

        <div className="flex justify-between items-center p-4">
            <h3 className="legenda">Artigos arquivados</h3>
            <div>
                <img src="../../src/assets/images/icon-grafico.svg" alt="Icon Gráfico" />
            </div>
        </div>

    </section>
);

}

export default StatsCards;