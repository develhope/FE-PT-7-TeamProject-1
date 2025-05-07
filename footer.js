window.onload = function () {
    console.log("dioc")
    document.querySelectorAll('.numbers').forEach(numero => {
        numero.addEventListener('click', () => {
            numero.style.color = '#B8995E'
    
            setTimeout(() => {
                numero.style.color = 'white'
            }, 500)
    
            navigator.clipboard.writeText(numero.textContent.trim())
    
            mostraMessaggio('Copied Number !')
        })
    })
    
    function mostraMessaggio(testo) {
        const messaggio = document.createElement('div')
        messaggio.textContent = testo
        messaggio.className = 'copy-message'
    
        document.body.appendChild(messaggio)
    
        setTimeout(() => messaggio.remove(), 1500)
        console.log("cane")
    }

}






