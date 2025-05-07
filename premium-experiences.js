document.querySelectorAll('.reserve-experience-button').forEach(bottone => {
    bottone.addEventListener('click', (event) => {
        event.preventDefault()
        document.getElementById('Premium-experience-modal').style.display = 'block'
    })
})

document.querySelector('.close-modal-of-form').addEventListener('click', () => {
    document.getElementById('Premium-experience-modal').style.display = 'none'
})

const contatoreOspiti = document.getElementById('guest-count')
let ospiti = 1

document.getElementById('increase').addEventListener('click', () => {
    ospiti++
    contatoreOspiti.textContent = ospiti
})

document.getElementById('decrease').addEventListener('click', () => {
    if (ospiti > 1) {
        ospiti--
        contatoreOspiti.textContent = ospiti
    }
})

const ilForm = document.querySelector('.the-modal-form-of-P-E')
const modaleBox = document.querySelector('.form-box-of-P-E')

const messaggioSuccesso = document.createElement('p')
messaggioSuccesso.textContent = 'Thank you for contacting us!'
messaggioSuccesso.style.color = '#C4A55F'
messaggioSuccesso.style.textAlign = 'center'
messaggioSuccesso.style.marginTop = '80px'
messaggioSuccesso.style.fontWeight = '600'
messaggioSuccesso.style.display = 'none'
modaleBox.appendChild(messaggioSuccesso)

ilForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const datiPrenotazione = {
        data: document.getElementById('preferred-date-of-exp').value,
        ospiti: document.getElementById('guest-count').textContent,
        nome: document.getElementById('first-name-PE').value,
        cognome: document.getElementById('last-name-PE').value,
        email: document.getElementById('email-PE').value,
    }

    console.log('Dati mockati inviati:', datiPrenotazione)

    const archivioPrenotazioni = JSON.parse(localStorage.getItem('reservationData')) || []
    archivioPrenotazioni.push(datiPrenotazione)
    localStorage.setItem('reservationData', JSON.stringify(archivioPrenotazioni))

    ilForm.style.display = 'none'
    messaggioSuccesso.style.display = 'block'

    setTimeout(() => {
        ilForm.reset()
        ospiti = 1
        contatoreOspiti.textContent = ospiti
        messaggioSuccesso.style.display = 'none'
        ilForm.style.display = 'flex'
        document.getElementById('Premium-experience-modal').style.display = 'none'
    }, 4000)
})
