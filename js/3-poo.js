//class declaration
class Cliente {
    
    #nombre;                           //# indica que la propiedad es privada
    #saldo;
    
    constructor(nombre, saldo) {
    this.#nombre=nombre;
    this.#saldo=saldo;
    }
    
    static bienvenida() {                                         // variables estátitcas: no es necesario crear una instancia para acceder a ellos.
      return `Bienvenido(a) al cajero, ingrese su tarjeta`;
    }
    
    mostrarInformacion() {
      return `Cliente: ${this.#nombre}, su saldo es de: ${Intl.NumberFormat().format(this.#saldo)}`; //con separación de miles
    }
  }

  const cliente1 = new Cliente('Miguel', 2000000);                  // new: crea una instancia.
  console.log(cliente1.#nombre);
  console.log(cliente1.#saldo);