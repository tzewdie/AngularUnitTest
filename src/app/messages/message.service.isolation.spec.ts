import { MessageService } from "../message.service";

describe("MessageService", () => {
    beforeEach(() => {
        
    })
    it('should add message', () => {
        //arrange
        let service = new MessageService();
        //act
        service.add("This is test message");
        //assert
        expect(service.messages.length).toBe(1);
    });
    it('should clear message', () => {
        //arrange
        let service = new MessageService();
        service.add("This is test message");
        //act
        let result = service.clear();
        //assert
        expect(service.messages.length).toBe(0);
    })
})