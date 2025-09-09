'use strict'

const botaoBuscar = document.getElementById('buscarRaca')
botaoBuscar.addEventListener('click', pegarRaca)

async function pegarRaca() {
    const raca = document.getElementById('raca').value
    const dados = await pegarImagens(raca)
    dados.forEach(criarGaleria)
}

async function pegarImagens(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const imagens = await response.json()
    console.log(imagens.message)
    return imagens.message
}

function criarGaleria(dados) {
    const galeria = document.getElementById('containerImagens')

    const imagemCachorro = document.createElement('img')
    imagemCachorro.src = dados

    galeria.appendChild(imagemCachorro)
    
}