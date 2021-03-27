$(document).ready(function(){
    var $url = $("#top-gallery").children()[0].getAttribute('src')
    $('.icon').css({'background-image': 'url('+ $url +')', 'background-repeat': 'no-repeat', 'background-size': 'cover'});
    $( "#right" ).on( "click", function( event ) {
        $("#top-gallery").children().last().fadeOut(500, function() {
            var $last = $(this).remove();
            $last.hide();
            $("#bottom-gallery").prepend($last);
            $last.fadeIn(500);
        });
        $("#bottom-gallery").children().last().fadeOut(500, function() {
            var $last = $(this).remove();
            $last.hide();
            $("#top-gallery").prepend($last);
            $last.fadeIn(500);
        });
        var $url = $("#bottom-gallery").children().last()[0].getAttribute('src')
        $('.icon').css({'background-image': 'url('+ $url +')', 'background-repeat': 'no-repeat', 'background-position': 'center', 'background-size': 'cover'});
    });

    $("#left").on("click", function(event){
        $("#bottom-gallery").children().first().fadeOut(500, function() {
            var $last = $(this).remove();
            $last.hide();
            $("#top-gallery").append($last);
            $last.fadeIn(500);
        });
        $("#top-gallery").children().first().fadeOut(500, function() {
            var $last = $(this).remove();
            $last.hide();
            $("#bottom-gallery").append($last);
            $last.fadeIn(500);
        });
        var $url = $("#top-gallery").children()[1].getAttribute('src')
        $('.icon').css({'background-image': 'url('+ $url +')', 'background-repeat': 'no-repeat', 'background-position': 'center', 'background-size': 'cover'});
    });
});