import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from 'src/app/shared/car-service/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allMakes: string[] = [];
  visibleMakes: string[] = [];
  remainingMakes: string[] = [];
  models = [];
  error = false;
  loading = true;
  buttonVisible = true;

  constructor(private carsService: CarsService, private router: Router) { }

  ngOnInit(): void {
    this.carsService.getMakes().subscribe({
      next: data => {
        this.loading = false;
        this.allMakes = data;
        this.visibleMakes = this.allMakes.slice(0, 6);
      },
      error: error => {
        this.loading = false;
        this.error = true;
        this.buttonVisible = false;
      }
    });
  }

  showMoreMakes(): void {
    this.visibleMakes.push(...this.allMakes.slice(6));
    this.buttonVisible = false;
  }

  goToModelsPage(brand: string) {
    this.router.navigate([`models/${brand}`]);
  }
}
