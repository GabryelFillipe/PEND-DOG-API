'use strict'

const botaoBuscar = document.getElementById('buscarRaca')
botaoBuscar.addEventListener('click', pegarRaca)

async function pegarRaca() {
    const raca = document.getElementById('raca').value
    const galeria = document.getElementById('containerImagens')
    const main = document.getElementById('main')

    galeria.replaceChildren()

    const limparErro = main.querySelector('.mensagem-erro')


    if (limparErro) {
        limparErro.remove()
    }

    const dados = await pegarImagens(raca)

    if (Array.isArray(dados)) {
        dados.forEach(urlDaImagem => {
            criarGaleria(urlDaImagem, galeria)
        })

    } else {
        const mensagemErro = document.createElement('h2')
        mensagemErro.textContent = dados
        mensagemErro.classList.add('mensagem-erro')
        main.appendChild(mensagemErro)
    }
}

async function pegarImagens(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const data = await response.json()

    if (data.status === 'success') {
        console.log(data.message)
        return data.message
    } else {
        console.error(data.message)
        return 'Raça não encontrada. Tente novamente.'
    }

}

function criarGaleria(url, container) {

    const imagemCachorro = document.createElement('img')
    imagemCachorro.src = url

    container.appendChild(imagemCachorro)

}