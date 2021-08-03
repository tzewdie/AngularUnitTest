import { compileBaseDefFromMetadata } from "@angular/compiler";
import { NO_ERRORS_SCHEMA } from "@angular/core";

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule} from "@angular/router/testing"
import { HeroComponent } from "./hero.component";

describe("HeroComponent", () => {
    let fixiture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            /* imports: [
                RouterTestingModule.withRoutes(
                  [
                      {path: '', component: HeroComponent}, {path: 'simple', component: HeroComponent}
                  ]
                )
              ] */
            //schemas:[NO_ERRORS_SCHEMA]
        })
        fixiture = TestBed.createComponent(HeroComponent);
    });
    it('should have the correct hero', () => {
        fixiture.componentInstance.hero = {id: 1, name: "Supper hero", strength:8};

        expect(fixiture.componentInstance.hero.name).toEqual("Supper hero");
    })
})