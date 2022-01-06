
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
      $('.bd1').click(function(){
        $('.show1_img').attr('src','image/word_image1-1.png');
        $(this).remove();
        $('.bt1').fadeIn("slow");
      });
      $('.bt1').click(function(){
        $('.show1_img').attr('src','image/word2_image1-2.png');
        $(this).remove();
        $('#bd1-2').fadeIn("slow");
      });
      $('#bd1-2').click(function(){
        $('.show1_img').attr('src','image/word2_image1-3.png');
        $(this).remove();
        $('#bd1-3').fadeIn("slow");
      });
      $('#bd1-3').click(function(){
        $('.show1_img').attr('src','image/word2_image1-4.png');
        $(this).remove();
        $('#bd1-4').fadeIn("slow");
      });
      $('#bd1-4').click(function(){
        $('.show1_img').attr('src','image/word2_image1-5.png');
        $(this).remove();
        $('#bt1-2').fadeIn("slow");
      });
      $('#bt1-2').click(function(){
        $('.show1_img').attr('src','image/word2_image1-6.png');
        $(this).remove();
        $('#bt1-3').fadeIn("slow");
      });
      $('#bt1-3').click(function(){
        $('.show1_img').attr('src','image/word2_image1-7.png');
        $(this).remove();
      });
      $('#bt2-1').click(function(){
        $('.show2_img').attr('src','image/word2_image2-2.png');
        $(this).remove();
        $('#bt2-2').fadeIn("slow");
      });
      $('#bt2-2').click(function(){
        $('.show2_img').attr('src','image/word_image1-1.png');
        $(this).remove();
        $('#bt2-3').fadeIn("slow");
      });
      $('#bt2-3').click(function(){
        $('.show2_img').attr('src','image/word2_image2-4.png');
        $(this).remove();
        $('#bd2-1').fadeIn("slow");
      });
      $('#bd2-1').click(function(){
        $('.show2_img').attr('src','image/word2_image2-5.png');
        $(this).remove();
        $('#bd2-2').fadeIn("slow");
      });
      $('#bd2-2').click(function(){
        $('.show2_img').attr('src','image/word2_image2-6.png');
        $(this).remove();
        $('#bt2-4').fadeIn("slow");
      });
      $('#bt2-4').click(function(){
        $('.show2_img').attr('src','image/word2_image2-7.png');
        $(this).remove();
        $('#bd2-4').fadeIn("slow");
      });
      $('#bd2-4').click(function(){
        $('.show2_img').attr('src','image/word2_image2-8.png');
        $(this).remove();
        $('#bd2-5').fadeIn("slow");
      });
      $('#bd2-5').click(function(){
        $('.show2_img').attr('src','image/word2_image2-9.png');
        $(this).remove();
        $('#bd2-5').fadeIn("slow");
      });
      $('#bt3-1').click(function(){
        $('.show3_img').attr('src','image/word_image1-2.png');
        $(this).remove();
        $('#bd3-1').fadeIn("slow");
      });
      $('#bd3-1').click(function(){
        $('.show3_img').attr('src','image/word2_image3-1.png');
        $(this).remove();
        $('#bd3-2').fadeIn("slow");
      });
      $('#bd3-2').click(function(){
        $('.show3_img').attr('src','image/word2_image3-2.png');
        $(this).remove();
        $('#bd3-3').fadeIn("slow");
      });
      $('#bd3-3').click(function(){
        $('.show3_img').attr('src','image/word2_image3-3.png');
        $(this).remove();
        $('#bt3-2').fadeIn("slow");
      });
      $('#bt3-2').click(function(){
        $('.show3_img').attr('src','image/word2_image3-4.png');
        $(this).remove();
        $('#bt3-3').fadeIn("slow");
      });
      $('#bt3-3').click(function(){
        $('.show3_img').attr('src','image/word2_image3-5.png');
        $(this).remove();
        $('#bt3-4').fadeIn("slow");
      });
      $('#bt3-4').click(function(){
        $('.show3_img').attr('src','image/word2_image3-6.png');
        $(this).remove();
        $('#bd3-4').fadeIn("slow");
      });
      $('#bd3-4').click(function(){
        $('.show3_img').attr('src','image/word2_image3-7.png');
        $(this).remove();
        $('#bt3-5').fadeIn("slow");
      });
      $('#bt3-5').click(function(){
        $('.show3_img').attr('src','image/word2_image3-8.png');
        $(this).remove();
      });
      $('.vdTag1').click(function(){
        $('.vid').attr('src','https://www.youtube.com/embed/n8EeLEN1iUI');
      });
      $('.vdTag2').click(function(){
        $('.vid').attr('src','https://www.youtube.com/embed/4-FTm-WU5w4');
      });
    });
 })();