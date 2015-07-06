function registar()
	{
	var formLogin = document.getElementById("formLogin");
	var xx = '{ "JASON" : true, "user" : "'+formLogin.elements.user.value+'",  "email" : "'+formLogin.elements.email.value+'",  "name":"'+formLogin.elements.name.value+'" , "pass1" : "'+formLogin.elements.pass1.value+'", "pass2" : "'+formLogin.elements.pass2.value+'" }';
	var jsondata = JSON.parse(xx);
	callJSONserverIndex(jsondata,"http://truckroutemanager.appspot.com/registuser/registuser");
	}


function afterRegister( jsonStr)
	{
	var body = document.getElementById("conteudo");  
	  body.innerHTML=""+jsonStr.Aproche;
}

function registarForm()
	{
	var body = document.getElementById("conteudo");  
	body.innerHTML ="<section id='content'>"+
		"<div class='con-btm-l'><div class='login-tab'><div class='user-login'>"+
		"<h2>Registo</h2><div class='strip'></div>"+
		"<form id='formLogin' action='Javascript:registar()'>"+
		"<input id='name' type='text' value='name' onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'name';}\"' required\>"+
		"<input id='user' type='text' value='username' onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'username';}\"' required\>"+
		"<input id='email' type='text' value='name@email.com' onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'name@email.com';}\" required\>"+
		"<input id='pass1' type='password' value='PASSWORD' onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'PASSWORD';}\" required\>"+
		"<input id='pass2' type='password' value='PASSWORD2' onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'PASSWORD2';}\" required\>"+
		"<div class='user-right'><input type='submit' value='Registo'></form>"+
		"</div>"+
		"</div><div class='clearfix'></div></div></div></div></div>";
		}
   




