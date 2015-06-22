

function login()
	{
	
	 var formLogin = document.getElementById("formLogin");
	   var xx = '{ "JASON" : true, "user" : "'+formLogin.elements.user.value+'", "pass1" : "'+formLogin.elements.pass1.value+'" }';
	   
	 	var jsondata = JSON.parse(xx);
	 	

	 	 var response =   callJSONserver(jsondata,"/loginuser/login");
 //   var response = callJSONserver("user:"+user.value+",pass1:"+pass.value, true,"loginuser/login");
    
  
   }


function afterLogin(response)
{  
	

	if(response && !response.error)    
		{
		
		var body = document.getElementById("container");  
		//document.getElementById("form").remove();
		while (body.firstChild) {
			body.removeChild(body.firstChild);
		}
		//document.getElementById("table1").remove();
        body.innerHTML = "WELCOME!  Nome = "+ response.Name + "  <img src='"+response.imageURL+"' style='width:100px; height:100px;'>"+
        
    "<form action='"+response.Action+"' method='post' enctype='multipart/form-data'>"+
		"Upload your picture:"+
		"<input type='hidden' name='sessionID' value='"+response.SessionID+"'>"+
	"<br><input type='file' name='image'>"+
		"<br><input type='submit' value='upload'>"+
		"</form>";
        clientes();
        
      //  "<form action='truckroutemanager/addPicture' method='post'>"+
		//"<input type='hidden' name='sessionID' value='"+response.SessionID+"'>"+
	//	" <input type='submit' value='Add Picture'> </form>"+
        
		}}

function  callJSONserver(jsonObj,url)
{
  
	   // construct an HTTP request
		   var xhr = new XMLHttpRequest();
		   try {
		      // Opera 8.0+, Firefox, Chrome, Safari
		      xhr = new XMLHttpRequest();
		   } catch (e) {
		      // Internet Explorer Browsers
		      try{
		         xhr = new ActiveXObject("Msxml2.XMLHTTP");
		      } catch (e) {
		         try {
		            xhr = new ActiveXObject("Microsoft.XMLHTTP");
		         } catch (e) {
		            // Something went wrong
		            alert("Your browser broken!");
		            return false;
		         }
		      }
		   }

		   xhr.open('POST', "http://truckroutemanager.appspot.com/"+url, true);

		   // tell the server that JSON is being sent
		   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded', 'charset=UTF-8');

		   // encode the JSON string into a URI query string
		 
		   // callback function to handle the server response
		   xhr.onreadystatechange = function() {
		      if (xhr.readyState == 4) {
		         if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
		            var jsonStr = xhr.responseText;
		          
		            // Javascript function JSON.parse to parse the JSON string
		            jsonStr = JSON.parse(jsonStr );
		     
		            
		            if(jsonStr.Type=="login")
		            	afterLogin( jsonStr);
		            else if(jsonStr.Type=="register")
			            afterRegister( jsonStr);
		            else if(jsonStr.Type=="cliente")
		            	   afterCliente( jsonStr);
		            // Now do something with the JSON object
		          //  myMethod( jsonObj );
		            if(jsonStr.Type=="erro")
		            	alert("erro na ação")
		         } else {
		            console.log( xhr.statusText) ;

		            alert( "Error getting " + jsonStr[0].Type + 
		               ": " + xhr.statusText + ", code: "+ xhr.status );
		         }
		      }
		   }

		   // send the collected data as encodedURI JSON string
		   xhr.send( "jsonStr=" + JSON.stringify( jsonObj ) );
}

