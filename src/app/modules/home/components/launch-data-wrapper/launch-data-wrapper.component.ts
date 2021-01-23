import { Component, OnInit } from '@angular/core';
import { SpaceProgramsService } from "../../services/space-programs.service"

@Component({
  selector: 'launch-data-wrapper',
  templateUrl: './launch-data-wrapper.component.html',
  styleUrls: ['./launch-data-wrapper.component.scss']
})
export class LaunchDataWrapperComponent implements OnInit {

  launchList: Array<any> = [];
  isLoading: boolean = true;

  constructor(private spaceProgramsService: SpaceProgramsService) { }

  ngOnInit() {
    this.getlaunches()
  }

  getlaunches() {
    this.spaceProgramsService.programLaunchDataSubject.subscribe((res: Array<any>) => {
      if (res) {
        this.isLoading = false;
        this.launchList = res;
      }
    }, (error) => {
      this.isLoading=false      
    })
  }

}
