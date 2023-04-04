/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let i = 0;
   arreglo = [];
   elemento = [];
   for (prop in objeto) {
       arreglo[i] = [prop, objeto[prop]];
       i++;
   }
   return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   class prop{
      constructor(){
      }
  };
  let propiedad = new prop();
   let frase = [], aux = [], cuenta = [];
  frase = string.split('').sort();
  contador = 1;
  for (let i = 0; i < frase.length; i++) {
      if (frase[i+1] == frase[i]) {
         contador++;
      } else {
          aux.push(frase[i]); 
          cuenta.push(contador);
          contador = 1;    
      }
  }
  for (let i = 0; i < aux.length; i++) {

      propiedad[aux[i]] = cuenta[i];
   
  }
return (propiedad);

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let inicio = '', fin = '';
   for (let i = 0; i < string.length; i++) {
       if (string.charAt(i).toUpperCase() === string.charAt(i)){
          inicio = inicio + string.charAt(i);
       }else {
           fin = fin + string.charAt(i);
       }
       
   }
   return inicio+fin;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let cade = '';aux = [], cadefinal = [], string = frase;
   let posicion = 0;
    for (i = 1; 0 < string.length; i++){
       posicion = string.indexOf(' ');
       if ((posicion < 0) && (string.length > 0) ) {
           cade = string.substring(0);
           aux = cade.split('');
           cade = aux.reverse().join('');
           cadefinal = cadefinal + cade;
           string = '';
           break;
       }  else {
           cade = string.slice(0,posicion);
           string = string.substring(posicion+1);
           aux = cade.split('');
           cade = aux.reverse().join('');
           cadefinal = cadefinal + cade + ' ';
       }
    }
    
return (cadefinal);
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   
   let numeroaux = '', numorig = '';
   numeroaux = numero.toString();
   numorig = numeroaux.split('').reverse().join('');
   if (numorig === numeroaux) {
       return ('Es capicua');
   } else {
       return ('No es capicua');
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let aux = [], cadefinal = [];
   aux = string.split('');
   for (let i = 0; i < aux.length; i++) {
      if ((aux[i] != 'a') && (aux[i] != 'b') && (aux[i] != 'c') ) {
         cadefinal.push(aux[i]);
      }
   }
   return (cadefinal.join(''));
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   for (let i = 0; i < arrayOfStrings.length; i++) {
      for (let j = i+1 ; j < arrayOfStrings.length; j++) {
          if (arrayOfStrings[i].length > arrayOfStrings[j].length ) {
              let auxiliar = arrayOfStrings[i];
              arrayOfStrings[i] = arrayOfStrings[j];
              arrayOfStrings[j] = auxiliar;
          }  
      }  
  }
      return(arrayOfStrings);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let aux=[];
   for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j< array2.length; j++) { 
         if (array1[i] == array2[j]) {
            aux.push(array1[i]);
            break;
         } 
      }
   }
   return aux.sort();
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
