
(function () {
    $(document).ready(function () {
      $('#show1').slideDown();
      $(".bar").on("click", function () {
        $(this).siblings().slideToggle();
        $(this).parent().siblings().find(".show").slideUp();
        $(this).toggleClass("active");

        $(this).parent().siblings().find(".bar").removeClass("active");
        $(this).children().toggleClass("bi bi-caret-up-fill");
        $(this).children().toggleClass("bi bi-caret-down-fill");
        $(this).parent().siblings().find("i").removeClass("bi bi-caret-up-fill");
        $(this).parent().siblings().find("i").addClass("bi bi-caret-down-fill");
      });
      $('#bar1').click(function(){
          $('#show2').slideUp();
          $('#show3').slideUp();
      });
      $('#bar2').click(function(){
        $('#show1').slideUp();
        $('#show3').slideUp();
      });
      $('#bar3').click(function(){
        $('#show1').slideUp();
        $('#show2').slideUp();
      });
      $('.bt1').click(function(){
        $('.show1_img').attr('src','image/word_image1-2.png');
        $(this).remove();
        $('.bt2').fadeIn("slow");
      });
      $('.bt2').click(function(){
        $('.show1_img').attr('src','image/word_image1-3.jpg');
        $(this).remove();
        $('.bd1').fadeIn("slow");
      });
      $('.bd1').click(function(){
        $('.show1_img').attr('src','image/word_image1-5.png');
        $(this).remove();
      });
      $('.bd2').mousedown(function(event){
        switch (event.which) {
          case 3:
            $('.show2_img').attr('src','image/word_image2-2.png');
            $(this).remove();
            break;
        }
        $('.bd3').fadeIn("slow");
      });
      $('.bd3').click(function(){
        $('.show2_img').attr('src','image/word_image2-3.png');
        $(this).remove();
        $('.bd4').fadeIn("slow");
      });
      $('.bd4').click(function(){
        $('.show2_img').attr('src','image/word_image2-4.png');
        $(this).remove();
        $('.bt3').fadeIn("slow");
      });
      $('.bt3').click(function(){
        $('.show2_img').attr('src','image/word_image2-5.png');
        $(this).remove();
      });
      $('.bt4').click(function(){
        $('.show3_img').attr('src','image/word_image3-2.png');
        $(this).remove();
        $('.bd5').fadeIn("slow");
      });
      $('.bd5').click(function(){
        $('.show3_img').attr('src','image/word_image3-4.png');
        $(this).remove();
      });
      $('.vdTag1').click(function(){
        $('.vid').attr('src','https://www.youtube.com/embed/LigzdLJ0G0E');
      });
      $('.vdTag2').click(function(){
        $('.vid').attr('src','https://www.youtube.com/embed/zXaCQ7LSqJw');
      });
    });
 })();