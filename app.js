import info, { suma, resta, multiplicacion, division } from './cacluladora.js';


function caclular(operacion, valor1, valor2) {
  try {
    let resultado;

    switch (operacion) {
      case 'suma':
        resultado = suma(valor1, valor2);
        break;
      case 'resta':
        resultado = resta(valor1, valor2);
        break;
      case 'multiplicacion':
        resultado = multiplicacion(valor1, valor2);
        break;
      case 'division':
        resultado = division(valor1, valor2);
        break;
      default:
        throw new Error("Operación no válida. Usá: suma, resta, multiplicacion o division.");
    }

    console.log(`Resultado de la ${operacion}:`, resultado);
  } catch (error) {
    console.error("Error:", error.message);
  }
}


info();


caclular("suma", 8, 2);
caclular("resta", 10, 3);
caclular("multiplicacion", 4, 5);
caclular("division", 20, 4);

// Casos con errores (opcional para probar)
caclular("division", 5, 0);           // Error por división por cero
caclular("potencia", 2, 3);           // Operación no válida
caclular("suma", "hola", 5);          // Parámetro no numérico
