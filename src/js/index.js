const listaSelecaoOnepiece = document.querySelectorAll(".onepiece");

listaSelecaoOnepiece.forEach(onepiece => {
    onepiece.addEventListener("click", () => {
        esconderCartaoOnepiece();

        const idOnepieceSelecionado = mostrarCartaoOnepieceSelecionado(onepiece);

        desativarOnepieceNaListagem();
        ativarOnepieceSelecionadoNaListagem(idOnepieceSelecionado);
    });
});

function ativarOnepieceSelecionadoNaListagem(idOnepieceSelecionado) {
    const onepieceSelecionadoNaListagem = document.getElementById(idOnepieceSelecionado);
    onepieceSelecionadoNaListagem.classList.add("ativo");
}

function desativarOnepieceNaListagem() {
    const onepieceAtivoNaListagem = document.querySelector(".ativo");
    if (onepieceAtivoNaListagem) {
        onepieceAtivoNaListagem.classList.remove("ativo");
    }
}

function mostrarCartaoOnepieceSelecionado(onepiece) {
    const idOnepieceSelecionado = onepiece.attributes.id.value;
    const idDoCartaoOnepieceParaAbrir = "cartao-" + idOnepieceSelecionado;
    const cartaoOnepieceParaAbrir = document.getElementById(idDoCartaoOnepieceParaAbrir);
    cartaoOnepieceParaAbrir.classList.add("aberto");
    return idOnepieceSelecionado;
}

function esconderCartaoOnepiece() {
    const cartaoOnepieceAberto = document.querySelector(".aberto");
    if (cartaoOnepieceAberto) {
        cartaoOnepieceAberto.classList.remove("aberto");
    }
}