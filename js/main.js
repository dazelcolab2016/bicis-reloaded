var toValidate = [
    {id:"name", mensaje:"Ingresa tu nombre", validations:[" empty;text"]},
    {id:"lastname", mensaje:"Ingresa tu Apellido", validations:["text",]},
    {id:"input-email", mensaje:"Ingresa tu Email", validations:["email"]},
    {id:"input-password", mensaje:"Ingresa un Password", validations:["password"]},
    {id:"input-social", mensaje:"ingresa tu Twitter", validations:["empty"]}   
    
];

//PROGRAMACION CON OBJETOS
function validateForm(){
  
    for(var i in toValidate)
    {
        var input     = document.getElementById(toValidate[i].id);
        console.log(toValidate[i].validations);
        for(var v in toValidate[i].validations)
        {
            console.log(toValidate[i].validations[v]);
            switch(toValidate[i].validations[v])
            {
                 case "text":
                    if(Validator.isText(input.value))
                    {
                        removeMessege(toValidate[i].id);
                    }else{
                        createMessage(toValidate[i].id, toValidate[i].mensaje);
                    }
                    break;  
                
                case "email":
                    //code
                    if(Validator.isEmail(input.value))
                        {
                            removeMessege(toValidate[i].id);
                        }else{
                            createMessage(toValidate[i].id,toValidate[i].mensaje);
                        }
                    break;
                case "password":
                    //code
                    if(Validator.isValidPassword(input.value))
                        {
                            removeMessege(toValidate[i].id);
                        }else{
                            createMessage(toValidate[i].id,
                            toValidate[i].mensaje);
                        }
            }
        }
    }
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
        var vacio=true;
        if(_string.value != "")
            vacio=false;
        console.log("lleno2");
        return vacio;
    }
    
};
