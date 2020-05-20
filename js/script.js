$(document).ready(function(){
    $(".side-left .intro-content").click(function(){
    	$(".splitlayout").addClass("open-left");
    	$(".splitlayout").removeClass("close-right reset-layout");
    });

    $(".back-right").click(function(){
    	$(".splitlayout").removeClass("open-left");
    	$(".splitlayout").addClass("close-left reset-layout");
    });

    $(".side-right .intro-content").click(function(){
    	$(".splitlayout").addClass("open-right");
    	$(".splitlayout").removeClass("close-left reset-layout");
    });

    $(".back-left").click(function(){
    	$(".splitlayout").removeClass("open-right");
    	$(".splitlayout").addClass("close-right reset-layout");
    });
});