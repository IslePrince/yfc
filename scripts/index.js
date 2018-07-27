function onDeviceReady() { 
 localStorage.setItem("uuid",  JSON.stringify(device.uuid));

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
	  
alert('test');

	var expired = jQuery.parseJSON(localStorage.getItem('expired'));
	var damaged = jQuery.parseJSON(localStorage.getItem('damaged'));
	var spoiled = jQuery.parseJSON(localStorage.getItem('spoiled'));
	var store = jQuery.parseJSON(localStorage.getItem('store'));
	var promo = jQuery.parseJSON(localStorage.getItem('promo'));
	var returned = jQuery.parseJSON(localStorage.getItem('returned'));

  
	



	$(document).on("pagebeforeshow", function() {
				// HOME PAGE LOAD // ENTER NAME and SELECT REGION
				if($.mobile.activePage.attr("id") === 'expired') {
					
				}	
    });
	
	$(document).on("pageshow", function() {
				// HOME PAGE LOAD // ENTER NAME and SELECT REGION
				if($.mobile.activePage.attr("id") === 'expired') {
					 $('#expiredCriteria').focus();
				}	
    });
	

	
	// LOGIC
	$('#expiredCriteria').addEventListener("keydown", expiredKeypress, false);
	function expiredKeypress(e) {
		
		feedbackInfo(e.which);
	
		if(e.which == 13) {
			 $('#expiredCriteria').blur();
		
		   alert('You pressed enter!' + $('#expiredCriteria').val());
 		   prompt('This is a message',  '1');
		}
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

document.addEventListener("deviceready", onDeviceReady, false);