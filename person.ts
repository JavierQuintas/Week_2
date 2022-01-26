export class Person 
{
    //atributos
    public name: string;
    public age:number;
    private address: string;
    
    constructor(name:string, age:number, address:string )
    {
        this.name = name;
        this.age = age;
        this.address=address;
    }


    public printName()
    {
    console.log(this.name)
    }


    yearOfBirth(currentYear:number):number
    {
        return currentYear - this.age;
    }


    setAddress(address:string)
    {
        this.address = address
    }

    
    getAddress():string
    {
        return this.address
    }

}