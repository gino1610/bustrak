using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace BusTrakApi
{
    public class Schedules
    {
        public List<Schedule> schedules;

        public Schedules()
        {
            schedules = new List<Schedule>();
            var scheduleList = File.ReadAllLines(@"C:\mtrx\repo\github\GitHub\0328b\bustrak\bustrakUtils\bustrak_scheduler_generator\schedules.txt");

            for (int ii = 0; ii < scheduleList.Length; ii++)
            {
                var splitStr = scheduleList[ii].Split('|');
                if (splitStr.Length == 3)
                {
                    var timeCounter = int.Parse(splitStr[2]);
                    var time = TimeSpan.FromMinutes(timeCounter);
                    schedules.Add(new Schedule(int.Parse(splitStr[0]), int.Parse(splitStr[1]), timeCounter, time));
                }
            }
        }
         
    }

    public class Schedule
    {
        public int BusStopId { get; set; }
        public int RouteId { get; set; }

        // TimeCounter is a value that stores time in 15-minute increments
        // Example: 0:00, 0:15, 0:30, 0:45, 1:00, 1:15 are stored as 0, 1, 2, 3, 4, 5
        public int TimeCounter { get; set; }
        public TimeSpan ArrivalTime { get; set; }

        public Schedule(int busStopId, int routeId, int timeCounter, TimeSpan arrivalTime)
        {
            BusStopId = busStopId;
            RouteId = routeId;
            TimeCounter = timeCounter;
            ArrivalTime = arrivalTime;
        }
    }

    public class ScheduleResponse
    {
        public int BusStopId { get; set; }
        public int RouteId { get; set; }
        public TimeSpan ArrivalTime { get; set; }
    }
}
