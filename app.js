$(document).ready(function() {
  $(".light-left").hover(
    function() { 
      $(".lights-wrapper").toggleClass('light-left-on'); 
    }
  );
  
  $(".light-center").hover(
    function() { 
      $(".lights-wrapper").toggleClass('light-center-on'); 
    }
  );
  
  $(".light-right").hover(
    function() { 
      $(".lights-wrapper").toggleClass('light-right-on'); 
    }
  );
});