
 class Person
{

    constructor(altura, peso, colorPelo, tallaPie, yearOfBirth, hobbies)
    {

        this.altura = altura
        this.peso = peso
        this.colorPelo = colorPelo
        this.tallaPie = tallaPie
        this.yearOfBirth = yearOfBirth
        this.hobbies = hobbies
    }

    // Método
    calcIMC()
    {
        return this.peso / (this.altura**2)
    }

    edad()
    {

        let anyoActual = new Date().getFullYear();
        return anyoActual - this.yearOfBirth;
    }

    printAll()
    {
       
        
        for( let prop in this)
            {

                console.log(prop + "-" + this[prop])
                 
            }
        
    }


    printHobbies()
    {
       let i = 0;
        for (i = 0 ; i < this.hobbies.length ; i++)
        return this.hobbies[i]
    }

}
module.exports = Person