// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

label1.addEventListener("click", function(){
  //   alert("Hello,world");
  ns_win.open();

});

win1.add(label1);

var ns_win = Ti.UI.createWindow({backgroundColor: "green"});
var ns_label = Ti.UI.createLabel({
  color: "#999",
  text: "I am next Windown",
  font: {fontSize: 20, fontFamily: "Helvetica Neue"},
  textAlign: "center",
  width: "auto"
});
ns_win.add(ns_label);



//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();


Ti.Media.openPhotoGallery({
  success: function(event) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function(e) {
      var res = JSON.parse(this.responseText);
      console.info("remote_data is:");
      console.info(res);
      Ti.UI.createAlertDialog({
        title: "Success",
        message: "status code" + this.status
      }).show();
    };

    xhr.open("POST", "http://cms.yuehouse.co/interface/users/change_head_pic");
    xhr.send({
      // theImage: event.media,
      // username: "foo",
      // password: "bar"
      file: event.media,
      token: "c4c571a9a192b416e7f96ade0dc44546"
    });
  }
});

var ind = Ti.UI.createProgressBar({
  width: 200,
  height: 50,
  min: 0,
  max: 1,
  value: 0,
  style: Ti.UI.iPhone.ProgressBarStyle.PLAIN,
  top: 10,
  message: "Uploading image",
  font: {fontSize: 12, fontWeight: "bold"},
  color: "#888"
});

win1.add(ind);
win1.open();
ind.show();

console.info("begin");
console.info(Ti.Utils.sha256("Hello,Ti"));
console.info(Ti.apiName);
console.info(Ti.version);
console.info(Ti.userAgent);
console.info("end");
