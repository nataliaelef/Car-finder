import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { CarsService } from 'src/app/shared/car-service/cars.service';
import { ErrorComponent } from 'src/app/shared/error/error.component';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { NavigationComponent } from 'src/app/shared/navigation/navigation.component';
import { HomeComponent } from './home.component';

const makes = [
  "ALFA ROMEO",
  "AUDI",
  "AUSTIN",
  "BARKAS",
  "BMW",
  "CORVETTE",
  "DACIA",
  "DAEWOO",
  "DAF"
];

class MockCarsService {
  getMakes() {
    return new Observable((subscriber) => {
      subscriber.next(makes);
      subscriber.complete();
    });
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        LoadingComponent,
        ErrorComponent,
        NavigationComponent
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        { provide: CarsService, useClass: MockCarsService }
      ]

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should return the makes', () => {
      expect(component.allMakes).toEqual(makes);
      expect(component.visibleMakes).toEqual(component.allMakes.slice(0, 6));
    });
  });

  describe('showMoreMakes', () => {
    it('should show all the makes', () => {
      component.showMoreMakes();
      expect(component.visibleMakes).toEqual(makes)
    });

    it('button should be called', fakeAsync(() => {
      spyOn(component, 'showMoreMakes');

      let button = fixture.debugElement.nativeElement.querySelector('button');
      button.click();
      tick();
      expect(component.showMoreMakes).toHaveBeenCalled();
    }));

  });
});
