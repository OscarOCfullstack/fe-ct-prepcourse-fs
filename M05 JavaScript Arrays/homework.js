/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   for (let index = 0; index < array.length; index++) {
      array[index] = array[index] + 1;
      
   }   
   return (array);

}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ');
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return (array.includes(elemento));

}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var sumarray = 0;
   for (let index = 0; index < arrayOfNums.length; index++) {
      sumarray = sumarray + arrayOfNums[index];
      
   }
   return sumarray;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var sumarray = 0;
   for (let index = 0; index < resultadosTest.length; index++) {
      sumarray = sumarray + resultadosTest[index];
      
   }
   return (sumarray/resultadosTest.length);
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var masgrande = arrayOfNums[0];
   for (let index = 1; index < arrayOfNums.length; index++) {
      if (arrayOfNums[index] > masgrande)
         masgrande = arrayOfNums[index];
      
   }
   return masgrande;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var resultmult = 1;
    var array = '';
    array = Array.from(arguments);
    if (array.length < 1) {
       return (0);
    } else if (array.length == 1) {
       return (array[0]);
    } else {
        resultmult = array[0];
       for (let index = 1; index < array.length; index++) {
          resultmult = resultmult * array[index];
       }
       return resultmult;
    }
    
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var contador = 0;
   if (array.length > 0){
      for (let index = 0; index < array.length; index++) {
        if (array[index] > 18) {
          contador = contador + 1;
         }
      }
   }
   return contador;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if ((numeroDeDia > 0) && (numeroDeDia < 8)) {
      if ((numeroDeDia > 1) && (numeroDeDia < 7)) {
         return ('Es dia laboral');
      } else {
         return ('Es fin de semana');
      }
   } else {
      return ('El dia no pertenece al rango requerido');
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   while (num >= 10) {
       num = num / 10;
   }
   if ((Math.trunc(num) == 9))
      return true;
   else  
      return false;
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var iguales = true;
   if (array.length > 1){
     for (let index = 0; index < array.length - 1; index++) {
         if (array[index] != array[index+1]) {
            iguales = false;
         }
      }
      return iguales;
  } else {
     return false;
  }
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var nuevoarray = [];
  if (array.length > 2){
      for (let index = 0; index < array.length; index++) {
         if (array[index].includes('Enero') || array[index].includes('Marzo') || array[index].includes('Noviembre')) {
            nuevoarray.push(array[index]);
         }      
      }
      if (nuevoarray.length < 3)
         return ('No se encontraron los meses pedidos');
      else
        return nuevoarray;
    } else 
    return('No se encontraron los meses pedidos');
}


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var arreglonuevo = [];
   for (let index = 0; index < 11; index++) {
      arreglonuevo.push(6*index);
      
   }
   return arreglonuevo;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var arrmayor = [];
   for (let index = 0; index < array.length; index++) {
      if (array[index] > 100){
         arrmayor.push(array[index]);
      }
      
   }

   return arrmayor;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var i = 0, rompio = false;
    var array = [];
    while (i < 10) {
      i = i + 1;
      if (num === i){
          rompio = true;
          break;
      } else {
         num = num + 2;
         array.push(num);
      }
    }
    if (rompio) {
      return ('Se interrumpió la ejecución');
    } else {
      return array;     
    }

}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var i = 0, sum = 0;
   var array = [];
   while (i < 10) {
      i = i + 1;
      if (i == 5)
           continue;
      array.push(num = num + 2);
      
   }
   return array;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
