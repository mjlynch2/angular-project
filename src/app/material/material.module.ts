import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSliderModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,

} from '@angular/material';


const MaterialComponents = [
  MatSliderModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,
]
@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
