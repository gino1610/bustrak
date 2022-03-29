import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScheduleResponse } from './models/ScheduleResponse';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private readonly ENDPOINTS = {
    getSchedules: 'https://localhost:5001/Schedules'
  }

  constructor(
    private datePipe: DatePipe,
    private http: HttpClient
  ) { }

  public getSchedules(busStopId:number, currentTime: any)
    : Observable<ScheduleResponse[]> {
    let time = this.datePipe.transform(currentTime, "yyyy-MM-dd HH:mm:ss");
    if (time === null) time = "2/2/22 00:00:00"; // random date but initial time (midnight)
    let queryParams = new HttpParams();
    queryParams = queryParams.append("busStopId", busStopId);
    queryParams = queryParams.append("time", time);
    
    return this.http.get<ScheduleResponse[]>(
      this.ENDPOINTS.getSchedules, 
      {params: queryParams}
    );
  }

}
