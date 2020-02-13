import { NgModule } from '@angular/core';
import {MatButtonModule , MatToolbarModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';
import {MatMenuModule} from '@angular/material/menu';
const MaterialComponent = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatCardModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  BrowserAnimationsModule,
  MatSortModule,
  MatMenuModule

];

@NgModule({
  declarations: [],
  imports: MaterialComponent,
  exports: MaterialComponent

})
export class MaterialModule { }
