/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ACCENT COLOR SWITCHER ===============*/
const themeToggle = document.getElementById('theme-toggle')
const hues = [110, 255, 28, 195]
let hueIndex = 0

const savedHue = localStorage.getItem('selected-hue')
if (savedHue) {
  document.documentElement.style.setProperty('--hue', savedHue)
  hueIndex = hues.indexOf(Number(savedHue))
  if (hueIndex === -1) hueIndex = 0
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    hueIndex = (hueIndex + 1) % hues.length
    const newHue = hues[hueIndex]
    document.documentElement.style.setProperty('--hue', newHue)
    localStorage.setItem('selected-hue', newHue)
  })
}

/*=============== HOME TEXT CIRCULAR ===============*/
const homeText = document.getElementById('home-text')
if (homeText) {
  const letters = homeText.textContent.trim().split(''),
    angleStep = 360 / letters.length

  homeText.textContent = ''

  letters.forEach((char, i) => {
    const span = document.createElement('span')
    span.textContent = char
    span.style.transform = `rotate(${i * angleStep}deg)`
    homeText.appendChild(span)
  })
}

/*=============== HOME TYPED JS ===============*/
if (document.getElementById('home-typed')) {
  const typedHome = new Typed('#home-typed', {
    strings: [' Discourse Researcher', 'data analyst',],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
  })
}

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header')
  window.scrollY >= 50 ? header.classList.add('scroll-header')
    : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER WORK ===============*/
const swiperWork = new Swiper('.work__swiper', {
  loop: true,
  loopAdditionalSlides: 6,
  spaceBetween: 24,
  slidesPerView: 1.15,
  grabCursor: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    540: { slidesPerView: 1.6 },
    900: { slidesPerView: 2.3 },
    1150: { slidesPerView: 3.2 },
    1450: { slidesPerView: 3.6 },
  },
})

const workPrev = document.querySelector('.work__prev')
const workNext = document.querySelector('.work__next')
if (workPrev) workPrev.addEventListener('click', () => swiperWork.slidePrev())
if (workNext) workNext.addEventListener('click', () => swiperWork.slideNext())

/*=============== EXPERIENCE TABS ===============*/
const experienceTabs = document.querySelectorAll('.experience__tab'),
  experiencePanels = document.querySelectorAll('.experience__panel')

experienceTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    experienceTabs.forEach(t => t.classList.remove('active-tab'))
    experiencePanels.forEach(p => p.classList.remove('active-panel'))

    tab.classList.add('active-tab')

    const target = tab.getAttribute('data-target')
    document.getElementById(target).classList.add('active-panel')
  })
})

/*=============== FOOTER NETWORK CANVAS (only runs when visible) ===============*/
const canvas = document.getElementById('footer-net')
if (canvas) {
  const ctx = canvas.getContext('2d')
  function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
  resize()
  window.addEventListener('resize', resize)

  const N = 42
  const nodes = Array.from({ length: N }, () => ({
    x: Math.random() * canvas.width, y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
    r: Math.random() * 1.8 + 1
  }))

  let animationId = null

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    nodes.forEach(a => {
      a.x += a.vx; a.y += a.vy
      if (a.x < 0 || a.x > canvas.width) a.vx *= -1
      if (a.y < 0 || a.y > canvas.height) a.vy *= -1
    })
    for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
      const a = nodes[i], b = nodes[j]
      const dist = Math.hypot(a.x - b.x, a.y - b.y)
      if (dist < 130) {
        ctx.strokeStyle = `rgba(150,160,190,${1 - dist / 130})`
        ctx.lineWidth = 0.6
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
      }
    }
    nodes.forEach((a, i) => {
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
      ctx.fillStyle = i % 5 === 0 ? '#ffb37b' : '#7c5cff'
      ctx.fill()
    })
    animationId = requestAnimationFrame(draw)
  }

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animationId) {
        draw()
      } else if (!entry.isIntersecting && animationId) {
        cancelAnimationFrame(animationId)
        animationId = null
      }
    })
  })
  footerObserver.observe(canvas)
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.scrollY

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 58,
      sectionId = section.getAttribute('id'),
      sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if (!sectionsClass) return

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)