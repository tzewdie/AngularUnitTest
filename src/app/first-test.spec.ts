
import { fakeAsync, flush, tick } from "@angular/core/testing";

xdescribe("my first test", () => {
   let sut;
   beforeEach(() => {
       sut = {};
   });
   xit('should be true if true', () => {
       //arrange
       sut.a = false;

       //act
       sut.a = true

       //assert
       expect(sut.a).toBe(true);
   }) 

   xit("should test fakeasync", fakeAsync(() => {
        let isTest = false;
        setTimeout(() => {
            isTest = true;
            expect(isTest).toBe(true);
        }, 1000)
        flush();
   }))
})
