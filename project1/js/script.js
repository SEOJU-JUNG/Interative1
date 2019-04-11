$(document).ready(function(){
  //Navigation
  // $('.circle_MON').hover(function(){
  //   $(this).toggleClass('hovered');
  // });
  // $('.circle_MON').click(function(){
  //   $(this).addClass('hovered');
  //   $('.circle_TUES').removeClass('hovered');
  // });
  // $('.circle_TUES').click(function(){
  //   $(this).addClass('hovered');
  //   $('.circle_MON').removeClass('hovered');
  // });

  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var num = document.getElementById('nav_tiggerbox').offsetTop;
    if (scrollTop>num) {
      $('.main_nav').addClass('fixed');
    }else{
      $('.main_nav').removeClass('fixed');
    }
    //nav
    var mon = document.getElementById('MONBOX').offsetTop;
    var tues = document.getElementById('TUESBOX').offsetTop;
    var wed = document.getElementById('WEDBOX').offsetTop;
    var thurs = document.getElementById('THURSBOX').offsetTop;
    var fri = document.getElementById('FRIBOX').offsetTop;
    var sat = document.getElementById('SATBOX').offsetTop;
    var sun = document.getElementById('SUNBOX').offsetTop;



    if(scrollTop<mon){
      $('.circle_MON').removeClass('hovered');
      $('.circle_TUES').removeClass('hovered');
      $('.circle_WED').removeClass('hovered');
      $('.circle_THURS').removeClass('hovered');
      $('.circle_FRI').removeClass('hovered');
      $('.circle_SAT').removeClass('hovered');
      $('.circle_SUN').removeClass('hovered');
    }
    if (scrollTop>=mon) {
      if(scrollTop<tues){
        $('.scroll1').addClass('scroll_ani');
      }
      $('.circle_MON').addClass('hovered');
      $('.circle_TUES').removeClass('hovered');
      $('.circle_WED').removeClass('hovered');
      $('.circle_THURS').removeClass('hovered');
      $('.circle_FRI').removeClass('hovered');
      $('.circle_SAT').removeClass('hovered');
      $('.circle_SUN').removeClass('hovered');
    }if (scrollTop>=tues) {
      if(scrollTop<wed){
        $('.scroll2').addClass('scroll_ani');
      }
      $('.circle_TUES').addClass('hovered');
      $('.circle_MON').removeClass('hovered');
      $('.circle_WED').removeClass('hovered');
      $('.circle_THURS').removeClass('hovered');
      $('.circle_FRI').removeClass('hovered');
      $('.circle_SAT').removeClass('hovered');
      $('.circle_SUN').removeClass('hovered');
    }if (scrollTop>=wed) {
      if(scrollTop<thurs){
        $('.scroll3').addClass('scroll_ani');
      }
      $('.circle_WED').addClass('hovered');
      $('.circle_MON').removeClass('hovered');
      $('.circle_TUES').removeClass('hovered');
      $('.circle_THURS').removeClass('hovered');
      $('.circle_FRI').removeClass('hovered');
      $('.circle_SAT').removeClass('hovered');
      $('.circle_SUN').removeClass('hovered');
    }if (scrollTop>=thurs) {
      $('.circle_THURS').addClass('hovered');
      $('.circle_MON').removeClass('hovered');
      $('.circle_TUES').removeClass('hovered');
      $('.circle_WED').removeClass('hovered');
      $('.circle_FRI').removeClass('hovered');
      $('.circle_SAT').removeClass('hovered');
      $('.circle_SUN').removeClass('hovered');
    }if (scrollTop>=fri) {
      $('.circle_FRI').addClass('hovered');
      $('.circle_MON').removeClass('hovered');
      $('.circle_TUES').removeClass('hovered');
      $('.circle_WED').removeClass('hovered');
      $('.circle_THURS').removeClass('hovered');
      $('.circle_SAT').removeClass('hovered');
      $('.circle_SUN').removeClass('hovered');
    }if (scrollTop>=sat) {
      $('.circle_SAT').addClass('hovered');
      $('.circle_MON').removeClass('hovered');
      $('.circle_TUES').removeClass('hovered');
      $('.circle_WED').removeClass('hovered');
      $('.circle_THURS').removeClass('hovered');
      $('.circle_FRI').removeClass('hovered');
      $('.circle_SUN').removeClass('hovered');
    }if (scrollTop>=sun) {
      $('.circle_SUN').addClass('hovered');
      $('.circle_MON').removeClass('hovered');
      $('.circle_TUES').removeClass('hovered');
      $('.circle_WED').removeClass('hovered');
      $('.circle_THURS').removeClass('hovered');
      $('.circle_FRI').removeClass('hovered');
      $('.circle_SAT').removeClass('hovered');
    }
  });
  // BubbleHover
  $('.Bubble2').hover(function(){
    $('.front').toggleClass('hidden');
    $('.bubble2-text').toggleClass('unhidden');
  });
  $('.Bubble3').hover(function(){
    $('.front').toggleClass('hidden');
    $('.bubble3-text').toggleClass('unhidden');
  });
  $('.Bubble4').hover(function(){
    $('.front').toggleClass('hidden');
    $('.bubble4-text').toggleClass('unhidden');
  });

  //Clicks
  $(".MON .bttn_outline").click(function(){
    $('.MON .textbox_outline').toggleClass('appear');
  });
  $(".MON .bttn_plot").click(function(){
    $('.MON .textbox_plot').toggleClass('appear');
  });
  $(".TUES .bttn_outline").click(function(){
    $('.TUES .textbox_outline').toggleClass('appear');
  });
  $(".TUES .bttn_plot").click(function(){
    $('.TUES .textbox_plot').toggleClass('appear');
  });
  $(".WED .bttn_outline").click(function(){
    $('.WED .textbox_outline').toggleClass('appear');
  });
  $(".WED .bttn_plot").click(function(){
    $('.WED .textbox_plot').toggleClass('appear');
  });
  $(".THU .bttn_outline").click(function(){
    $('.THU .textbox_outline').toggleClass('appear');
  });
  $(".THU .bttn_plot").click(function(){
    $('.THU .textbox_plot').toggleClass('appear');
  });
  $(".FRI .bttn_outline").click(function(){
    $('.FRI .textbox_outline').toggleClass('appear');
  });
  $(".FRI .bttn_plot").click(function(){
    $('.FRI .textbox_plot').toggleClass('appear');
  });
  $(".SAT .bttn_outline").click(function(){
    $('.SAT .textbox_outline').toggleClass('appear');
  });
  $(".SAT .bttn_plot").click(function(){
    $('.SAT .textbox_plot').toggleClass('appear');
  });
  $(".SUN .bttn_outline").click(function(){
    $('.SUN .textbox_outline').toggleClass('appear');
  });
  $(".SUN .bttn_plot").click(function(){
    $('.SUN .textbox_plot').toggleClass('appear');
  });
});
