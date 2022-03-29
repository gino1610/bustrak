import { Component, Input, OnInit } from '@angular/core';
import { ScheduleResponse } from '../models/ScheduleResponse';

@Component({
  selector: 'app-bus-route-time',
  templateUrl: './bus-route-time.component.html',
  styleUrls: ['./bus-route-time.component.scss']
})
export class BusRouteTimeComponent implements OnInit {
  @Input()
  schedule: ScheduleResponse = new ScheduleResponse;
  
  constructor() { }

  ngOnInit(): void {
  }

}
