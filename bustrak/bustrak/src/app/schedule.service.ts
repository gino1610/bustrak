import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScheduleResponse } from './models/ScheduleResponse';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private readonly ENDPOINTS = {
    getSchedules: 'https://localhost:5001/Schedules'
  }

  constructor(
    private http: HttpClient
  ) { }

  public getSchedules(busStopId:number, currentTime: Date)
    : Observable<ScheduleResponse[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("busStopId", busStopId);
    queryParams = queryParams.append("time", currentTime.toTimeString());
    
    return this.http.get<ScheduleResponse[]>(
      this.ENDPOINTS.getSchedules, 
      {params: queryParams}
    );
  }

}
