
/*�ٶȵ�ͼ����������
	1,ֻ��Ҫ�������ĵ�����ͱ�ע���������ꣻ
	  ʰȡ����ϵͳ:http://api.map.baidu.com/lbsapi/getpoint/index.html
	  
	2,�޸ĵ�ͼ��ʾ�����ݣ�
-----------------------------------------------------------
*/

	//�����ͳ�ʼ����ͼ������
    function initMap(){
      createMap();//������ͼ
      setMapEvent();//���õ�ͼ�¼�
      addMapControl();//���ͼ��ӿؼ�
      addMapOverlay();//���ͼ��Ӹ�����
    }
	
	  //������ͼ������
    function createMap(){ 
      map = new BMap.Map("map"); 
      map.centerAndZoom(new BMap.Point(116.421692,39.946227);
    }
	
	//��ͼ�¼����ú�����
    function setMapEvent(){
      map.enableScrollWheelZoom();  //���õ�ͼ���ַŴ���С
      map.enableKeyboard();  	    //���ü����������Ҽ��ƶ���ͼ
      map.enableDragging();         //���õ�ͼ��ק�¼���Ĭ������(�ɲ�д)
      map.enableDoubleClickZoom()	//�������˫���Ŵ�Ĭ������(�ɲ�д)
    }
    function addClickHandler(target,window){
      target.addEventListener("click",function(){
        target.openInfoWindow(window);
      });
    }
    function addMapOverlay(){
      
	  //��ע������
	  var markers = [
        {ccontent:"��ַ�������ж����������ڶ����4-17��<br/>�绰��010-67023969",title:"������ԣ̩��ҵ�ɷ����޹�˾",imageOffset: {width:-46,height:-21},position:{lat:23.258888,lng:113.368647}}
		
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
    //���ͼ��ӿؼ�
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