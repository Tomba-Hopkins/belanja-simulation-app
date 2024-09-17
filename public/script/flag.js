const flagg = document.querySelector('.flag')
const form = document.querySelector('#flag-form')

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const flagVal = flagg.value

    const response = await fetch('/flag', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            flag: flagVal
        })
    })

    const result = response.json()

    if(response.ok) {
        flagg.textContent = result.score
    } else {
        alert(result.message)
    }
})