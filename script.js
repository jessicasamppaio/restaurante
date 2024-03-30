$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#banner', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 3000,
        distance: '20%'
    })
});

ScrollReveal().reveal('h1', {
    duration: 1000,
    delay: 200,
    distance: '50px',
    origin: 'bottom'
  });

  
  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  
  window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 100) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });