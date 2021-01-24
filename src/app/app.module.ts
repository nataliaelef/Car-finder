import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './core/home/home.component';
import { CarModelsComponent } from './core/car-models/car-models.component';
import { CarDetailsComponent } from './core/car-details/car-details.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { ErrorComponent } from './shared/error/error.component';
import { Error404Component } from './shared/error404/error404.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarModelsComponent,
    CarDetailsComponent,
    NavigationComponent,
    LoadingComponent,
    ErrorComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    HttpClient,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  exports: [
    NavigationComponent,
    LoadingComponent
  ]
})
export class AppModule { }
