(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


});

//Demora en entrega

let miBoton = document.getElementById(`compra1`);

  miBoton.addEventListener("click", (e) => {
    Swal.fire({
        title: 'ESTAMOS CON DEMORA EN LA ENTREGA',     
        text: 'aproximadamente 20 días',
        imageUrl: 'img/demoracompra.png',
        imageWidth: 70,
        imageHeight: 70,
        duration:3500,
        showCancelButton: true,
        confirmButtonColor: '#e88f2a',
        cancelButtonColor: '#d33',        
        cancelButtonText: "CANCELAR",
        confirmButtonText: `<a class= text-white href="https://mercadoshops.com.ar">COMPRAR</a>`,
    }); 

let miBoton2 = document.getElementById(`compra2`);

  miBoton2.addEventListener("click", (e) => {
    Swal.fire({
        title: 'ESTAMOS CON DEMORA EN LA ENTREGA',     
        text: 'aproximadamente 20 días',
        imageUrl: 'img/demoracompra.png',
        imageWidth: 70,
        imageHeight: 70,
        duration:3500,
        showCancelButton: true,
        confirmButtonColor: '#e88f2a',
        cancelButtonColor: '#d33',
        cancelButtonText: "CANCELAR",
        confirmButtonText: `<a class= text-white href="https://mercadoshops.com.ar">COMPRAR</a>`,        
    }); 

    let miBoton3 = document.getElementById(`compra3`);

    miBoton3.addEventListener("click", (e) => {
      Swal.fire({
          title: 'ESTAMOS CON DEMORA EN LA ENTREGA',     
          text: 'aproximadamente 20 días',
          imageUrl: 'img/demoracompra.png',
          imageWidth: 70,
          imageHeight: 70,
          duration:3500,
          showCancelButton: true,
          confirmButtonColor: '#e88f2a',
          cancelButtonColor: '#d33',
          cancelButtonText: "CANCELAR",
          confirmButtonText: `<a class= text-white href="https://mercadoshops.com.ar">COMPRAR</a>`,        
        
        }); 


  })
})
});
