$(window).scroll(function() {
    var height = $('#carousel').height();
    $('nav').toggleClass('bg-thema-scrolled', $(this).scrollTop() > (height-50));
});