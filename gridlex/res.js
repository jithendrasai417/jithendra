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