import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locationData: FormGroup;

  constructor(private fb: FormBuilder) {
   }

  ngOnInit() {
    this.createLocationData();
    console.log(this.locationData);
  }

  createFormGroup (): FormGroup {
    const location = this.fb.group({
      address: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      county: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required]
    });
    return location;
  }

  createLocationData(): void {
    this.locationData = this.fb.group({
      locations: this.fb.array([
        this.createFormGroup()
      ])
    });
  }

  addLocation(): void {
    if (this.locationData.status !== 'INVALID') {
      const control = <FormArray>this.locationData.controls['locations'];
      control.push(this.createFormGroup());
      console.log(this.locationData);
    }
  }

  removeAddress(i: number) {
    const control = <FormArray>this.locationData.controls['locations'];
    console.log(this.locationData);
    control.removeAt(i);
  }

  save(locationData): void {
    console.log(locationData.value);
  }
}
