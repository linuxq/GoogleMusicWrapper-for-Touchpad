WebViewStatus = 1;

enyo.kind({
  name: "gmwrapper",
  kind: enyo.VFlexBox,
  components: [
		{kind: "WebView", name: "MediathekWebView", url: "https://play.google.com/music/listen", flex : 1, onLoadStopped : "UrlLoadStopped", onLoadStarted : "UrlLoadStarted"} //onPageTitleChanged: "UrlRedirect"

  ],
  ready: function(){
  	enyo.setFullScreen(true); //Set fullscreen
  },
  UrlRedirect: function(inSender, inResponse) {
      // handle the button click
      enyo.log("ACHTUNG: " + inResponse); 
      if (inResponse != "Google Play") {
      	//enyo.log("ACHTUNG: Nicht mehr mobil!" + inResponse); // + this.$.MediathekWebView.getUrl());
      }
  },
  UrlLoadStarted: function(){
  },
  UrlLoadStopped: function(){
  	WebViewStatus = 0;
	enyo.windows.setWindowProperties(enyo.windows.getActiveWindow(), {"blockScreenTimeout" : true});//Screen nie aus
  }  
});