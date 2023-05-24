$(document).ready(function() {
    // Navbar Sticky on Scroll
    $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
        $('.navbar').addClass('sticky');
      } else {
        $('.navbar').removeClass('sticky');
      }
    });

    // Image Carousel Auto Scroll
    $('.carousel').carousel({
      interval: 2000, // Change interval time as desired
      pause: 'hover'
    });

    // Counter Animation
    function animateCounter() {
      $('#counter').prop('counter', 0).animate({
        counter: 93
      }, {
        duration: 2000, // Change animation duration as desired
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      });

      $('#counter1').prop('counter', 0).animate({
        counter: 93
      }, {
        duration: 2000, // Change animation duration as desired
        step: function(now) {
          $(this).text(Math.ceil(now) + '%');
        }
      });
    }

    animateCounter();

    // Collapse/Expand Contact Details
    $('#collapseBtn').click(function() {
      $('.sec').toggleClass('sticky');
      $('.details').toggleClass('hidden');
    });

    // Submit Button Click
    $('#submitBtn').click(function(e) {
      e.preventDefault();
      var name = $('#name').val();
      var email = $('#email').val();
      var message = $('#message').val();

      $('#submittedName').text(name);
      $('#submittedEmail').text(email);
      $('#submittedMessage').text(message);

      $('#popup').fadeIn();
    });

    // Close Popup
    $('#closeBtn').click(function() {
      $('#popup').fadeOut();
    });
  });
  var counter1 = 0;
  var progressBar1 = document.querySelectorAll(".progress-bar")[0];
  var counterText1 = document.querySelectorAll(".counter")[0];

  var intervalId1 = setInterval(function() {
    counter1++;
    progressBar1.style.width = counter1 + "%";
    progressBar1.setAttribute("aria-valuenow", counter1);
    counterText1.innerText = counter1;

    if (counter1 === 100) {
       counter1 = 0
    }
  }, 300);

  var counter2 = 0;
  var progressBar2 = document.querySelectorAll(".progress-bar")[1];
  var counterText2 = document.querySelectorAll(".counter")[1];

  var intervalId2 = setInterval(function() {
    counter2++;
    progressBar2.style.width = counter2 + "%";
    progressBar2.setAttribute("aria-valuenow", counter2);
    counterText2.innerText = counter2;

    if (counter2 === 100) {
      counter2=0;
    }
  }, 300);