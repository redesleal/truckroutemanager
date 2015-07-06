//global

var user=" ";
var log=" ";


function login()
	{
	var formLogin = document.getElementById("formLogin");
	user=formLogin.elements.user.value;
	log=formLogin.elements.pass1.value;
	var xx = '{ "JASON" : true, "user" : "'+formLogin.elements.user.value+'", "pass1" : "'+formLogin.elements.pass1.value+'" }';
	var jsondata = JSON.parse(xx);
	alert("xd");
	callJSONserverIndex(jsondata,"/loginuser/login");
	}


function afterLogin(response)
	{  
	if(response && !response.error)    
		{
		var body = document.getElementById("conteudo");  
		body.innerHTML = "WELCOME!  Nome = "+ response.Name + "  <img src='"+response.imageURL+"' style='width:100px; height:100px;'>";
		document.getElementById("menu1").href="Javascript:uploadImagemUser('"+response.Action+"','"+response.SessionID+"')";
        document.getElementById("menu1").innerHTML ="EditUser";  
        
        document.getElementById("menu2").innerHTML="Clientes";  
        document.getElementById("menu2").href="Javascript: clientes()";  
        }
	}

function uploadImagemUser(Action,SessionID)
{
	alert("teste1"+name)
	var body = document.getElementById("conteudo");  
	body.innerHTML = "<form action='"+Action+"' method='post' enctype='multipart/form-data'>"+
		"Upload your picture:"+
		"<input type='hidden' name='sessionID' value='"+SessionID+"'>"+
		"<br><input type='file' name='image'>"+
		"<br><input type='submit' value='upload'>"+
		"</form>";
}

function  callJSONserverIndex(jsonObj,url)
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

		   xhr.open('POST',"http://truckroutemanager.appspot.com"+url, true);
		   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded', 'charset=UTF-8');
		   xhr.onreadystatechange = function() {
		      if (xhr.readyState == 4) 
		      	{
		        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) 
		        {
		        	var jsonStr = xhr.responseText;
		            jsonStr = JSON.parse(jsonStr );
				    if(jsonStr.Type=="login")
		            	afterLogin( jsonStr);
		            else if(jsonStr.Type=="register")
			            afterRegister( jsonStr);
		            else if(jsonStr.Type=="cliente")
		            	afterCliente( jsonStr);
		         	else
		         		document.getElementById("informacao").innerHTML =""+jsonStr.Type;
		         }
		        else 
		        {
		            console.log( xhr.statusText) ;
		            alert( "Error getting " + jsonStr[0].Type + 
		               ": " + xhr.statusText + ", code: "+ xhr.status );
		         }
		      }
		   }
		   xhr.send( "jsonStr=" + JSON.stringify( jsonObj ) );
}

