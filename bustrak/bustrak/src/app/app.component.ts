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
  schedulesForBuStop1:any;
  schedulesForBuStop2:any;
  refreshLabels = ["Stop Auto Refresh", "Refreshing", "Auto Refresh Stopped"];
  refreshLabel: string = "";
  refreshCounter = 0;
  timer1Id: any;
  timer2Id: any;


  constructor(
    private scheduleService: ScheduleService    
  ) {
  }

  ngOnInit(): void {
    this.refreshLabel = this.refreshLabels[0];

    this.timer1Id = setInterval(() => {         
      this.currentTime = new Date();
    }, 1000);

    this.timer2Id = setInterval(() => {         
      this.refreshLabel = this.refreshLabels[1];
      this.refreshCounter = 0;
      this.scheduleService.getSchedules(0, this.currentTime).subscribe(response => {
        this.schedulesForBuStop1 = response;
        this.refreshCounter++;
        if (this.refreshCounter >= 2) {
          this.refreshLabel = this.refreshLabels[0];
        }
        // console.log('response 1');
        // console.log(response);
      });
      this.scheduleService.getSchedules(1, this.currentTime).subscribe(response => {
        this.schedulesForBuStop2 = response;
        this.refreshCounter++;
        if (this.refreshCounter >= 2) {
          this.refreshLabel = this.refreshLabels[0];
        }
        // console.log('response 2');
        // console.log(response);
      });
    }, 5*1000);
  }

  public OnButtonClick() {

    if (this.refreshLabel == this.refreshLabels[0] ||
      this.refreshLabel == this.refreshLabels[1]) {
        clearInterval(this.timer2Id);
        this.refreshLabel = this.refreshLabels[2];
      }
  }
}
