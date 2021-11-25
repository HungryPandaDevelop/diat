$(function () {
  var owlPoster = $(".poster-owl");

  owlPoster.owlCarousel({
    items: 1,
    nav: false,
    dots: true
  });

  var projectsSectionOwl = $(".projects__section__owl");

  projectsSectionOwl.owlCarousel({
    margin: 15,
    responsive : {
      // breakpoint from 0 up
      0 : {
        items: 1,
        nav: false,
        dots: false,
   

      },
      // breakpoint from 768 up
      768 : {
        items: 3,
        nav: true,
        dots: false,
      }
  }
  });

  var owlPartners = $(".partners__section__owl");

  owlPartners.owlCarousel({
    items: 3,
    nav: false,
    dots: false,
    margin: 15,
    stagePadding: 50
  });



});


