$(document).ready(function() {
  $(".light-left").hover(
    function() { 
      $(".lights-wrapper").toggleClass('light-left-on'); 
    }
  );
});