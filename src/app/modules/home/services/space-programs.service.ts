import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from "../../../../environments/environment";
import { BehaviorSubject } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable()

export class SpaceProgramsService {
  private _launchYear: string;
  private _launchStatus: string;
  private _landStatus: string;

  private programLaunchList: Array<any>;

  $launchYear: BehaviorSubject<string> = new BehaviorSubject(this.launchYear);
  $launchStatus: BehaviorSubject<string> = new BehaviorSubject(this.launchStatus);
  $landStatus: BehaviorSubject<string> = new BehaviorSubject(this.landStatus);

  private _programLaunchDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this.programLaunchList);

  constructor(private http: HttpClient, private errorService:ErrorService) {

    this.getLaunches(this.launchYear,this.launchStatus,this.landStatus)
   }

  get programLaunchDataSubject(): BehaviorSubject<any> {
    return this._programLaunchDataSubject;
}
  get launchYear() {
    return this._launchYear
  }

  set launchYear(val: string) {
    this._launchYear = val;
    this.$launchYear.next(val);
    this.getLaunches(this.launchYear,this.launchStatus,this.landStatus)
  }
  get launchStatus() {
    return this._launchStatus
  }

  set launchStatus(val: string) {
    this._launchStatus = val;
    this.$launchStatus.next(val);
    this.getLaunches(this.launchYear,this.launchStatus,this.landStatus)
  }
  get landStatus() {
    return this._landStatus
  }

  set landStatus(val: string) {
    this._landStatus = val;
    this.$landStatus.next(val);
    this.getLaunches(this.launchYear,this.launchStatus,this.landStatus)
  }


  getLaunches(year,launchStatus,landStatus) {
    let url = environment.base_url;
    let params = new HttpParams;
    params = params.set('limit', '100');
    if (year) { params = params.set('launch_year', year); }
    if (launchStatus) { params = params.set('launch_success', launchStatus); }
    if (landStatus) { params = params.set('land_success', landStatus); }

    return this.http.get(url, { params }).subscribe((data:Array<any>)=>{
      this.programLaunchList = data;
      this._programLaunchDataSubject.next(this.programLaunchList);
    },(err)=>{
      this.errorService.showSnackBar("Something went wrong")
    })
  }
}
