describe("Tupple",function(){
    it("should support data type any",function(){
        const person: any = {
            id:1,
            name:'Dhika',
            age:35
        }

        person.age=31;
        person.address="Purworejo"

        console.info(person)
    })
})