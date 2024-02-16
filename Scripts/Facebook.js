

// Hide By default
$(".container.message").hide();
$('.container.friends').hide();
$('.container.notifications').hide();
$('.container.video').hide();
$('.container.marketplace').hide();


$(".fa-comment").on('click', function () {
    $('.container.message').show();
    $('.container.home').hide();
    $('.container.friends').hide();
    $('.container.video').hide();
    $('.container.notifications').hide();
    $('.container.marketplace').hide();





});

$(".fa-users").on('click', function () {
    $('.container.friends').show();
    $('.container.home').hide();
    $('.container.message').hide();
    $('.container.video').hide();
    $('.container.notifications').hide();
    $('.container.marketplace').hide();





});

$(".fa-store").on('click', function () {
    $('.container.marketplace').show();
    $('.container.friends').hide();
    $('.container.home').hide();
    $('.container.message').hide();
    $('.container.video').hide();
    $('.container.notifications').hide();





});

$(".fa-bell").on('click', function () {
    $('.container.notifications').show();
    $('.container.friends').hide();
    $('.container.home').hide();
    $('.container.video').hide();
    $('.container.message').hide();
    $('.container.marketplace').hide();





});
$(".fa-video").on('click', function () {
    $('.container.video').show();
    $('.container.notifications').hide();
    $('.container.friends').hide();
    $('.container.home').hide();
    $('.container.message').hide();
    $('.container.marketplace').hide();





});

$(".fa-home").on('click', function () {
    $('.container.home').show();
    $('.container.message').hide();
    $('.container.friends').hide();
    $('.container.video').hide();
    $('.container.notifications').hide();
    $('.container.marketplace').hide();




});
$("#back").on('click', function () {
    $('.container.home').show();
});

$("#me").on('click', function () {
    $('.container.home').fadeOut(1000);

});

$("#back").on('click', function () {
    $('.container.home').show(100);
});


   // owl carousel script
   $('.carousel').owlCarousel({
    margin: -110,
    loop: false,
    autoplay: false,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});