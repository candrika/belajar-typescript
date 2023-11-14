describe("Object",function(){
    it("Should support object in ts",function(){
        const person:{id:number, name:string, hobbies?:string[]} = {
            id:1,
            name:"Dhika"
        }

        console.log(person)

        person.id = 2;
        person.name = "Kurniawan"

        console.log(person)
    })
})