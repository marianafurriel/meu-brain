function TaskCard() {
    return (
        <section className="bg-[#1A1C20] text-[#DBC2B0] rounded-2xl w-fit h-fit p-4">
            <input type="checkbox" className="w-5 h-5 p-1 appearance-none bg-[#333539] border border-[#333539] rounded-sm checked:bg-[#4EDEA3]  checked:bg-[url('../../src/assets/images/check.svg')]   checked:bg-center bg-no-repeat bg-size[12px_12px]" />
            <div>

                <span className="text-white">Escrever nota perene sobre
                    Processamento Preditivo</span>

                <p className="text-[#DBC2B0]">Ref: The Experience Machine (Cap. 4)</p>
                <div className="flex justify-between">
                    <div>
                        <span className="text-[#FFB77D] bg-[#D9770733]/80 py-0.5 px-1 rounded-sm">Alta</span> <span>Hoje, 14:00</span>
                    </div>
                    <span>Em andamento</span>
                </div>
            </div>
        </section >
    )
}

export default TaskCard;