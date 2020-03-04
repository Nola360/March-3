// const menuButton = document.querySelector('.fas.fa-bars');

// menuButton.addEventListener('click', function (e) {
//   let menuBtn = e.target;
//   let menu = document.querySelector('.button')
//   console.log(menuBtn);
//   if (menuBtn.className === '.fas.fa-bars') {
//     menu.classList.toggle('expand');
//   }

// })



$(document).ready(function () {
  $('.button').click(function () {
    if ($(this).hasClass('expand')) {
      $('ul').slideUp(function () {
        $('.button').removeClass('expand');
        $('.fas').removeClass('expand');
      });

    } else {
      $(this).addClass('expand');
      setTimeout(function () {
        $('.fas').addClass('expand');
        $('ul').stop().slideDown();
      }, 200)
    }

  });
});