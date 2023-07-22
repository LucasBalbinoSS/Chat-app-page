addEventListener('DOMContentLoaded', () => {
    mensagemCliente()
})

const mensagemCliente = () => {
    const $containerMensagens = document.querySelector('.js-mensagens-container')
    const $campoEnviar = document.querySelector('.js-enviar-campo')
    const $campoEnviarBtn = document.querySelector('.js-enviar-btn')

    
    $campoEnviarBtn.addEventListener('click', () => {
        mensagemEnviar()
        campoLimpar()
    })

    function mensagemEnviar() {
        const campoEnviarValor = $campoEnviar.value
        const $mensagemDoUsuario = document.createElement('li')

        if (campoEnviarValor.trim() == '') {
            campoLimpar()
            return
        }

        $mensagemDoUsuario.innerText = campoEnviarValor
        mensagemEstilizar($mensagemDoUsuario)
        $containerMensagens.append($mensagemDoUsuario)

        mensagemTransicao($mensagemDoUsuario)

        // faz o scroll para o final da lista de mensagens
        $containerMensagens.scrollTop = $containerMensagens.scrollHeight
    }

    function mensagemTransicao($alvo) {
        setTimeout(() => {
            $alvo.classList.remove('opacity-0')
            $alvo.classList.add('opacity-100')
        }, 100);
    }

    function mensagemEstilizar($alvo) {
        $alvo.classList.add('mensagem-cliente', 'opacity-0')
    }

    function campoLimpar() {
        $campoEnviar.value = ''
    }
}