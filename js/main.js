var span=document.createElement("span");
var span2=document.createElement("span");
var span3=document.createElement("span");
var span4=document.createElement("span");
var span5=document.createElement("span");

function mostrarMensaje1()
{
    var cnombre=document.getElementById("name");
    span.innerHTML="Debe ingresar su nombre";
    cnombre.parentNode.appendChild(span);
}
function mostrarMensaje2()
{
    var cmail=document.getElementById("input-email");
    span2.innerHTML="Verifique su E-mail";
    cmail.parentNode.appendChild(span2);
}
function mostrarMensaje3()
{
    var cpassword=document.getElementById("input-password");
    span3.innerHTML="la contraseña debe tener almenos 6 caracteres";
    cpassword.parentNode.appendChild(span3);
}
function mostrarMensaje4()
{
    var cCantidad=document.getElementById("input-password");
    span4.innerHTML="la contraseña no puede ser 123456,098754 ni password";
    cCantidad.parentNode.appendChild(span4);
}
function mostrarMensaje5()
{
    var cBici=document.getElementsByClassName("form-control")[4];
    span5.innerHTML="Debes seleccionar almenos un tipo de bici";
    cBici.parentNode.appendChild(span5);
}


function validateForm(){
	
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastname").value;
    var inputEmail = document.getElementById("input-email").value;
    var inputPassword = document.getElementById("input-password").value;
    var twitter = document.getElementById("input-social").value;
    var lista= document.getElementsByClassName("form-control")[4].value;
    var correo=/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    
    
    if (name==""||lastName==""||inputEmail==""||inputPassword=="")
        {
            mostrarMensaje1();
        }
        else
            {
                span.style.display="none";
            }
        
    if((/[0-9]/g).test(name)||(/[0-9]/g).test(lastName))
        {
            mostrarMensaje1();
        }
        else
            {
                span.style.display="none";
            }

    if(!correo.test(inputEmail))
        {
            mostrarMensaje2();
        }
        else
            {
            span2.style.display="none";
            }
    
        
    if (inputPassword.length<6)
        {
            mostrarMensaje3();
        }
        else
            {
                span4.style.display="block";
                span3.style.display="none";
                
            }
    
    if (inputPassword=="123456"||inputPassword=="098754"||inputPassword=="password")
        {
            span4.style.display="block";
            mostrarMensaje4()
            
        }
          else
            {
                span4.style.display="none";
                                
            }

    
     if (lista == 0)
        {
            mostrarMensaje5();
        }
        else
            {
                span5.style.display="none";
            }
            
    if (name.toLowerCase())
        {
            document.getElementById("name").value= name.charAt(0).toUpperCase() + name.slice(1);
        }
        
    if (lastName.toLowerCase())
        {
            document.getElementById("lastname").value= lastName.charAt(0).toUpperCase() + lastName.slice(1);
        }   
   
}