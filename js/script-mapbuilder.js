var mapview;
function showMap()
{ 
 var baseURL  = "http://localhost:8888/mapviewer";
 var mapCenterLon = 110.142;
 var mapCenterLat =  -7.022;
 var mapZoom      =  10;
 var mpoint = MVSdoGeometry.createPoint(mapCenterLon,mapCenterLat,8307);
 mapview = new MVMapView(document.getElementById("map"), baseURL);
 mapview.addMapTileLayer(new MVMapTileLayer("mvdemo.TL_KENDAL2"));
 mapview.setCenter(mpoint);
 mapview.setZoomLevel(mapZoom);

 addThemeBasedFOI();

 mapview.addNavigationPanel("WEST");
 mapview.display();
}

function addThemeBasedFOI()
        {
          var themebasedfoi1 = new MVThemeBasedFOI('themebasedfoi1', 'mvdemo.KENDAL');
          themebasedfoi1.enableAutoWholeImage(true);
          mapview.addThemeBasedFOI(themebasedfoi1);

          // var themebasedfoi2 = new MVThemeBasedFOI('themebasedfoi2', 'mvdemo.JMLH_PDDK');
          // mapview.addThemeBasedFOI(themebasedfoi2);

          var themebasedfoi3 = new MVThemeBasedFOI('themebasedfoi3', 'mvdemo.GIS_KENDAL_TM');
          mapview.addThemeBasedFOI(themebasedfoi3);

          var themebasedfoi4 = new MVThemeBasedFOI('themebasedfoi4', 'mvdemo.KESEHATAN_TM');
          mapview.addThemeBasedFOI(themebasedfoi4);
        }

      function setVisible(item)
      {
        var themebasedfoi = mapview.getThemeBasedFOI(item.value);
        themebasedfoi.setVisible(!themebasedfoi.isVisible());
      }
