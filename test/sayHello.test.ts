import { sayHello } from "../src/say-hello";

describe('sayHello',function(){
    it('should return hello dika', function(){
        expect(sayHello('dika')).toBe("Hello dika");
    });
});