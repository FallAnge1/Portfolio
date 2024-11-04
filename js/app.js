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

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
  })

  gsap.fromTo(
    '.gsap-skills',
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: '.gsap-skills',
        scrub: true,
      },
    }
  )
  gsap.fromTo(
    '.gsap-photo',
    { x: -250, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.gsap-photo',
        scrub: true,
      },
    }
  )
  gsap.fromTo(
    '.skills_left',
    { x: -50, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.skills_left',
        scrub: true,
      },
    }
  )
  gsap.fromTo(
    '.skills_right',
    { x: +250, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.skills_right',
        scrub: true,
      },
    }
  )
  gsap.fromTo(
    '.form',
    { y: 0, opacity: 0 },
    {
      y: -100,
      opacity: 1,
      scrollTrigger: {
        start: '-1000',
        end: '-300',
        trigger: '.form',
        scrub: true,
      },
    }
  )
}
