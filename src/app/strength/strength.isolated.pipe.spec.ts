import { StrengthPipe } from "./strength.pipe"

describe("StrengthPipe", () => {
    beforeEach(() => {
        
    })
    it('should return strengh weak when value is less than 10', () => {
        //arrange
        let strength = new StrengthPipe();
        //act
        let result = strength.transform(5);
        //assert
        expect(result).toBe('5 (weak)');
    });
    it('should return strengh strong when value is greater than 10', () => {
        //arrange
        let strength = new StrengthPipe();
        //act
        let result = strength.transform(11);
        //assert
        expect(result).toBe('11 (strong)');
    })
})