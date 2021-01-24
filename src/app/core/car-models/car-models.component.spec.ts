import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { CarsService } from 'src/app/shared/car-service/cars.service';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { NavigationComponent } from 'src/app/shared/navigation/navigation.component';
import { CarModelsComponent } from './car-models.component';

const makes = [
  "ALFA ROMEO",
  "AUDI",
  "AUSTIN",
  "BARKAS",
  "BMW",
  "CADILLAC",
  "CHEVROLET",
  "CHRYSLER",
  "CITROEN"
];



class MockCarsService {
  getCarsByMake(make: string) {
    return new Observable((subscriber) => {
      subscriber.next(makes);
      subscriber.complete();
    });
  }
};


describe('CarModelsComponent', () => {
  let component: CarModelsComponent;
  let fixture: ComponentFixture<CarModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CarModelsComponent,
        LoadingComponent,
        NavigationComponent
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        { provide: CarsService, useClass: MockCarsService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should return the makes', () => {
      expect(component.models).toEqual(makes);
    });
  });
});
