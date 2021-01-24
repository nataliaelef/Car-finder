import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from 'src/app/shared/car-service/cars.service';

@Component({
  selector: 'app-car-models',
  templateUrl: './car-models.component.html',
  styleUrls: ['./car-models.component.scss']
})
export class CarModelsComponent implements OnInit {
  brand: string;
  models: string[] = [];
  loading = true;
  error = false;

  constructor(private carsService: CarsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.brand = this.activatedRoute.snapshot.paramMap.get('brand') ?? "";
  }

  ngOnInit(): void {
    this.carsService.getCarsByMake(this.brand).subscribe({
      next: data => {
        this.loading = false;
        this.models = data;
      },
      error: error => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  modelClicked(model: any): void {
    this.router.navigate([`vehicles/${this.brand}/${model}`]);
  }
}
