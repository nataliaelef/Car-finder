import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarModel } from 'src/app/models/car.model';
import { CarsService } from 'src/app/shared/car-service/cars.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  make: string;
  model: string;
  vehicles: CarModel[] = [];
  loading = true;
  error = false;

  constructor(private carsService: CarsService, private activatedRoute: ActivatedRoute) {
    this.make = this.activatedRoute.snapshot.paramMap.get('brand') ?? "";
    this.model = this.activatedRoute.snapshot.paramMap.get('model') ?? "";
  }

  ngOnInit(): void {
    this.carsService.getVehiclesDetails(this.make, this.model).subscribe({
      next: data => {
        this.loading = false;
        this.vehicles = data;
      },
      error: error => {
        this.error = true;
        this.loading = false;
      }
    })
  }

}
