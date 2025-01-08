const toggle = document.querySelector('.btn');
const navbar = document.querySelector('.navd');

let t = 0;
toggle.addEventListener('click', () => {
  if (t==0) {
    navbar.style.transform = 'translateX(0)';
    t=1;
    toggle.style.filter = 'invert(0)';
    toggle.style.transform = 'translateX(-16vw)';
  } else {
    navbar.style.transform = 'translateX(20vw)';
    t=0
    toggle.style.filter = 'invert(1)';
    toggle.style.transform = 'translateX(0)';
  }

  console.log(t)
  console.log('clicked');
});