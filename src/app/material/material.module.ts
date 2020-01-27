import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSliderModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatToolbarModule,
} from '@angular/material';


const MaterialComponents = [
  MatSliderModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatToolbarModule,
  
]
@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
