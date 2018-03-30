
/*百度地图制作声明：
	1,只需要更换中心点坐标和标注点数组坐标；
	  拾取坐标系统:http://api.map.baidu.com/lbsapi/getpoint/index.html
	  
	2,修改地图提示框内容；
-----------------------------------------------------------
*/

	//创建和初始化地图函数：
    function initMap(){
      createMap();//创建地图
      setMapEvent();//设置地图事件
      addMapControl();//向地图添加控件
      addMapOverlay();//向地图添加覆盖物
    }
	
	  //创建地图函数：
    function createMap(){ 
      map = new BMap.Map("map"); 
      map.centerAndZoom(new BMap.Point(116.421692,39.946227);
    }
	
	//地图事件设置函数：
    function setMapEvent(){
      map.enableScrollWheelZoom();  //启用地图滚轮放大缩小
      map.enableKeyboard();  	    //启用键盘上下左右键移动地图
      map.enableDragging();         //启用地图拖拽事件，默认启用(可不写)
      map.enableDoubleClickZoom()	//启用鼠标双击放大，默认启用(可不写)
    }
    function addClickHandler(target,window){
      target.addEventListener("click",function(){
        target.openInfoWindow(window);
      });
    }
    function addMapOverlay(){
      
	  //标注点数组
	  var markers = [
        {ccontent:"地址：北京市东城区交道口东大街4-17号<br/>电话：010-67023969",title:"北京吴裕泰茶业股份有限公司",imageOffset: {width:-46,height:-21},position:{lat:23.258888,lng:113.368647}}
		
	  ];
      for(var index = 0; index < markers.length; index++ ){
        var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
        var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
          imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
        })});
        var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
        var opts = {
          width: 200,
          title: markers[index].title,
          enableMessage: false
        };
        var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
        marker.setLabel(label);
        addClickHandler(marker,infoWindow);
        map.addOverlay(marker);
      };
    }
    //向地图添加控件
    function addMapControl(){
      var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
      scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
      map.addControl(scaleControl);
      var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
      map.addControl(navControl);
      var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
      map.addControl(overviewControl);
    }
    var map;
      initMap();