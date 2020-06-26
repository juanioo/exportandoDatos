const Math = {};
function add(x1, x2){
    return x1 + x2;
}
function substract(x1, x2){
    return x1 - x2;
}
function multiply(x1, x2){
    return x1 * x2;
}
function divide(x1, x2){
    if(x2 == 0){
        console.log('No se puede dividir por 0');
    }
    else{
        return x1 / x2;
    }
}
function hello(name){
    console.log('Hello', name);
}

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

//EXPORTA OBJETOS, FUNCIONES, VARIABLES Y CUALQUIER DATO DE JS
module.exports = Math;
module.exports = hello;

/* EXPORTA PROPIEDADES DE OBJETOS
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
*/