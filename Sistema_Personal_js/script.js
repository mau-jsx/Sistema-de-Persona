const Persona = [];

function AgregarPersona(){
    let cantidad = parseInt(prompt("Ingrese la cantidad de personas que queria registrar"));
    if(isNaN(cantidad) || cantidad <= 0){
        alert("Ingrese una cantidad valida");
        return;
    }
    for (let i = 0; i < cantidad; i++) {
        let Nombre = prompt("Ingrese el nombre de la persona");
        let Edad = parseInt(prompt("Ingrese la edad de la persona"));
        let Nota = parseFloat(prompt("Ingrese la nota de la persona"));

        if( Nombre && !isNaN(Edad) && !isNaN(Nota)){
            Persona.push({Nombre, Edad, Nota});
        }else{
            alert("Ingrese datos validos");
        }
    }
}

function MostrarPersonas(){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<h3>Personas Registradas</h3>";
    Persona.forEach( p => {
        resultado.innerHTML += ` Nombre:<p>${p.Nombre} - Edad: ${p.Edad} - Nota: ${p.Nota}</p>`
    });
}

function iniciar(){
    let continuar = true;
    while(continuar){
        AgregarPersona();
        continuar = confirm("Desea Agregar una persona?");
    }

    MostrarPersonas();
}

