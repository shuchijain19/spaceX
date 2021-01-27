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
  landSucessFilter:any;
  constructor(private spaceProgramsService: SpaceProgramsService) { }

  ngOnInit() {
    this.getFilter();
    this.getlaunches();
  }
  getFilter(){
    this.spaceProgramsService.$landStatus.subscribe(val => {
      this.landSucessFilter = val;
    })
  }

  getlaunches() {
    this.spaceProgramsService.programLaunchDataSubject.subscribe((res: Array<any>) => {
      if (res) {
        this.isLoading = false;
        this.launchList = res;
        this.launchList.map((val)=>{
          if(val.rocket && val.rocket.first_stage && val.rocket.first_stage.cores && val.rocket.first_stage.cores.length){
            let land_success =val.rocket.first_stage.cores[0].land_success;
            val['land_success']=(land_success===null)?'N/A':land_success;
          }else{
            val['land_success']='N/A'
          }
        })
      }
    }, (error) => {
      this.isLoading=false      
    })
  }

}
