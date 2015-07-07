

function clientes()
	{
	callServerCliente("","http://truckroutemanager.appspot.com/clientes/verclientes");
	//callServerCliente("","/clientes/verclientes");
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

		   xhr.open('POST', url, true);
		   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded', 'charset=UTF-8');
		   xhr.onreadystatechange = function() {
		      if (xhr.readyState == 4) {
		         if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) 
		         	{
		        	
		            var jsonStr = xhr.responseText;
		          
		            jsonStr = JSON.parse(jsonStr );
		            
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
	
	document.getElementById("menu1").href="Javascript:callJSONserverIndex('"+jsondata+"','http://truckroutemanager.appspot.com/loginuser/login')";
    document.getElementById("menu1").innerHTML ="Home";  
	document.getElementById("menu2").href="Javascript:CreateClienteForm('"+json.URL+"')";
    document.getElementById("menu2").innerHTML ="CreateCliente";  
    document.getElementById("informacao").innerHTML +=""+json.Type;
    afterCliente(json);
  
  
}


function CreateClienteForm(jsonStr)
{
	var body = document.getElementById("conteudo");  

    body.innerHTML =     	"<br>"+
	"<form id='form' action='Javascript:CreateCliente(\""+jsonStr+"\")' method='post' enctype='multipart/form-data'>"+
	"Nome<input id='name' name='name' type='text'></input>"+
	"<br>BI<input id='bi' name='bi' type='text'/>"+
	"<br>NIF<input id='nif' name='nif' type='text'/>"+
	
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
    "<input type='file' id='image' name='img'>"+
	"<td class='wideField' colspan='3'><input type='submit' value='upload'></td></tr></table></form>";
	initialize();
}


function CreateCliente(url)
{
	var formLogin = document.getElementById("form");
	
	var xx = '{ "JASON" : true, "name" : "'+formLogin.elements.name.value+'", "bi" : "'+formLogin.elements.bi.value+'","nif" : "'+formLogin.elements.nif.value+'" }';
	var jsondata = JSON.parse(xx);
	callJSONserverImage(jsondata,document.getElementById('image'),url);
	
}

function afterCliente(jsonStr)
{
if(jsonStr.Type=="cliente")
	tableCreate(jsonStr);
	
	}


function tableCreate(jsonStr) {
    var body =document.getElementById("conteudo");  
    body.innerHTML = "";
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for(var i=0; i<jsonStr.Addresses.length;i++) {
        var tr = document.createElement('tr');
        
                var td = document.createElement('td');
                td.appendChild(document.createTextNode(""+jsonStr.Addresses[i].name ));
                 var td2 = document.createElement('td');
                td2.appendChild(document.createTextNode(""+jsonStr.Addresses[i].bi ));
                 var td3 = document.createElement('td');
                td3.appendChild(document.createTextNode(""+jsonStr.Addresses[i].nif ));
                 var td4 = document.createElement('td');
                td4.appendChild(document.createTextNode(""+jsonStr.Addresses[i].rua ));
                 var td5 = document.createElement('td');
                td5.appendChild(document.createTextNode(""+jsonStr.Addresses[i].pais ));
                
                
                var td6 = document.createElement('td');
                var img = document.createElement("IMG");
                img.style.width = "100px";
                img.style.height = "100px";
                img.setAttribute("src",""+jsonStr.Addresses[i].imageURL);
                       td6.appendChild(img);
                tr.appendChild(td);
                 tr.appendChild(td2);
                  tr.appendChild(td3);
                  tr.appendChild(td4);
                  tr.appendChild(td5);
             tr.appendChild(td6)
        
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
}




function  callJSONserverImage(jsonObj,image,url)
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
		   var files = image.files;
		   var file = files[0];
		   var fd = new FormData();
		    fd.append('image',  file);
		  fd.append("jsonStr", "" + JSON.stringify( jsonObj ));
		  xhr.open('POST', url, true);
		   xhr.onreadystatechange = function() {
		      if (xhr.readyState == 4) {
		         if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) 
		         	{
		        	 var j = xhr.responseText;
			          
			            j = JSON.parse(j );
			                   clientes();
		            } 
		         else 
		         {
		            console.log( xhr.statusText) ;
		            alert( "Error getting " + j.Erro + 
		               ": " + xhr.statusText + ", code: "+ xhr.status );
		         }
		      }
		   }

		   // send the collected data as encodedURI JSON string
		  
		//   xmlhttp.send("fname=Henry&lname=Ford");
		   xhr.send(fd);
		   
}


