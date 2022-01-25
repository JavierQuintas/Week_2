
const Person = require('./person');
const Contacts = require('./contacts');

let persona1 = new Person(1.49, 50.5, "Castaño Oscuro", 38, 2002, ["Cocinar", "futbol", "correr"])
let persona2 = new Person(1.75, 60, "castaño", 43, 2002, ["nadar", "leer", "correr"])
let persona3 = new Person(1.70, 70, "rubio", 40, 1998, ["peliculas", "padel", "ciclismo"])

let contacto1 = new Contacts()
contacto1.persons = [persona1, persona2, persona3];

contacto1.printPersons()