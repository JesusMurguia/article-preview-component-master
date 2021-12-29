$(document).ready(function(){
    var elem = '<span>SHARE</span><div class="michelle-avatar"></div>';


    $('[data-bs-toggle="popover"]').popover({animation:true, content:elem, html:true});  

  });