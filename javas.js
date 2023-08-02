
let getsubmit= document.getElementById("submit");
let getreset= document.getElementById("reset");

let myArray=[]

getsubmit.addEventListener("click", function (e){
    e.preventDefault();
    let getNombre= document.getElementById("nombre").value;
    let getContraseña= document.getElementById("contraseña").value;
    let getEmail= document.getElementById("email").value;
    let getEdad= document.getElementById("edad").value;
    myArray.push(getNombre, getContraseña, getEmail, getEdad)
    console.log(myArray)
})

getreset.addEventListener("click", function(o) {
    o.preventDefault();
    getNombre.value()=null;
    getContraseña.value()=null;
    getEmail.value()=null;
    getEdad.value()=null;
})
