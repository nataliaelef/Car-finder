import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarDetailsComponent } from './core/car-details/car-details.component';
import { CarModelsComponent } from './core/car-models/car-models.component';
import { HomeComponent } from './core/home/home.component';
import { Error404Component } from './shared/error404/error404.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'models/:brand', component: CarModelsComponent },
  { path: 'vehicles/:brand/:model', component: CarDetailsComponent },
  { path: 'error404', component: Error404Component },
  { path: '**', redirectTo: '/error404', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, CarModelsComponent, CarModelsComponent];
