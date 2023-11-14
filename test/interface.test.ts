import { Employee, Manager } from "../src/employee";
import { person } from "../src/person";
import { Seller } from "../src/seller"

describe("Interface",function(){
    it("Should support in ts",function(){
        const seller: Seller={
            id:1,
            name:'Toko ABC',
            nib:"123123123",
            npwp:"12312313"
        }

        seller.name="Toko Dhika";

        console.log(seller)
    });

    it("Should support function interface in ts",function(){
        
        interface AddFunction{
            (value1:number, value2:number):number;
        }

        const add: AddFunction = (value1:number, value2:number):number=>{
            return value1 + value2;
        }

        expect(add(2,2)).toBe(4)
    });

    it("Should support indexable interface in ts",function(){
        
        interface StringArray{
            [index:number]:string
        }

        const names:StringArray = ["Dhika", "Eka", "Kurniawan"]

        console.info(names)
    });

    it("Should support indexable interface for non number index in ts",function(){
        
        interface StringDictionary{
            [ket:string]:string
        }

        const dicsionary:StringDictionary = {
            name:"Dhika",
            address:"Indenesia"
        }

        expect(dicsionary["name"]).toBe("Dhika");
        expect(dicsionary["address"]).toBe("Indenesia");

    });

    it("Should support extends interface in ts",function(){
        
        const employee: Employee = {
            id:"1",
            name:"Eko",
            disivion:"IT"
        }
        console.info(employee)

        const manager: Manager = {
            id:"2",
            name:"Kurniawan",
            disivion:"IT",
            numberOfEmploye:10
        }

        console.info(manager)
    });


    it("Should support function in interface ts",function(){
        
        const person: person = {
           name:"Eko",
           sayHello:function(name: string):string{
                return `Hello ${name} my name is ${this.name}`
           }
        }
        
        console.info(person.sayHello("Budi"));
    });

    it("Should support intersection ts",function(){
        
        interface HasName{
            name:string
        }

        interface HasId{
            id:string
        }
        //  type Domain = HasId & HasName;
        type Domain = HasId & HasName;

        const domain: Domain ={
            id:'1',
            name:"Eko"
        };

        console.info(domain);
    });

    it("Should support intersection ts",function(){
        
        const person: any ={
            name:'Eko',
            age:30
        };

        const person2: Person = person as Person;
        console.info(person2);
    });
})