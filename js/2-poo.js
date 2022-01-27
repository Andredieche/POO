// BANCO JAVASCRIPT

//class declaration
class Cliente {
  rut;
  nombre;
  saldo;
  
  constructor(rut, nombre, saldo) {
  this.rut=rut;
  this.nombre=nombre;
  this.saldo=saldo;
  }
  
  static bienvenida() {                                         // variables estátitcas: no es necesario crear una instancia para acceder a ellos.
    return `Bienvenido(a) al cajero, ingrese su tarjeta`;
  }
  
  mostrarInformacion() {
    return `Cliente: ${this.nombre}, su saldo es de: ${Intl.NumberFormat().format(this.saldo)}`; //con separación de miles
  }

}
// llamando al método estatic
console.log(Cliente.bienvenida());

//Clienta
const cliente1 = new Cliente(181236534, 'geraldine', 2000000);
console.log(cliente1.mostrarInformacion());