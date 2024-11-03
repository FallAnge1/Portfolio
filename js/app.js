const textToCopy = 'sako.delovoi@gmail.com'

document.getElementById('email_me').addEventListener('click', (e) => {
  e.preventDefault()
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      document.getElementById('copyed').classList.remove('hidden')
      document.getElementById('email_me').textContent = 'sako.delovoi@gmail.com'
      setTimeout(() => {
        document.getElementById('copyed').classList.add('hidden')
        document.getElementById('email_me').textContent = 'Email'
      }, 3000)
    })
    .catch((err) => {
      console.error('Ошибка при копировании текста: ', err)
    })
})
