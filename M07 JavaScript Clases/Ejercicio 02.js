/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.
   constructor (nombre, apellido, edad, domicilio){
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
   }
   detalle = function () {
      var objetoreg = {
      nombre: '',
      apellido: '',
      edad: 0,
      domicilio: '',
      };
      objetoreg.nombre = this.nombre;
      objetoreg.apellido = this.apellido;
      objetoreg.edad = this.edad;
      objetoreg.domicilio = this.domicilio;
         return (objetoreg);
     }

   }

function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:

   let objetoPersona = new Persona(nombre, apellido, edad, domicilio);
       return (objetoPersona);

}

function agregarMetodo() {
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:
//   let objPersona = new Persona(nombre,apellido, edad, domicilio);
   Persona.prototype.datos = function () {
   return (this.nombre + ', ' + this.edad + ' años');
}
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
