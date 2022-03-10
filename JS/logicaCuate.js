const envios1 = document.querySelector(".envios1");
const envios2 = document.querySelector(".envios2");
const envios3 = document.querySelector(".envios3");
const envios4 = document.querySelector(".envios4");

const tituloInfo1 = document.querySelector(".tituloInfo1")
const tituloInfo2 = document.querySelector(".tituloInfo2")
const tituloInfo3 = document.querySelector(".tituloInfo3")
const tituloInfo4 = document.querySelector(".tituloInfo4")

envios1.addEventListener("click",accionEnvios);
envios2.addEventListener("click",accionEnvios);
envios3.addEventListener("click",accionEnvios);
envios4.addEventListener("click",accionEnvios);

const banda = document.querySelector(".banda");
const mail = document.querySelector(".mail");

const alerta = document.querySelector(".mensajeAlerta");

function accionEnvios(e){
    let error = validar();
    if(error[0]){
        e.preventDefault();
        alerta.classList.add("redAlert");
        alerta.innerHTML=error[1];
    }
    else{
        alert("Enviado correctamente, nos comunicaremos en breve.")
    }
}
const validar = ()=>{
    let error = [];
    if(banda.value.length<1||banda.value.length>40){
        error[0]=true;
        error[1]="No se permiten menos de 1 caracteres ni mas de 40, intentelo denuevo."
        return error;
    }
    else if(mail.value.indexOf("@")==-1||mail.value.indexOf(".")==-1||mail.value.length<5||mail.value.length>40){
        error[0]=true;
        error[1]="El mail ingresado no es valido";
        return error;
    }
    error[0]=false;
    return error;
}




const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const p4 = document.querySelector(".p4");

tituloInfo1.addEventListener("click",()=>{
        let isHidden = p1.getAttribute("hidden");
        isHidden ? p1.removeAttribute("hidden") : p1.setAttribute("hidden","true");
})
tituloInfo2.addEventListener("click",()=>{
        let isHidden = p2.getAttribute("hidden");
        isHidden ? p2.removeAttribute("hidden") : p2.setAttribute("hidden","true");
})
tituloInfo3.addEventListener("click",()=>{
        let isHidden = p3.getAttribute("hidden");
        isHidden ? p3.removeAttribute("hidden") : p3.setAttribute("hidden","true");
})
tituloInfo4.addEventListener("click",()=>{
        let isHidden = p4.getAttribute("hidden");
        isHidden ? p4.removeAttribute("hidden") : p4.setAttribute("hidden","true");
})