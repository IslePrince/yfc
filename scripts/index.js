

function onDeviceReady() { 
 localStorage.setItem("uuid",  JSON.stringify(device.uuid));
	if (navigator.notification) { // Override default HTML alert with native dialog
      window.alert = function (message) {
          navigator.notification.alert(
              message,    // message
              null,       // callback
              "YFC", // title
              'OK'        // buttonName
          );
      };
  }


var expired = [];

window.addEventListener("error", handleError, true);

function handleError(evt) {
    if (evt.message) { // Chrome sometimes provides this
      alert("error: "+evt.message +" at linenumber: "+evt.lineno+" of file: "+evt.filename);
    } else {
      alert("error: "+evt.type+" from element: "+(evt.srcElement || evt.target));
    }
}
	


	
	$(document).ready(function() {
	   $.mobile.allowCrossDomainPages = true;
	   $.mobile.phonegapNavigationEnabled = true ;
	   $.support.cors = true;


	  $.nd2({
		stats : {
		  analyticsUA: null // Your UA-Code for Example: 'UA-123456-78'
		},
		advertising : {
		  active : false, // true | false
		  path : null, // Define where the Ad-Templates are: For example: "/examples/fragments/adsense/"
		  extension : null // Define the Ad-Template content Extension (Most case: ".html" or ".php")
		}
	  });
	  


	

  
	



	$(document).on("pagebeforeshow", function() {
				// HOME PAGE LOAD // ENTER NAME and SELECT REGION
				if($.mobile.activePage.attr("id") === 'expired') {
				
				}	
    });
	


	
	
	
});
	
// LOGIC
function alertMasses() {
	alert('masses');	
}
	
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function niceTrim(str, length, ending) {
    if (length === null) {
      length = 100;
    }
    if (ending === null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  }

function feedbackSuccess(msg) {
		new $.nd2Toast({ // The 'new' keyword is important, otherwise you would overwrite the current toast instance
				 message : msg, // Required
				 action : { // Optional (Defines the action button on the right)
				   title : "OK", // Title of the action button
				   fn : function() { // function that will be triggered when action clicked
					 // console.log("Action Button clicked'");
				   },
				   color : "green" // optional color of the button (default: 'lime')
				 },
				 ttl : 8000 // optional, time-to-live in ms (default: 3000)
			   });	
}
function feedbackInfo(msg) {
		new $.nd2Toast({ // The 'new' keyword is important, otherwise you would overwrite the current toast instance
				 message : msg, // Required
				 ttl : 2000 // optional, time-to-live in ms (default: 3000)
			   });	
}
function feedbackError(msg) {
	/*new $.nd2Toast({ // The 'new' keyword is important, otherwise you would overwrite the current toast instance
				 message : msg, // Required
				 action : { // Optional (Defines the action button on the right)
				   title : "OK", // Title of the action button
				   fn : function() { // function that will be triggered when action clicked
					 // console.log("Action Button clicked'");
				   },
				   color : "red" // optional color of the button (default: 'lime')
				 },
				 ttl : 8000 // optional, time-to-live in ms (default: 3000)
			   });	
	*/
	alert(msg);
}

		


	});
}

document.addEventListener("deviceready", onDeviceReady, true);