$(document).ready(function(){
  $(".card--custom__item").hover(function()
  {
     $(this).toggleClass('card--custom__item--hovered');
  });

  $('.browse__link').hover(function(){
    $('.browse__menu').show();
    $('.main').hover(function(){
      $('.browse__menu').hide();
    });
  });

  $('.navbar-collapse').on('show.bs.collapse', function() {
    $('.navbar').addClass('navbar-expanded');
  });
  $('.navbar-collapse').on('hide.bs.collapse', function() {
    $('.navbar').removeClass('navbar-expanded');
  });

  $('.cat-sect:nth-child(7)').show();

  $('.archive__navigation__item').click(function(){
    $('.cat-sect').hide();
    $('.archive__navigation__item').each(function(){
      $(this).removeClass('active');
    });
    $(this).addClass('active');
    let href = $(this).attr('href').replace('#', '');
    $('#cat-sect--' + href).show();
  });

  $('#search-form .input-group-append').click(function(){
    $('#search-form').submit();
  });

  $('#search-form-sidebar .input-group-append').click(function(){
    $('#search-form-sidebar').submit();
  });

  if ((window.location.href === "https://semperhl.zendesk.com/hc/en-us") || (window.location.href.indexOf("https://semperhl.zendesk.com/hc/en-us#") > -1) ){
    $('body').addClass('home');
  };

  if ($('.hidden-breadcrumbs').length > 0) {
    $('.breadcrumbs').html('<li><a href="javascript:history.go(-1)"><i class="far fa-long-arrow-alt-left" aria-hidden="true"></i></a></li>' + $('.hidden-breadcrumbs').html());
  }

  if ($('div[id^=promoted-category]').length > 0) {
    $('li:contains("Emptyli")').remove();

    $('div[id^=promoted-category]').css('display', 'none');
    $('#promoted-category-360000014226').css('display', 'block');
    $('#promoted-category-115001128486').css('display', 'block');
    $('#promoted-category-360002454112').css('display', 'block');
  }

  $('.card--custom__item a').click(function(e){
    e.preventDefault();
    $('div[id^=promoted-category]').css('display', 'none');
    console.log($(this).parent().attr('id'));
    if ($(this).parent().attr('id') == 'card--lo') {
      $('#promoted-category-115001128506').css('display', 'block');
      $('#promoted-category-115001128446').css('display', 'block');
      $('#promoted-category-360002454112').css('display', 'block');
    }
    if ($(this).parent().attr('id') == 'card--loa') {
      $('#promoted-category-360000014226').css('display', 'block');
      $('#promoted-category-115001128486').css('display', 'block');
      $('#promoted-category-360002454112').css('display', 'block');
    }
    if ($(this).parent().attr('id') == 'card--bm') {
      $('#promoted-category-360000014226').css('display', 'block');
      $('#promoted-category-115001128486').css('display', 'block');
      $('#promoted-category-360002454112').css('display', 'block');
    }
    $("html, body").animate({ scrollTop: $('#featured').offset().top - 200 }, 500);
  });


  $('.dropdown').hover(function(){
    $('.megamenu').slideDown();

  });
  $('masthead').mouseenter(function(){

    $('.megamenu').slideUp();
  })

  $('.dropdown').mouseenter(function () {
         // $(this).hide();
         $('.megamenu').slideDown();
       });

   $('.megamenu').mouseleave(function () {
         // $('#hover_tutor').show();
       $(this).slideUp();
       }
   ).mouseleave();//trigger mouseleave to hide second div in beginning

   $('.hidden-timeline').hide();

   $('.cal-buttons a').click(function(){
     $('.cal-buttons a').each(function(){
       $(this).removeClass('active');
     });
     var sectiontoshow = $(this).attr('id').split('btn-');
     $('.hidden-timeline').hide();
     $('#' + sectiontoshow[1]).show();
     $(this).addClass('active');
   });
   $('.cal-buttons a:first-of-type').click();

   $('.hidden-timeline2').hide();

   $('.cal-buttons2 a').click(function(){
     $('.cal-buttons2 a').each(function(){
       $(this).removeClass('active');
     });
     var sectiontoshow = $(this).attr('id').split('btn-');
     $('.hidden-timeline2').hide();
     $('#' + sectiontoshow[1]).show();
     $(this).addClass('active');
   });
   $('.cal-buttons2 a:first-of-type').click();

  //
  // const $dropdown = $(".dropdown");
  // const $dropdownToggle = $(".dropdown-toggle");
  // const $dropdownMenu = $(".dropdown-menu");
  // const showClass = "show";
  //
  // $(window).on("load resize", function() {
  //   if (this.matchMedia("(min-width: 768px)").matches) {
  //     $dropdown.hover(
  //       function() {
  //         const $this = $(this);
  //         $this.addClass(showClass);
  //         $this.find($dropdownToggle).attr("aria-expanded", "true");
  //         $this.find($dropdownMenu).addClass(showClass);
  //       },
  //       function() {
  //         const $this = $(this);
  //         $this.removeClass(showClass);
  //         $this.find($dropdownToggle).attr("aria-expanded", "false");
  //         $this.find($dropdownMenu).removeClass(showClass);
  //       }
  //     );
  //   } else {
  //     $dropdown.off("mouseenter mouseleave");
  //   }
  // });

  function setPosition() {
    $(".category__sidebar").css({
      'position': 'sticky',
      'top': window.innerHeight - $(".category__sidebar").innerHeight() - 200
    });
  }

  // Set initial positioin
  setPosition();

  // Adjust position when window is resized
  $(window).resize(setPosition);

  $('.megamenu__section').hide();
  $('.megamenu__section:first-child').show();
  $('.megamenu__navigation li:first-child a').addClass('active');

  $('.megamenu__navigation a').each(function(){
    $(this).hover(function(){
      $('.megamenu__navigation a').each(function(){
        $(this).removeClass('active');
      })
      $(this).addClass('active');
      $('.megamenu__section').hide();
      $('#' + $(this).attr('id') + '--section').show();
    });
  })

})
