$(document).ready( function() {
    //This code will run after your page loads
    $(".light-left").hover(function() {
      $('.lights-wrapper').addClass('light-left-on')
    },function(){
      $('.lights-wrapper').removeClass('light-left-on')
    });
});