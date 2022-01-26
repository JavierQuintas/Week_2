import { Person } from "./person";
import { Contacts } from "./contacts";

let persona1 =new Person("Lau", 20, "C/Plateros")
let persona2 =new Person("Rober", 24, "C/Cristal")
let persona3 =new Person("Pilar", 50, "C/Zamora")


// let persona1 = new Contacts
let listaContactos = new Contacts
listaContactos.people =  [persona1, persona2, persona3]

listaContactos.printCalendar()