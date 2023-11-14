describe("Function",function(){
    it("Should support function in taypescript",function(){
        function sayHello(name: string): string{
            return `Hello ${name}`
        }

        expect(sayHello("Dhika")).toBe("Hello Dhika");

        function printHello(name: string):void{
            console.info(`Hello ${name}`)
        }

        printHello("Kurniawan");
    });

    it('Should support function default',function(){
        function sayHello(name: string="Guest"){
            return `Hello ${name}`
        }

        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Dhika")).toBe("Hello Dhika");

    })

    it('Should support rest parameter',function(){
        function sum(...values: number[]):number{
            let total = 0;

            for(const value of values){
                total +=value
            }

            return total;
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15);
        // expect(sayHello("Dhika")).toBe("Hello Dhika");

    })

    it('Should support optional parameter',function(){
        function sayHello(firstName: string, lastName?:string):string{
            if(lastName){
                return `Hello ${firstName} ${lastName}`
            }else{
                return `Hello ${firstName}`
            }
        }

        expect(sayHello('Chandrika')).toBe("Hello Chandrika");
        expect(sayHello('Chandrika','Eka Kurniawan')).toBe("Hello Chandrika Eka Kurniawan");
        // expect(sayHello("Dhika")).toBe("Hello Dhika");

    })

    it('Should support overload function',function(){
        function callMe(value: string):string;
        function callMe(value:number):number;

        function callMe(value: any):any{
            if(typeof value === "string"){
                return value.toUpperCase()
            }else if(typeof value === "number"){
                return value*10
            }
        }

        expect(callMe('Chandrika')).toBe("CHANDRIKA");
        expect(callMe(10)).toBe(100);

    })

    it("Should function as parameter", function(){
        
        function sayHello(name: string, filter:(name: string)=>string):string{
            return `Hello ${filter(name)}`;
        }

        function toUpper(name: string):string{
            return name.toUpperCase();
        }

        expect(sayHello("Eko", toUpper)).toBe("Hello EKO")
        expect(sayHello("Eko", function(name:string):string{
            return name.toUpperCase()
        })).toBe("Hello EKO")

        expect(sayHello("Eko",(name:string):string=>name.toUpperCase())).toBe("Hello EKO")
    })
})