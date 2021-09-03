const controllers = document.querySelectorAll('.tab-controller');
const tabs = document.querySelectorAll('.tab');
const openNav = document.querySelector('.toggler');
const nav = document.querySelector('nav');
const hero = document.querySelector(".hero");

tabs[1].classList.add('active');


controllers.forEach((item, i) => {
  item.addEventListener('click', () => {
    controllers.forEach(el => {
      el.classList.remove('active')
    })
    item.classList.add('active');
    tabs.forEach(tab => {
      tab.classList.remove('active');
      tabs[i].classList.add('active')
    })
  })
})

// EMAIL VALIDATION 


const form = document.querySelector('.cta-form');
const email = document.querySelector('.email');
const btn = document.querySelector('.form-btn');

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(!email.value.trim() || !isEmail(email.value.trim())) {
    form.classList.add('error')
  } else {
    form.reset();
  }
})

email.addEventListener('focus', () => {
  form.classList.remove('error')
})

// SHOW NAVIGATION ON MOBILE

openNav.addEventListener('click', () => {
  nav.classList.toggle('active')
})



const qBtns = document.querySelectorAll('.q-btn');

qBtns.forEach(qBtn => {
  qBtn.addEventListener('click', () => {
  qBtn.parentElement.classList.toggle('show')
})
})

// intersection observer for the nav

const options = {
  root: null,
  threshold: [0, .2]
}

const showNav = (entries) => {
  const [entry] = entries;
  if(!entry.isIntersecting) {
    nav.classList.add('fixed')
  } else {
    nav.classList.remove('fixed')
  }
}

const heroObserver = new IntersectionObserver(showNav, options)

heroObserver.observe(hero)






