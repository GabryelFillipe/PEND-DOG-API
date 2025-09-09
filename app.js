'use strict'

const botaoBuscar = document.getElementById('buscarRaca')

function pegarRaca() {
    const raca = document.getElementById('raca').value
    pegarImagens(raca)

}
botaoBuscar.addEventListener('click', pegarRaca)

async function pegarImagens(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const imagens = await response.json()
    console.log(imagens.message)
    carregarGaleria(imagens)
    return imagens
}

function criarGaleria(pegarImagens) {
    const galeria = document.getElementById('containerImagens')

    const imagemCachorro = document.createElement('img')
    imagemCachorro.src = imagens.message

    galeria.appendChild(imagemCachorro)
}
function carregarGaleria(pegarImagens) {
    imagens.forEach(criarGaleria)

}





