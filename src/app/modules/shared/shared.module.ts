import {NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterBtnComponent } from './filter-btn/filter-btn.component';
import {FilterPipe} from './pipes/landSuccess.pipe'

@NgModule({
  declarations: [
  FilterBtnComponent,FilterPipe
],
  imports: [
    CommonModule
  ],
  exports: [FilterBtnComponent,FilterPipe],
  providers: [ ]

})
export class SharedModule {

}
