import {NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterBtnComponent } from './filter-btn/filter-btn.component';


@NgModule({
  declarations: [
  FilterBtnComponent
],
  imports: [
    CommonModule
  ],
  exports: [FilterBtnComponent],
  providers: [ ]

})
export class SharedModule {

}
