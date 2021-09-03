//Código del cuadrado:
console.group("Cuadrados")
/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " unidades."); */

function perimetroCuadrado(lado) {
    return lado * 4; 
} 
//console.log("El perímetro del cuadrado es de: " + perimetroCuadrado + " unidades.");
function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("El área del cuadrado es de: " + areaCuadrado + " unidades cuadradas.");
console.groupEnd();

//Código del triángulo
console.group("Triángulos");
/*const ladoUnoTriangulo = 6;
const ladoDosTriangulo = 6;
const baseTriangulo = 4;

console.log("Los lados del triángulo miden: " 
    + ladoUnoTriangulo 
    + " cm, " 
    + ladoDosTriangulo 
    + " cm y " 
    + baseTriangulo 
    + " cm."
); */

/* const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + " cm.") */

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//console.log("El perímetro del triángulo es de: " + perimetroTriangulo + " cm.");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
//console.log("El área del triángulo es de: " + areaTriangulo + " cm^2.");
console.groupEnd();

//código del círculo
console.group("Círculos:")
/*
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;*/
const PI = Math.PI; 
/*
console.log("El radio del círculo es de " 
    + radioCirculo 
    + " cm, por lo que tiene un diámetro de: " 
    + diametroCirculo
); */

function diametroCirculo(radio) {
    return radio * 2;
}

function circunferencia(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI ;
}
//console.log("El perímetro del círculo es de: " + circunferencia + " cm.");

function areaCirculo(radio) {
    return PI * radio * radio;
}
//console.log("El área del círculo es de: " + areaCirculo + " cm^2.")

console.groupEnd();

//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}