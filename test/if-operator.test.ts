describe("IF Statement",function(){
    it("Should support in typescript",function(){
        
        const examValue = 90; 
        if(examValue > 80){
            console.info("Good")
        }else if(examValue > 60){
            console.info("Not Bad")
        }else{
            console.info("Try Again")
        }   
    })

    it("Should support tenary in typescript",function(){
        
        const value = 90; 
        const say = value >= 75 ? "Congratulation":"Try Again"  
        console.info(say)
    })

    it("Should support swict in typescript",function(){
        
        function sayHello(name: string):string{
            switch(name){
                case "Eko":
                    return "Hi Eko"
                case "Budi":
                    return "Hi Budi"
                default:
                    return "Hello"   
            }
        }

        console.info(sayHello("Eko"))
        console.info(sayHello("Budi"))
        console.info(sayHello("Joko"))
    })
})