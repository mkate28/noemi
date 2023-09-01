// burger menu
const burgerMenu = document.querySelector('.burger')
const burger = burgerMenu.querySelector('.burger-line');
const menu = document.querySelector('.menu-list');

burgerMenu.onclick = () => {
  burger.classList.toggle('active');
  menu.classList.toggle('open');
  document.body.classList.toggle('locked');
}

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
  link.onclick = () => {
    if (burger.classList.contains('active')) {
      burger.classList.remove('active');
      menu.classList.remove('open');
      document.body.classList.remove('locked');
    }
  }
});

// forms 
const searchBtn = document.querySelector('.search-btn');
const formBtn = document.querySelector('.form-btn');

searchBtn.onclick = (event) => {
  event.preventDefault();
}
formBtn.onclick = (event) => {
  event.preventDefault();
  sentPopup.classList.remove('visually-hidden');
  popup.classList.add('visually-hidden');
  document.body.classList.remove('locked');
}

// modals
const popup = document.querySelector('#popup');
const sentPopup = document.querySelector('#popup-done');
const closeBtn = document.querySelector('.sent-btn');
const popupClose = document.querySelectorAll('.popup-close');

window.onload = () => {
  popup.classList.remove('visually-hidden');
  document.body.classList.add('locked');
}
popupClose.forEach(item => {
  item.addEventListener('click', () => {
    popup.classList.add('visually-hidden');
    sentPopup.classList.add('visually-hidden');
    document.body.classList.remove('locked');
  });
});
closeBtn.onclick = () => {
  sentPopup.classList.add('visually-hidden');
  document.body.classList.remove('locked');
}

// select menu
const selectBtn = document.querySelector('#select');
const list = document.querySelector('.options-list');
const items = list.querySelectorAll('.options-item');
const input = document.querySelector('.select-input');

selectBtn.addEventListener('click', function(e) {
  e.preventDefault();
  list.classList.toggle('visually-hidden');
  this.classList.add('select-active');
});
items.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.stopPropagation();
    selectBtn.innerText = this.innerText;
    list.classList.add('visually-hidden');
    input.value = this.dataset.value;
    selectBtn.classList.remove('select-active');
  })
});
document.addEventListener('click', function(event) {
  if (event.target !== selectBtn) {
    list.classList.add('visually-hidden');
    selectBtn.classList.remove('select-active');
  }
});

// scroll to top button
const scrollUp = document.querySelector('.scroll-up');
const offset = 100;
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener('scroll', () => {
  if (getTop() > offset) {
    scrollUp.classList.add('scroll-active');
  } else {
     scrollUp.classList.remove('scroll-active');
  }
});
scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});