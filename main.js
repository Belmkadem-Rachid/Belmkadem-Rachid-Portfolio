/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Show menu */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Hide menu */
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

/*=============== HOME TEXT CIRCULAR ===============*/
const homeText = document.getElementById('home-text'),
      letters = homeText.textContent.trim().split(''),
      angleStep = 360 / letters.length

homeText.textContent = ''

letters.forEach((char, i) => {
  const span = document.createElement('span')
  span.textContent = char
  span.style.transform = `rotate(${i * angleStep}deg)`
  homeText.appendChild(span)
})


/*=============== HOME TYPED JS ===============*/
const typedHome = new Typed('#home-typed', {
  strings: ['Aspiring', 'Web Developer', ' Freelancer'],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  loop: true,
})

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('scroll-header')
                      : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER WORK ===============*/
const swiperWork = new Swiper('.work__swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  centeredSlides: true,
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
})

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


/*=============== SERVICES ACCORDION ===============*/
const canvas = document.getElementById('footer-net');
const ctx = canvas.getContext('2d');
function resize(){ canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
resize();
window.addEventListener('resize', resize);

const N = 42;
const nodes = Array.from({length: N}, () => ({
  x: Math.random()*canvas.width, y: Math.random()*canvas.height,
  vx: (Math.random()-0.5)*0.25, vy: (Math.random()-0.5)*0.25,
  r: Math.random()*1.8+1
}));

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  nodes.forEach(a => {
    a.x += a.vx; a.y += a.vy;
    if (a.x<0||a.x>canvas.width) a.vx*=-1;
    if (a.y<0||a.y>canvas.height) a.vy*=-1;
  });
  for (let i=0;i<N;i++) for (let j=i+1;j<N;j++){
    const a=nodes[i], b=nodes[j];
    const dist = Math.hypot(a.x-b.x, a.y-b.y);
    if (dist < 130){
      ctx.strokeStyle = `rgba(150,160,190,${1-dist/130})`;
      ctx.lineWidth = 0.6;
      ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
    }
  }
  nodes.forEach((a,i) => {
    ctx.beginPath(); ctx.arc(a.x,a.y,a.r,0,Math.PI*2);
    ctx.fillStyle = i % 5 === 0 ? '#ffb37b' : '#7c5cff';
    ctx.fill();
  });
  requestAnimationFrame(draw);
}
draw();

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/


/*=============== CONTACT EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== CUSTOM CURSOR ===============*/


/*=============== SCROLLREVEAL ANIMATION ===============*/