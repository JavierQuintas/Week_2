import { Person } from "./person";

let contacto1 = new Person("Lau", 20, "C/Plateros");

console.log(contacto1.getAddress())
contacto1.setAddress("Direccion set cambiada")
console.log(contacto1.getAddress())

