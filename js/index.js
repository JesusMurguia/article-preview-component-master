$(document).ready(function(){
    var elem = '<div id="active-desktop-author-info" class="col-12 author-info-desktop-active-state"> <div class="row share-row"> <div class="col-3 share-text">SHARE</div> <div class="col-8 d-flex"> <div class="facebook-button"></div> <div class="twitter-button"></div> <div class="pinterest-button"></div> </div> </div> </div>';
    $('[data-bs-toggle="popover"]').popover({animation:true, content:elem, html:true});  

    var normalAuthorInfo = document.getElementById('normal-author-info');
    var activeAuthorInfo = document.getElementById('active-author-info');
    var normalButton = document.getElementById('mobile-share-button');

    var activeButton = document.getElementById('mobile-share-button-active');
    normalButton.addEventListener('click', function(e) {
        e.preventDefault();
            normalAuthorInfo.style.display = 'none';
            activeAuthorInfo.style.display = 'block';
        });

    activeButton.addEventListener('click', function(e) {
        e.preventDefault();
            normalAuthorInfo.style.display = 'block';
            activeAuthorInfo.style.display = 'none';
        });

  });