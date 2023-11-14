describe('Array',function(){
    it("Should same with javascrip",function(){
        const name: string[]=["Paulina","Dhika","Jaka"];
        const nilai: number[]=[1,2,3];

        console.log(name)
        console.log(nilai)
    });

    it("Should support readOnly Array",function(){
        const hobbies: ReadonlyArray<string> =["Membaca","Menulis"];
    })

    it("should support tupple",function(){
        const person: readonly [string, string, number] = ["Eko", "Khennedy",1];

        console.log(person[0])
        console.log(person[1])
        console.log(person[2])
    })
});