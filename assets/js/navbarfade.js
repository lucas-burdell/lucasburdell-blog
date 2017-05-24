(function() {
    $(document).ready(function(){

       $("#autohiding-navbar").hide();
        $(function() {
            $(window).scroll(function(){
                if ($(this).scrollTop() > 100) {
                    $("#autohiding-navbar").fadeIn();
                 } else {
                    $('#autohiding-navbar').fadeOut();
                 }
            });
        });
    });
}());
           

