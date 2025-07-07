function validarNumero(valor) {
  if (typeof valor !== "number" || isNaN(valor)) {
    throw new Error("Ambos valores deben ser números válidos.");
  }
}

export function suma(a, b) {
  validarNumero(a);
  validarNumero(b);
  return a + b;
}

export function resta(a, b) {
  validarNumero(a);
  validarNumero(b);
  return a - b;
}

export function multiplicacion(a, b) {
  validarNumero(a);
  validarNumero(b);
  return a * b;
}

export function division(a, b) {
  validarNumero(a);
  validarNumero(b);
  if (b === 0) {
    throw new Error("No se puede dividir por cero.");
  }
  return a / b;
}

export default function info() {
  console.log("Este módulo permite realizar operaciones básicas: suma, resta, multiplicación y división.");
}
