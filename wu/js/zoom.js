// JavaScript Document
(function ($) {
    $.fn.zoom = function (options) {
        var opts = $.extend({}, $.fn.defaults, options);
        return this.each(function () {
            var $this = $(this);
            $this.css({ position: "relative" });
            var $zoomImg = $this.children("img");
            $this.append("<div class=\"zoomLens\" >&nbsp;</div>");
            $("body").append("<div class=\"zoomBox\"><div class=\"zoomBody\"><img class=\"\" src=\"\"/></div></div>");
            //设置放大镜片
            var zoomLens = $(".zoomLens", $this);
            var imgLeft = $this.offset().left;
            var imgTop = $this.offset().top;
            var imgWidth = $this.innerWidth();
            var imgHeight = $this.innerHeight();
            var paddTop = parseInt($this.css("paddingTop"));
            var paddLeft = parseInt($this.css("paddingLeft"));
            //var mrgLeft=parseInt($zoomImg.css("marginLeft"));
            
            zoomLens.width(opts.xzoom);
            zoomLens.height(opts.yzoom);
            //设置放大
            var zoomBox = $(".zoomBox");
            zoomBox.width(opts.xzoom * opts.scale);
            zoomBox.height(opts.yzoom * opts.scale);
            zoomBox.css({ left: imgLeft + imgWidth + opts.offset, top: imgTop });
            var zoomBody = $(".zoomBody", zoomBox);
            zoomBody.width($this.width() * opts.scale);
            zoomBody.height($this.height() * opts.scale);
            zoomBody.css({ "paddingTop": paddTop * opts.scale, paddingLeft: paddLeft * opts.scale });
           
            $this.hover(function () {
                zoomLens.show();
                zoomBox.fadeIn("show");
				var zoomImg = zoomBody.children("img");
				var mrgTop = parseInt($zoomImg.css("marginTop"));
				zoomImg.css({ marginTop: mrgTop * opts.scale });
				zoomImg.width($zoomImg.width() * opts.scale);
				zoomImg.height($zoomImg.height() * opts.scale);
				zoomImg.attr("src", $zoomImg.attr("src"));
            }, function () {
                zoomLens.hide();
                zoomBox.fadeOut(300);
            });
            $this.mousemove(function (e) {
                var xpos = e.pageX - imgLeft - opts.xzoom / 2 > 0 ? (e.pageX - imgLeft - opts.xzoom / 2) : 0;
                xpos = xpos > imgWidth - opts.xzoom ? imgWidth - opts.xzoom - 2 : xpos;
                var ypos = e.pageY - imgTop - opts.yzoom / 2 > 0 ? (e.pageY - imgTop - opts.yzoom / 2) : 0;
                ypos = ypos > imgHeight - opts.yzoom ? imgHeight - opts.yzoom - 2 : ypos;
                zoomLens.css({ left: xpos, top: ypos })
                zoomBody.css({ left: -xpos * opts.scale, top: -ypos * opts.scale })

            });
			$(window).resize(function(){
				imgLeft = $this.offset().left;
             	imgTop = $this.offset().top;
				zoomBox.css({ left: imgLeft + imgWidth + opts.offset, top: imgTop });
			});
        });
    }
    $.fn.defaults = {
        xzoom: 200,//放大镜宽度
        yzoom: 200,//放大镜高度
        offset: 10,//放大图片间距
        position: "right",
        lens: 5,
        preload: 5,
        scale: 2
    }
})(jQuery);