

function clientes()
	{
	callServerCliente("","/clientes/verclientes");
	}

function  callServerCliente(jsonObj,url)
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

		   xhr.open('POST', "http://truckroutemanager.appspot.com"+url, true);
		   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded', 'charset=UTF-8');
		   xhr.onreadystatechange = function() {
		      if (xhr.readyState == 4) {
		         if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) 
		         	{
		            var jsonStr = xhr.responseText;
		            jsonStr = JSON.parse(jsonStr );
		            alert(jsonStr);
		            layoutClientes(jsonStr);
		            } 
		         else 
		         {
		            console.log( xhr.statusText) ;
		            alert( "Error getting " + jsonStr.Erro + 
		               ": " + xhr.statusText + ", code: "+ xhr.status );
		         }
		      }
		   }

		   // send the collected data as encodedURI JSON string
		   xhr.send( "jsonStr=" + JSON.stringify( jsonObj ) );
}

function layoutClientes(json)
	{
	var xx = '{ "JASON" : true, "user" : "'+user+'", "pass1" : "'+log+'" }';
	var jsondata = JSON.parse(xx);
	
	alert(json.URL);
	document.getElementById("menu1").href="Javascript:callJSONserver('"+jsondata+"','/loginuser/login');";
    document.getElementById("menu1").innerHTML ="Home";  
	document.getElementById("menu2").href="Javascript:CreateCliente('"+json.URL+"')";
    document.getElementById("menu2").innerHTML ="CreateCliente";  
    document.getElementById("informacao").innerHTML +=""+json.Type;
    afterCliente(json);
  //  document.getElementById("menu3").href="Javascript:uploadImagemUser('"+response.Action+"','"+response.SessionID+"')";
  //  document.getElementById("menu3").innerHTML ="EditUser";  
  
}


function CreateCliente(jsonStr)
{
	var body = document.getElementById("conteudo");  

    body.innerHTML =     	"<br>"+
	"<form id='form' action='"+jsonStr+"' method='post' enctype='multipart/form-data'>"+
	"<input id='name' name='name' type='text'></input>"+
	"<input id='bi' name='bi' type='text'/>"+
	"<input id='nif' name='nif' type='text'/>"+
	
	"<div id='locationField'>"+
	"<input id='autocomplete' placeholder='Enter your address' onFocus='geolocate()' type='text'></input></div>"+
	"<table id='address'>"+
	"<tr><td class='labe'>Street address</td>"+
    "<td class='slimField'><input class='field' id='street_number' name='porta' disabled='true'></input></td>"+
   	"<td class='wideField' colspan='2'><input class='field' id='route' name='rua' disabled='true'></input></td></tr>"+
 	"<tr><td class='label'>City</td>"+
	"<td class='wideField' colspan='3'><input class='field' id='locality' name='cidade' disabled='true'></input></td></tr>"+
	"<tr> <td class='label'>State</td>"+
	"<td class='slimField'><input class='field'id='administrative_area_level_1' name='estado' disabled='true'></input></td>"+
	"<td class='label'>Zip code</td>"+
	"<td class='wideField'><input class='field' name='codPostal' id='postal_code'disabled='true'></input></td></tr><tr>"+
	"<td class='label'>Country</td>"+
    "<td class='wideField' colspan='3'><input class='field'id='country' name='pais' disabled='true'></input></td></tr>"+
    "<input type='file' name='img'>"+
	"<td class='wideField' colspan='3'><input type='submit' value='upload'></td></tr></table></form>";
	initialize();
}

function afterCliente(jsonStr)
{

	//alert(jsonStr.Addresses[1].name);


	var body = document.getElementById("conteudo");  
body.innerHTML =     	"<br>"+
"<table id='address'>";
if(jsonStr.Type=="cliente")
	{
for(var i=0; i<jsonStr.Addresses.length;i++)
	{
	body.innerHTML +="<tr><td class='labe'>"+jsonStr.Addresses[i].name +"</td><td class='labe'>"+jsonStr.Addresses[i].bi +"</td><td class='labe'>"+jsonStr.Addresses[i].nif +"</td><td class='labe'><img src='"+jsonStr.Addresses[i].imageURL+"' style='width:100px; height:100px;'></td></tr>";
	}

body.innerHTML +="</table>";
}

	
	}

