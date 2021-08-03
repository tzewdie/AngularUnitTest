import { of } from "rxjs";
import { HeroesComponent } from "../heroes/heroes.component";

describe("HeroesComponent", () => {
    let Heroes;
    let component: HeroesComponent;
    let mockHeroService;
    beforeEach(() => {
        Heroes = [
            {id: 1, name:'Spider Man', strength: 8},
            {id: 2, name:'Super Man', strength: 8},
            {id: 3, name:'Wonderful Women', strength: 8}
        ];
        mockHeroService = jasmine.createSpyObj(['getHero', 'addHero', 'deleteHero'])
        component = new HeroesComponent(mockHeroService);
    })

    describe('deleteHero', () => {

        //state based test
        it('should delete hero from heroes list', () => {
            //Arrange
            mockHeroService.deleteHero.and.returnValue(of(true))
            component.heroes = Heroes;

            //Act           
            component.delete(Heroes[0]);

            //Assert
            expect(component.heroes.length).toBe(2);
        });

        //interaction test(state less test)
        xit('should call deleteHero method in mockHeroService', () => {
            //Arrange
            
            //Act           
            component.delete(Heroes[0]);

            //Assert
            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(Heroes[0]);
        })
    })
})