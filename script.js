const controllers = document.querySelectorAll('.tab-controller');
const tabs = document.querySelectorAll('.tab');
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

// function showSubmitMessage() {
//  document.querySelector('.input-container').style.display = "none"
//   document.querySelector('.submit-message').style.display = "block";
// }

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(!email.value.trim() || !isEmail(email.value.trim())) {
    form.classList.add('error')
  } else {
    // setTimeout(showSubmitMessage, 600)
    form.reset();
    //form.reset();
  }
})

email.addEventListener('focus', () => {
  form.classList.remove('error')
})



