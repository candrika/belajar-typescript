describe("Option",function(){
    it("Should support option in taypescript",function(){
        function sayHello(name?: string |null){
            if(name){
                console.info(`Hello ${name}`)
            }else{
                console.info('Hello')
            }
        }

        sayHello("Dhika");
        const name: string | undefined = "Kurniawan";

        sayHello(name)
        sayHello(null)
    })
})