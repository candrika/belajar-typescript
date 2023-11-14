describe("union data",function(){
    it('sholud support unoin data',function(){
        let sample: number | String | boolean ="Dhika";
        console.info(sample);

        sample = 100;
        console.info(sample);

        sample = true;
        console.info(sample);

    })

    it("Should support typeof operator",function(){
        function process(value:number| string |boolean){
            if(typeof value ==="string"){
                return value.toUpperCase();
            }else if(typeof value ==="number"){
                return value*2;
            }else{
                return !value
            }
        }

        expect(process("Eko")).toBe("EKO");
        expect(process(100)).toBe(200);
        expect(process(true)).toBe(false);

    })
})