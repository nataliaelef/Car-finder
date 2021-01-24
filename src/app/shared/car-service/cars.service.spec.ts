import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CarsService } from './cars.service';

describe('CarsService', () => {
  let service: CarsService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [CarsService]
    });
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(CarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getMakes', () => {
    it('should check that the request is GET request', () => {
      service.getMakes().subscribe();

      const req = httpMock.expectOne("http://localhost:8080/api/makes");


      expect(req.request.method).toEqual('GET');
    });
  });

  describe('getCarsByMake', () => {
    it('should check that the request is GET request', () => {
      service.getCarsByMake('BMW').subscribe();

      const req = httpMock.expectOne("http://localhost:8080/api/models?make=BMW");

      expect(req.request.method).toEqual('GET');
    });
  });

  describe('getVehiclesDetails', () => {
    it('should check that the request is GET request', () => {
      service.getVehiclesDetails('BMW', '3er').subscribe();

      const req = httpMock.expectOne("http://localhost:8080/api/vehicles?make=BMW&model=3er");

      expect(req.request.method).toEqual('GET');
    });
  });
});
