const TOKEN = '7647684508:AAEfWiAyfujY5k6ARySkrtKyEVPBTconumc'
const CHAT_ID = '-4540151485'
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

const success = document.querySelector('.success')
console.log('hello')
document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault()

  let message =
    'Заявка с сайта!\n' +
    'Имя: ' +
    this.name.value +
    '\n' +
    'Номер телефона: ' +
    this.phone.value +
    '\n' +
    'email: ' +
    this.email.value

  axios
    .post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    })
    .then((res) => {
      success.classList.remove('hidden')
    })
    .catch((err) => {
      console.warn(err)
    })
    .finally(() => {
      console.log('Скрипт выполнен')
    })
  this.name.value = ''
  this.phone.value = ''
  this.email.value = ''
})
