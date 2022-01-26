import { Person } from "./person";

export class Contacts
{
    public people: []


    constructor ()

    {
        this.people = []
    }


    printCalendar()

    {
        for(let i=0; i<this.people.length;i++)
        {
            console.log(this.people[i])
        }
    }


}