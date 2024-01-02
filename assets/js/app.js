$(document).ready(function(){
    
// include html
  let includes = $('[data-include]')
  jQuery.each(includes, function(){
    let html = '/' + $(this).data('include') + '.html'
    $(this).load(html)
  })
  $('[data-bs-toggle="tooltip"]').tooltip()

  $('.product-thumbnail').slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
  });
  $('.hero-slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    prevArrow: "<button class='slick-arrow-button left-arrow'><i class='bx bx-chevron-left'></i></button>",
    nextArrow: "<button class='slick-arrow-button right-arrow'><i class='bx bx-chevron-right'></i></button>",   
  });

  $('.match-height').matchHeight()

  $('input[name="billingAddress"]').change(function(){
    if($(this).val() === 'sameAddress'){
      $('.newBillingAddress').hide()
    }
    else{
      $('.newBillingAddress').show()
    }
  })

})

$(document).ajaxStop(function(){
  $('.match-height').matchHeight()
  $('[data-bs-toggle="tooltip"]').tooltip()
})