const flagg = document.querySelector('.flag')
const form = document.querySelector('#flag-form')
const plus = document.querySelector('.plus')
console.log(1)

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const flagVal = document.querySelector('#flag').value

    const response = await fetch('/flag', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            flag: flagVal
        })
    })

    const result = await response.json()

    if(response.ok) {
        flagg.textContent = result.score
        alert(result.message)
    } else {
        alert(result.message)
    }
})