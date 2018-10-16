
  var navMain = document.querySelector('.main-navi');
  var navToggle = document.querySelector('.main-navi__toggle');

  navMain.classList.remove('main-navi--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-navi--closed')) {
      navMain.classList.remove('main-navi--closed');
      navMain.classList.add('main-navi--opened');
    } else {
      navMain.classList.add('main-navi--closed');
      navMain.classList.remove('main-navi--opened');
    }
  });
