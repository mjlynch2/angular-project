import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSliderModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
} from '@angular/material';


const MaterialComponents = [
  MatSliderModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule
]
@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
