addEventListener('DOMContentLoaded', () => {
    mensagemEnviar()
})

const mensagemEnviar = () => {
    const $containerMensagens = document.querySelector('.js-mensagens-container')
    const $campoEnviar = document.querySelector('.js-enviar-campo')
    const $campoEnviarBtn = document.querySelector('.js-enviar-btn')

    
    $campoEnviarBtn.addEventListener('click', () => {
        mensagemCriar()
        campoLimpar()
    })

    function mensagemCriar() {
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
        $alvo.classList.add('max-w-[12rem]', 'break-words', 'bg-white', 'text-neutral-500', 'hover:-translate-y-0.5', 'hover:transition-transform', 'duration-300', 'shadow-md', 'self-end', 'p-2', 'rounded-l-xl', 'rounded-tr-xl', 'opacity-0', 'transition-opacity')
    }

    function campoLimpar() {
        $campoEnviar.value = ''
    }
}