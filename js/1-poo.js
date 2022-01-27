// Automovil


//class declaration
class Automovil {
  ruedas;
  puertas;
  motor;

  constructor( r = 0, puertas = 0, motor='') {
    this.ruedas = r;
    this.puertas = puertas;
    this.motor = motor;
  }

  // Métodos (conocidos como acciones) arrancar/encender, acelerar, frenar
  encender() {
  console.log('encender Automovil')
  }

  acelerar() {
  console.log('acelerar Automovil')
  }

  frenar() {
  console.log('frenar Automovil')
  }


}

const auto1 = new Automovil(4,4,'eléctrico');
console.log(auto1);

























// //class expresion
// const Automovil = class {

// }