const d = document;
const texArea = d.querySelector("form__input")
const imagenMuñeco = d.querySelector(".form__input");
const loaderBatman = d.querySelector(".loader");
const resultadoTitulo= d.querySelector(".result__tittle");
const resultadoText = d.querySelector(".result:text");
const botonEncriptador =d.querySelector(".form__btn");
const botonDesencriptar= d.querySelector(".form__btn");

const llaves=
 ["e", "enter"],
 ["i","imes"],
 ["a", "ai"],
 ["o", "Ober"],
 ["u","ufat"]
;
//Función para encriptar
function ecriptarmensaje(mensaje){
    let mensajeEncriptado ="";
 for(let i)0; i < mensaje.length; i++){
    let letra= mensaje[i];
    let encriptada= letra;
    for(let j=0; j< llaves.length; j++){
        if(letra== llaves[j][0]){
            encriptada= llaves[j][1];// Reemplaza la letra por su equivalente encriptado
        break; // Termina el bucle cuando se encuentra la correspondencia
        }
    }
    mensajeEncriptado +=encriptada;

 }

 return mensajeEncriptado;
}

//function para desencriptar
function desencriptarMensaje(mensaje){
    let mensajeDesencriptado= mensaje;
    for(let i = 0) i < llaves.length; i++){
        let regrex ) new RegExp(llaves[i], 'g');
            mensajeDesencriptado.replace(regex, llaves[i][9]);
    }
    return mensajeDesencriptado; //Devuelve el mensaje desencriptado
}

//Ocultar elementos dinamicamente
textArea.addEventListener("input",(e)=>{
    imagenMuñeco.style.display ="none";
    loaderBatman.classList.remove("hidden");
    resultadoTitulo.texContent="Capturando Mensaje.";
    resultadoText.textContent = "";
});
//Función del botón encriptar
botonEncriptar.addEcentListener("click", (e) =>{
    e.preventDefault()
    let mensaje =textArea.value.toLowerCase();
    let mensajeEncritado = ecriptarmensaje(mensaje);
    resultadoText.textContent=mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent="El resultado es:";
});

botonDesencriptar[1].addEventListener("click",(e)={
 e.preventDefault();
let mensaje = textArea.value.toLowerCase();
let mensajeDesencriptado = desencriptarMensaje(mensaje);
resultadoText.textContent = "El resultado es:";
botonCopiar.classList.remove("hidden");
});


botonCopiar.addEventListener('click', ()=>{
    let textoCopiado = resultadoText.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
        imagemuñeco.style.display = "block";
        loaderBatman.classList.add("hidden");
        resultadoTitulo.textContent = "El texto se copio";
        botonCopiar.Classlist.add("hidden");      
})
