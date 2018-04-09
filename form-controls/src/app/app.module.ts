import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControlDirective } from '@angular/forms';


import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { ClasificationsComponent } from './clasifications/clasifications.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    BuildingsComponent,
    ClasificationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
