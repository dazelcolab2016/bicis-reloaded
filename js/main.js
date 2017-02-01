var toValidate = [
    {id:"lastname", mensaje:"Ingresa tu nombre", validations:["text",]},
    {id:"input-email", mensaje:"Ingresa tu nombre", validations:["text"]},
    {id:"input-password", mensaje:"Ingresa tu nombre", validations:["text"]},
    {id:"name", mensaje:"Ingresa tu nombre", validations:["password", "text", "email"]}
];


//PROGRAMACION CON OBJETOS
function validateForm(){
    /*var name     = document.getElementById('name');
    var lastName = document.getElementById('lastname');
    var email    = document.getElementById('input-email');
    var password = document.getElementById('input-password');
    var lista    = document.getElementById('selectBici');
    var social   = document.getElementById('input-social'); */
    //var lista= document.getElementsByClassName("listSelect")[4].value;
    //var indice = document.formul.mySelect.selectedIndex;
    
    for(var i in toValidate)
    {
        var input     = document.getElementById(toValidate[i].id);
        console.log(toValidate[i].validations);
        for(var v in toValidate[i].validations)
        {
            console.log(toValidate[i].validations[v]);
            switch(toValidate[i].validations[v])
            {
                case "password":
                    //code
                    Validator.isValidPassword("");
                    break;
                case "email":
                    //code
                    Validator.isEmail("");
                    break;
                case "text":
                    if(Validator.isText(input.value))
                    {
                        removeMessege(toValidate[i].id);
                    }else{
                        createMessage(toValidate[i].id, toValidate[i].mensaje);
                    }
                    break;
            }
        }
        
        
    }
    
    /*if (Validator.isText(name.value))
        {
            removeMessege('name');
        }else{
            createMessage('name','No es Válido');
        }
    
        if (Validator.isText(lastName.value))
            {
                removeMessege('lastname');
                
            }else{
                createMessage('lastname','Ingresa tu apellido');
                
            }
            
        if(Validator.isValidPassword(password.value))
            {
                removeMessege('input-password');
                
            
            }else{
                createMessage('input-password','Tu password no es válido');
            
            }
            
        if(Validator.isEmail(email.value))
            {
                removeMessege('input-email');
            
            }else{
                
                createMessage('input-email','Tu e-mail no es válido');
            }
    
       if(Validator.hasItemSelected(lista))
            {
                removeMessege('selectBici');
            
            }else{
                
                createMessage('selectBici','Selecciona una Bici');
            }
        if (!Validator.isEmpty(social))
             {
                removeMessege('input-social');
            
            }else{
                
                createMessage('input-social','Escribe tu Twitter');
            }*/

}

function removeMessege(_inputID)
{
    var elemento = document.getElementById(_inputID);
    
    if(elemento.nextSibling !=null)
        {
            elemento.parentNode.removeChild(elemento.nextSibling);
        }
}

function createMessage(_inputID, _message)
{
          var elemento = document.getElementById(_inputID);
    if(elemento.nextSibling == null)
        {
            //el span no existe
            var span = document.createElement('span');
            span.innerHTML = _message;
            elemento.parentNode.appendChild(span);
            
        }else{
            
            //el span ya existe
            if (elemento.nextSibling.tagName == 'SPAN')
                {
                    
                    elemento.nextSibling.innerHTML = _message;
                    
                }else{
                    
                    elemento.parentNode.removeChild(elemento.nextSibling);
                    
                    
                    var span = document.createElement('span');
                    span.innerHTML = _message;
                    elemento.parentNode.appendChild(span);
                }
        }
}

var Validator ={
    
    isText:function (_string)
    {
        var regex = /([0-9]+)/;
        return !regex.test(_string);
    },
    
    isEmail:function (_string)
    {
        var regex=/([a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]+)/g;
        return regex.test(_string);
    },
    
    isValidPassword:function (_string)
    {
        var isValid = true;
        if(_string.length < 6 || _string == '098754'|| _string == '123456'|| _string == 'password')
            isValid = false;
        return isValid;
    },
    
    hasItemSelected:function (_string)
    {
        
        var isSelect=true;
        if(_string.value == 0)
            isSelect=false;
        return isSelect;
    },
    
    isEmpty:function (_string)
    {
        var empty=true;
        if(_string.value != "")
            empty=false;
        return empty;
    }
    
      
};

















/*+++++++++++++++*******************************************

var span=document.createElement("span");
var span2=document.createElement("span");
var span3=document.createElement("span");
var span4=document.createElement("span");
var span5=document.createElement("span");




function creaSpan(span,mensaje){
    var span=document.createElement("span");
}

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
            }
            
    if (name.toLowerCase())
        {
            document.getElementById("name").value= name.charAt(0).toUpperCase() + name.slice(1);
        }
        
    if (lastName.toLowerCase())
        {
            document.getElementById("lastname").value= lastName.charAt(0).toUpperCase() + lastName.slice(1);
        }   
   
}*/