function Readings() {
    return (
        <section className="bg-[#1A1C20] text-[#DBC2B0] rounded-2xl w-fit h-fit p-4">
            <div className="flex gap-10">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <span className="indice">MIT Press </span>
                        /
                        <span className="nome"> Andy Clark</span>
                    </div>
                    <h2>The Experience<br />
                        Machine: How Our Mind<br />
                        Predicts Reality</h2>
                </div>
                <img src="../../src/assets/images/livro.svg" alt="Livro" />
            </div>
            <div className="mt-3">
                <span className="bg-[#282A2E] mr-1 mb-4 py-0.5 px-1">Neurociencia</span>
                <span className="bg-[#282A2E] mr-1 mb-4 py-0.5 px-1">Filosofia da Mente</span>
            </div>
            <p className="text-right mt-1">~18 min rest.</p>

            <div className="mt-4">
                <div className="flex justify-between">
                    <p>Progresso cap. 5</p>
                    <p>68%</p>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden mb-2 mt-1 ">
                    <div className="bg-emerald-400 h-full w-[75%] rounded-full" />
                </div>
                <div className="flex justify-between items-center gap-8 mt-4">
                    <p>Última nota há 2h</p>
                    <button className="bg-[#282A2E] rounded-xl flex items-center p-2 gap-2 cursor-pointer">
                        <img src="../../src/assets/images/book-icon.svg" alt="" className="h-2.5 w-3.5" /> Continuar leitura
                    </button>
                </div>
            </div>


        </section>);
}

export default Readings;