import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarModel } from 'src/app/models/car.model';


@Injectable({
  providedIn: 'root'
})
export class CarsService {
  baseUrl: string = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  /**
   * This methods returns all the makes.
   */
  getMakes(): Observable<string[]> {
    return this.http.get<any>(`${this.baseUrl}makes`);
  }

  /**
   * This method returns the cars of a make as an Observable.  
   * @param make The make of the cars
   */
  getCarsByMake(make: string): Observable<string[]> {
    return this.http.get<any>(`${this.baseUrl}models?make=${make}`);
  }

  /**
   * This method returns the vehicles that match the make and model passed as an Observable.
   * @param make The make of the cars
   * @param model The model of the cars
   */
  getVehiclesDetails(make: string, model: string): Observable<CarModel[]> {
    return this.http.get<any>(`${this.baseUrl}vehicles?make=${make}&model=${model}`);
  }
}
