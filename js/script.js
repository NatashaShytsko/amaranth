$(document).ready(function(){
	$(".js-btn-buy-link").click(function(){
		var o=$(this).attr("href"),
		n=$(o).offset().top,
		t=$(".js-main-logo-block").height();
		return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:n-t},1e3),!1
	});
	var o=$(".js-main-logo-block").offset().top,
	n=function(){
		var o=$(".js-main-logo-block").height()+30+"px";
		$(".js-main-content").css("margin-top",o)},
		t=function(){
			$(window).scrollTop()>o?$(".js-main-logo-block").addClass("sticky"):$(".js-main-logo-block").removeClass("sticky")};
			n(),t(),
			$(window).scroll(function(){t()}),
			$(window).bind("resize orientationchange",
				function(){n(),t()})



			$(".plus").click(function(){

		if($(this).find("i").hasClass("icon-plus")){
					$(".block").find(".q.text").css("color", "#282828");
					$(".block").find(".q.text").css("font-family", "Gotham");
					$(".block").find(".plus i").removeClass("icon-minus");
					$(".block").find(".plus i").addClass("icon-plus");
					$(this).parents(".block").find(".q.text").css("color", "#fc0290");
					$(this).parents(".block").find(".q.text").css("font-family", "GothamBold");
					$(this).parents(".block").find(".plus i").removeClass("icon-plus");
					$(this).parents(".block").find(".plus i").addClass("icon-minus");
				}
				else {
						$(".block").find(".plus i").removeClass("icon-minus");
					$(".block").find(".plus i").addClass("icon-plus");
				}

			});
		});
