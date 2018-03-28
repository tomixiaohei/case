$(document).ready(function(){
	jQuery(".nav").slide({ type:"menu",titCell:".m",targetCell:".sub",effect:"slideDown",delayTime:300,triggerTime:0,defaultPlay:false,returnDefault:true});
		/*二级*/jQuery(".sub").slide({ type:"menu",titCell:".m2",targetCell:".sub2",effect:"slideDown",delayTime:300,triggerTime:0,returnDefault:true});
		/*三级*/jQuery(".sub2").slide({ type:"menu",titCell:".m3",targetCell:".sub3",effect:"slideDown",delayTime:300,triggerTime:0,returnDefault:true});
		/*追加分级箭头*/$(".m2:has(ul)").add(".m3:has(ul)").find("a:first").append(" &raquo; ");
	/*导航*/
	
	jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true,delayTime:500,effect:"fold"});
	jQuery(".slideBox").hover(function(){ jQuery(this).find(".prev,.next").fadeTo("show",0.7) },function(){ jQuery(this).find(".prev,.next").fadeOut() });
	/*首页幻灯片*/
	
	
			$(function() {
				jQuery(".event_box").slide({ titCell: ".parHd li", mainCell: ".parBd", defaultPlay: false, titOnClassName: "act", prevCell: ".sPrev", nextCell: ".sNext" });
				jQuery(".parHd").slide({ mainCell: " ul", vis: 6, effect: "leftLoop", defaultPlay: false, prevCell: ".sPrev", nextCell: ".sNext" });
			});
			
	/* 大事记 */
	
	jQuery(".picScroll-left2").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,scroll:4,vis:4});
	/*首页产品滚动*/
	
	$(".ind_pro_hover").hover(function(){
		
		$(this).find(".ind_pro_show").fadeIn();
				
		},
	function(){
		
		$(this).find(".ind_pro_show").fadeOut();
		
		});
	
	/*首页产品鼠标经过效果*/
	
	jQuery(".picScroll-left3").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,scroll:2,vis:4});
	/*首页证书*/
	
	jQuery(".sideMen").slide({titCell:"h3 i",targetCell:".sideMen_cont",trigger:"click"});
	/*常见问题*/
	
	jQuery(".products_select").slide({type:"menu",titCell:".products_cot_2",targetCell:".hide",effect:"slideDown",delayTime:300,triggerTime:0,defaultPlay:false,returnDefault:true});
	/*产品筛选*/
	
	jQuery(".products_list").slide({type:"menu",titCell:".pic",targetCell:".pic_b",delayTime:300,triggerTime:0,defaultPlay:false,returnDefault:true});
	/*产品大图*/
	
	$(".classify .m").hover(
	
	function(){
		$(this).addClass("on");
		$(this).find(".child").show(300);
		
		},
	function(){
		
		$(this).removeClass("on");
		$(this).find(".child").hide(300);
		
		}
	
	);
	/*侧导航*/

jQuery(".classify").slide({titCell:"ul li span",targetCell:".child",defaultPlay:false,effect:"slideDown",trigger:"click"});
	/*侧导航*/
	
	jQuery(".pic_list").slide({mainCell:".pic_list_content ul",autoPage:true,effect:"leftLoop",scroll:4,vis:4});
	/*产品详细小图切换*/
	
	jQuery(".products_detail_right").add(".detail").add(".history").add(".honor").slide();
	/*产品信息*//*产品详细*//*发展历程*//*资质荣誉*/
	
});