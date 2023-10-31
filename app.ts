// Crear interfaces
interface auto{
  encender: boolean,
  velocidadMaxima: number,
  acelear(): void,
}
// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil:auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Joker{
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason:Joker = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Joker ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface City{
  ( ciudadanos: string[] ): number;
}
const ciudadGotica:City = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
interface clase{
  edad: number;
  estadoCivil: string;
  nombre: string;
  sexo: string;
  imprimirBio():void;
}
class Persona implements clase{
  public edad: number;
  public estadoCivil: string;
  public nombre: string;
  public sexo: string;
  
  imprimirBio(){
    
  }
}


