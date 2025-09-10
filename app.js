'use strict'

const botaoBuscar = document.getElementById('buscarRaca')
botaoBuscar.addEventListener('click', pegarRaca)

async function pegarRaca() {
    const raca = document.getElementById('raca').value

    const galeria = document.getElementById('containerImagens')

    galeria.replaceChildren()

    const dados = await pegarImagens(raca)
    dados.forEach(urlDaImagem => {
        criarGaleria(urlDaImagem, galeria)
    })
}

async function pegarImagens(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const imagens = await response.json()
    console.log(imagens.message)
    return imagens.message
}

function criarGaleria(url, container) {

    const imagemCachorro = document.createElement('img')
    imagemCachorro.src = url

    container.appendChild(imagemCachorro)

}