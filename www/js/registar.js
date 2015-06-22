
function registar()
	{
	
	 var formLogin = document.getElementById("formLogin");
	   var xx = '{ "JASON" : true, "user" : "'+formLogin.elements.user.value+'",  "email" : "'+formLogin.elements.email.value+'",  "name":"'+formLogin.elements.name.value+'" , "pass1" : "'+formLogin.elements.pass1.value+'", "pass2" : "'+formLogin.elements.pass2.value+'" }';
	   var jsondata = JSON.parse(xx);
	 var response = callJSONserver(jsondata,"/registuser/registuser");
 
  
   }


function afterRegister( jsonStr)
{
	var body = document.getElementById("container");  
	while (body.firstChild) {
		body.removeChild(body.firstChild);
	}
	//document.getElementById("table1").remove();
    body.innerHTML +=""+jsonStr.Aproche;
}

function registarForm()
	{
	
	
		var body = document.getElementById("container");  
		//document.getElementById("form").remove();
		while (body.firstChild) {
			body.removeChild(body.firstChild);
		}
		//document.getElementById("table1").remove();
        body.innerHTML ="<section id='content'>"+
		"<form id='formLogin' action='Javascript:registar()'>"+
			"<h1>Register Form</h1>"+
			"<div><input type='text' placeholder='Name' required='' id='name' /></div>"+
			"<div><input type='text' placeholder='Username' required='' id='user' /></div>"+
			"<div><input type='text' placeholder='E-mail' required='' id='email' /></div>"+
			"<div><input type='password' placeholder='Password' required='' id='pass1' /></div>"+
			"<div><input type='password' placeholder='Password' required='' id='pass2' /></div>"+
			"<div><input type='submit' value='Log in' />"+
				"<a href='Javascript:registar()'>Lost your password?</a>"+
				"<a href='Javascript:registar()'>Register</a></div>"+
	"	</form><!-- form -->"+
		"</section><!-- content -->";
	//	initialize();
		}
   




