import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { CarsService } from 'src/app/shared/car-service/cars.service';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { NavigationComponent } from 'src/app/shared/navigation/navigation.component';
import { CarDetailsComponent } from './car-details.component';

const details = [
  {
    "make": "BMW",
    "model": "3er",
    "enginePowerPS": 184,
    "enginePowerKW": 135,
    "fuelType": "Hybrid",
    "bodyType": "Limousine",
    "engineCapacity": 1998
  },
  {
    "make": "BMW",
    "model": "3er",
    "enginePowerPS": 150,
    "enginePowerKW": 110,
    "fuelType": "Diesel",
    "bodyType": "Limousine",
    "engineCapacity": 1995
  }
];

class MockCarsService {
  getVehiclesDetails(make: string, model: string) {
    return new Observable((subscriber) => {
      subscriber.next(details);
      subscriber.complete();
    });
  }
}

describe('CarDetailsComponent', () => {
  let component: CarDetailsComponent;
  let fixture: ComponentFixture<CarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CarDetailsComponent,
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
    fixture = TestBed.createComponent(CarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the vehicle details', () => {
    expect(component.vehicles).toEqual(details);
  });
});
