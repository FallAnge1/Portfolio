const textToCopy = 'sako.delovoi@gmail.com'

document.getElementById('email_me').addEventListener('click', (e) => {
  e.preventDefault()
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      document.getElementById('email_me').textContent = 'Скопировано'
      document.getElementById('copyed').textContent = 'sako.delovoi@gmail.com'
      setTimeout(() => {
        document.getElementById('email_me').textContent = 'Email'
        document.getElementById('copyed').textContent = ''
      }, 2000)
    })
    .catch((err) => {
      console.error('Ошибка при копировании текста: ', err)
    })
})
