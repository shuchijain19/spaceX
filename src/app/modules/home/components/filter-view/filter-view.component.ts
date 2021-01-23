import { Component, OnInit } from '@angular/core';
import { filterYears, launchStatus, landingStatus } from "../../../../utils/constants/filterData";
import { SpaceProgramsService } from '../../services/space-programs.service';

@Component({
  selector: 'app-filter-view',
  templateUrl: './filter-view.component.html',
  styleUrls: ['./filter-view.component.scss']
})
export class FilterViewComponent implements OnInit {

  filterYears = filterYears;
  launchStatus = launchStatus;
  landingStatus = landingStatus;
  selectedYear: string;
  landSelected: string;
  launchSelected: string;

  constructor(private spaceProgramService: SpaceProgramsService) { }

  ngOnInit(): void {
    this.setFilters()
  }

  applyYearFilter(year) {
    this.spaceProgramService.launchYear = year;
  }

  applyStatusFilter(val, type) {
    switch (type) {
      case 'launch': this.spaceProgramService.launchStatus = val;
        break;
      case 'land': this.spaceProgramService.landStatus = val;
        break;
    }
  }

  setFilters() {
    this.spaceProgramService.$launchYear.subscribe(year => {
      this.selectedYear = year;
    });
    this.spaceProgramService.$launchStatus.subscribe(val => {
      this.launchSelected = val;
    })
    this.spaceProgramService.$landStatus.subscribe(val => {
      this.landSelected = val;
    })
  }

}
