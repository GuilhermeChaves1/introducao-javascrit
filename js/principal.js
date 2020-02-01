var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {
    
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");
    
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    
    var alturaEhValida = true;
    var pesoEhValido = true;
    
    if(peso <= 0 || peso >= 1000) {
        console.log("Peso Inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invaido");

    }
    if (altura <= 0 || altura >= 3.00){
        console.log("Altura Inválida")
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválido";
        paciente.classList.add("paciente-invaido");
    }
    if (alturaEhValida && pesoEhValido) {
        var imc = peso/(altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}




console.log(imc);

