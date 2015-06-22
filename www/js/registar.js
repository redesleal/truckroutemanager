
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
	
	
		var body = document.getElementById("login");  
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
	
	/*	<div class="register"><div class="reg-header">
		<h2>Register your Account</h2><div class="strip"></div>						
		</div><div class="register-grids"><div class="register-left">
		<img src="images/hhh.jpg" alt=""/><input type="submit" value="Upload"> a photo
		<input type="file" value="Choose file.."></div><div class="register-right">
		<div class="user-form"><form><h3>EMAIL ADDRESS</h3>
		<input type="text" value="name@email.com" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'name@email.com';}" required="">
		<h3>CHOOSE PASSWORD</h3>
		<input type="password" value="PASSWORD" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'PASSWORD';}" required="">
		<h3>CONFIRM PASSWORD</h3>
		<input type="password" value="PASSWORD" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'PASSWORD';}" required="">
		<h3>DATE OF BIRTH</h3><ul><li><input type="number" class="text_box" type="text" value="28" min="1" />	
		</li><li><input type="number" class="text_box" type="text" value="06" min="01" />	
		</li><li><input type="number" class="text_box" type="text" value="1988" min="1" />	
		</li><div class="clearfix"></div></ul></form>
		</div></div><div class="clearfix"></div></div>
		<div class="form-btm"><form><div class="form-left">
		<label><input type="checkbox" name="checkbox" checked=""><i>Recieve weekly newsletter?</i></label>
		</div><div class="form-right"><input type="submit" value="SUBMIT">
		</div><div class="clearfix"></div>
		</form></div></div>*/
		}
   




