// 放大镜配置

$(document).ready(function(e) {
    $(".pic_zoom").zoom();//放大镜引用	
	/*$(".pic_list_content ul li").click(function(){//大图单击切换
		var src=$(this).children("img").attr("src");
		$("#invalid_pic").attr("src",src);
		$(".pic_list_content ul li img").removeClass("current");
		$(this).children("img").addClass("current");
	});*/
	
	$(".pic_list_content ul li a").first().addClass("current");//初始化停留第一个
	
	$(".pic_list_content ul li a").hover(//大图滑动切换
	  function () {
		  var src=$(this).children("img").attr("src");
		  $("#invalid_pic").attr("src",src);
		  $(".pic_list_content ul li a").removeClass("current");
	  },
	  function () {
		 	var src=$(this).children("img").attr("src");
			var src_b=$("#invalid_pic").attr("src");
			//alert(src_b);
			if(src=src_b){
				$(".pic_list_content ul li a").removeClass("current");
				$(this).addClass("current");
				};
	  }
	);	
	
});