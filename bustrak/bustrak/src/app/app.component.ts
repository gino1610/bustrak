import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bustrak';
  currentTime = new Date();
  arrivalTimings = [];
  refreshLabels = ["Stop Auto Refresh", "Refreshing", "Auto Refresh Stopped"];
  refreshLabel: string = "";

  timer1Id: any;
  timer2Id: any;

  constructor(
    // private scheduleService: ScheduleService    
  ) {
  }

  ngOnInit(): void {
    this.refreshLabel = this.refreshLabels[0];

    this.timer1Id = setInterval(() => {         
      this.currentTime = new Date();
    }, 1000);

    this.timer2Id = setInterval(() => {         
      this.refreshLabel = this.refreshLabels[1];
    }, 60*1000);
  }

  public OnButtonClick() {

    if (this.refreshLabel == this.refreshLabels[0] ||
      this.refreshLabel == this.refreshLabels[1]) {
        clearInterval(this.timer2Id);
        this.refreshLabel = this.refreshLabels[2];
      }
  }
}
