$(document).ready(function() {
    $(".btn-menu").click(function() {
		if($(".menu").hasClass("closed")) {
            if ($(window).width() > 1200) {
                $(".menu").animate({height:"60px"},{queue:false, duration:200}).removeClass("closed").addClass("opened");
            } else if ($(window).width() > 750) {
                $(".menu").animate({height:"75px"},{queue:false, duration:200}).removeClass("closed").addClass("opened");
            } else {
			    $(".menu").animate({height:"50px"},{queue:false, duration:200}).removeClass("closed").addClass("opened");
            }
        }

        $(".btn-close").css("display", "flex");
	});

    $(".btn-close").click(function() {
		if($(".menu").hasClass("opened")) {
			$(".menu").animate({height:"0px"},{queue:false, duration:200}).removeClass("opened").addClass("closed");
        }

        $(".btn-close").hide();
	}); 
})        