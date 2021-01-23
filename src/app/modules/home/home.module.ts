import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component"
import {HomeRoutingModule} from "./home-routing.module";
import { HomeWrapperComponent } from './components/home-wrapper/home-wrapper.component';
import {RouterModule} from "@angular/router";
import { FilterViewComponent } from './components/filter-view/filter-view.component';
import { LaunchDataWrapperComponent } from './components/launch-data-wrapper/launch-data-wrapper.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from "@angular/common/http";
import { SpaceProgramsService } from './services/space-programs.service';
import {SharedModule} from "../shared/shared.module";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ErrorService} from "../home/services/error.service"

@NgModule({
  declarations: [
    HomeComponent,
    HomeWrapperComponent,
    FilterViewComponent,
    LaunchDataWrapperComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    MatCardModule,
    HttpClientModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  exports: [],
  providers: [SpaceProgramsService,ErrorService ]

})
export class HomeModule {

}
