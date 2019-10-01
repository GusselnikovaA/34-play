
    // Скрипт слайдера
    $(document).ready(function () {
      // СЛАЙДЕР В БЛОКЕ HERO 
      $('.hero-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 2000,
        arrows: true,
        dots: true,
        prevArrow: $('.hero-arrows__left'),
        nextArrow: $('.hero-arrows__right'),
        responsive: [{
            breakpoint: 890,
            settings: {
              arrows: false,
            }
          },
          {
            breakpoint: 414,
            settings: "unslick"
          }]
      });

      // СЛАЙДЕР В БЛОКЕ HERO mobile 
      $('.hero-slider_mobile').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 2000,
        arrows: false,
        dots: true,
      });

      // СЛАЙДЕР В БЛОКЕ EDGE 
      $('.edge-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 2000,
        prevArrow: $('.edge-arrows__left'),
        nextArrow: $('.edge-arrows__right'),
        responsive: [
          {
          breakpoint: 850,
          settings: {
            slidesToShow: 1,
          },
        }
        ]
      });
      // function slickify() {
      //   $('.edge-slider').slick({
      //     slidesToShow: 3,
      //     slidesToScroll: 1,
      //     speed: 2000,
      //     mobileFirst: true,
      //     prevArrow: $('.edge-arrows__left'),
      //     nextArrow: $('.edge-arrows__right'),
      //     responsive: [{
      //       breakpoint: 1350,
      //       settings: "unslick",
      //     }]
      //   });
      // }
      // slickify();
      // $(window).resize(function () {
      //   var $windowWidth = $(window).width();
      //   if ($windowWidth > 1350) {
      //     slickify();
      //   }
      // });

      // СЛАЙДЕР В БЛОКЕ BRAND
      $('.brand-slider').slick({
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 2000,
        prevArrow: $('.brand-arrows__left'),
        nextArrow: $('.brand-arrows__right'),
        dotsClass: 'brand-dots',
        responsive: [{
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 1000,
            settings: {
              arrows: false,
              dots: true,
              // centerMode: true,
              // centerPadding: '90px',
              slidesToShow: 3,
              // focusOnSelect: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              centerMode: true,
              centerPadding: '70px',
              arrows: false,
              dots: true,
              slidesToShow: 1
              // focusOnSelect: true,
            }
          }
        ]
      });

      // СЛАЙДЕР В БЛОКЕ BEST
      $('.best-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 2000,
        dots: true,
        prevArrow: $('.best-arrows__left'),
        nextArrow: $('.best-arrows__right'),
        responsive: [{
            breakpoint: 1350,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 880,
            settings: {
              slidesToShow: 2,
              arrows: false
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              dots: false
            }
          }
        ]
      });

      // СЛАЙДЕР В БЛОКЕ FOLLOW
      $('.follow-slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 2000,
        prevArrow: $('.follow-arrows__left'),
        nextArrow: $('.follow-arrows__right'),
        responsive: [
        {
          breakpoint: 1800,
          settings: {
            centerMode: true,
            slidesToShow: 7
          }
        },
        {
          breakpoint: 1500,
          settings: {
            centerMode: true,
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1100,
          settings: {
            centerMode: true,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 500,
          settings: {
            centerMode: true,
            slidesToShow: 1
          }
        }]
      });
    });